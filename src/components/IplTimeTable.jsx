import React from 'react'
import { Link } from "react-router-dom";


export const IplTimeTable = () => {
  const matches = [
      { matchId: 1, matchName: "CSK vs MI" },
      { matchId: 2, matchName: "RCB vs KKR" },
      { matchId: 3, matchName: "GT vs RR" },
    ];
  
    return (
       <div style={{ textAlign: "center" }}>
        <h1>IPL Matches</h1>
  
        <ul style={{ listStyle: "none" }}>
          {matches.map((match) => (
            <li key={match.matchId}>
              <Link to={`/watch/${match.matchName}`}>{match.matchName}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
}

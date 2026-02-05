import React from 'react'
import { Link } from 'react-router-dom'

export const IplTeam = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>TeamDetail</h1>
        <ul>
          <li>
            <Link to="/watch/rcb">RCB</Link>
          </li>
          <li>
            <Link to="/watch/csk">CSK</Link>
          </li>
          <li>
            <Link to="/watch/mi">MI</Link>
          </li>
          
        </ul>
    </div>
  )
}

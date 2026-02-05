import React from 'react'
import "../assets/css/header.css"

export const HeaderComponent = () => {
  return (
    
    <div>
 <header className="header">
      <div className="logo-section">
        
        <h1 className="title">Virat Kohli</h1>
      </div>

      <nav>
        <ul className="nav-list">
          <li className="nav-item">Home</li>
          <li className="nav-item">Career</li>
          <li className="nav-item">Records</li>
          <li className="nav-item">Gallery</li>
          <li className="nav-item">Contact</li>
        </ul>
      </nav>
    </header>
    </div>
  )
}

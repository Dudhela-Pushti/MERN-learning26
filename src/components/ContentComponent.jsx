import React from 'react'
import "../assets/css/content.css"

import heroImg from "../assets/kohli-hero.jpeg";
import aboutImg from "../assets/kohli-about.jpeg";

export const ContentComponent = () => {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text-box">
            <h1 className="hero-title">Virat Kohli</h1>
            <p className="hero-subtitle">The King of Modern Cricket</p>
            <p className="hero-text">
              A journey of passion, discipline, and unmatched consistency.
            </p>
            <div className="hero-buttons">
              <button className="btn primary">Explore Journey</button>
              <button className="btn secondary">View Records</button>
            </div>
          </div>

          <div className="hero-image-box">
            <img src={heroImg} alt="Virat Kohli" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <div className="about-image">
            <img src={aboutImg} alt="About Virat Kohli" />
          </div>

          <div className="about-text">
            <h2>About Virat Kohli</h2>
            <p>
              Virat Kohli is an Indian international cricketer and former
              captain of the Indian national team. Known for his aggressive
              mindset, exceptional batting skills, and relentless discipline,
              Kohli is one of the greatest cricketers of all time.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlights">
        <h2>Career Highlights</h2>
        <div className="cards">
          <div className="card">Former Captain of Team India</div>
          <div className="card">75+ International Centuries</div>
          <div className="card">ICC Player of the Year</div>
          <div className="card">RCB Legend</div>
        </div>
      </section>

      

    </div>
  )
}

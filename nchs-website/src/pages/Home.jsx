import React from 'react';
import '../styles/Home.css';
import groupPhoto from '../assets/group-photo.png'; 

function Home() {
  return (
    <div className="home-page">

      <section className="hero-section">
        <div className="hero-text">
          <p className="hero-subtitle">Clements High School</p>
          <h1 className="hero-title">National Chinese<br />Honor Society</h1>
          <div className="hero-divider" />
          <div className="hero-welcome">
            <span className="welcome-chinese">欢迎访问我们的网站！</span>
            <span className="welcome-english">Welcome to our site!</span>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-ring" />
          <img
            src={groupPhoto}
            alt="CSNHS Clements Chapter group photo"
            className="hero-image"
          />
          <div className="hero-image-badge">NCHS 2025</div>
        </div>
      </section>

      <section className="nav-buttons-section">
        <a href="/about" className="nav-card nav-card--green">
          <span className="nav-card-label">About Us</span>
        </a>
        <a href="/points" className="nav-card nav-card--blue">
          <span className="nav-card-label">Points</span>
        </a>
        <a href="/news" className="nav-card nav-card--gold">
          <span className="nav-card-label">News &amp; Events</span>
        </a>
      </section>

      <section className="description-section">
        <p className="description-text">
          We are the Clements High School chapter of the{' '}
          <strong>National Chinese Honor Society</strong>! Feel free to explore
          our site to learn more about us and what we do.
        </p>
        <div className="description-deco" />
      </section>

    </div>
  );
}

export default Home;
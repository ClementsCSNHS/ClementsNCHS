import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="footer-inner">

        <div className="footer-brand">
          <span className="footer-brand-name">NCHS</span>
          <span className="footer-brand-sub">Clements High School</span>
        </div>

        <div className="footer-socials">
          <a href="mailto:clementsnchs@gmail.com" className="footer-pill">
            <span className="footer-pill-icon footer-pill-icon--gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <polyline points="2,4 12,13 22,4" />
              </svg>
            </span>
            <span className="footer-pill-text">
              <span className="footer-pill-label">Email</span>
              <span className="footer-pill-value">clementsnchs@gmail.com</span>
            </span>
          </a>

          <a href="https://www.instagram.com/clementsnchs" target="_blank" rel="noopener noreferrer" className="footer-pill">
            <span className="footer-pill-icon footer-pill-icon--green">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span className="footer-pill-text">
              <span className="footer-pill-label">Instagram</span>
              <span className="footer-pill-value">@clementsnchs</span>
            </span>
          </a>
        </div>

        <div className="footer-copy">
          © 2026 CHS NCHS
        </div>

      </div>

      <div className="footer-bottom">
        <p className="footer-disclaimer">
          This is a student social media site. Opinions expressed on this site are not necessarily the opinions of Fort Bend ISD and shall not be attributed to Fort Bend ISD.
        </p>
        <a href="https://clementscsnhs.vercel.app/" target="_blank" rel="noopener noreferrer" className="footer-credit">
          Made by Clements CSNHS
        </a>
      </div>
    </footer>
  );
}

export default Footer;
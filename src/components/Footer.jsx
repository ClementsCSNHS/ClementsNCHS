import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          © 2025 CHS NCHS
        </div>
        <div className="footer-right">
          Website made by <a href="https://clementscsnhs.vercel.app/" target="_blank" rel="noopener noreferrer">Clements CSNHS</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
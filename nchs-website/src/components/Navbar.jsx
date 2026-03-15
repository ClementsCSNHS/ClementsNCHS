import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();
  const moreRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
    setMoreOpen(false);
    document.body.classList.remove('menu-open');
  }, [location]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('menu-open');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') toggleMenu();
  };

  const moreActive = location.pathname === '/volunteering';

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-container">

        <div
          className={`menu-icon ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          onKeyPress={handleKeyPress}
          role="button"
          tabIndex={0}
          aria-expanded={isOpen}
          aria-label="menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/points" className={`nav-link ${location.pathname === '/points' ? 'active' : ''}`}>
              Points
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className={`nav-link ${location.pathname === '/news' ? 'active' : ''}`}>
              News &amp; Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}>
              FAQ
            </Link>
          </li>

          <li className="nav-item nav-item--more" ref={moreRef}>
            <button
              className={`nav-link nav-link--more ${moreActive ? 'active' : ''}`}
              onClick={() => setMoreOpen(!moreOpen)}
              aria-expanded={moreOpen}
            >
              More <span className={`more-caret ${moreOpen ? 'more-caret--open' : ''}`}>&#9662;</span>
            </button>
            <ul className={`dropdown-menu ${moreOpen ? 'dropdown-menu--open' : ''}`}>
              <li>
                <Link to="/volunteering" className="dropdown-link">
                  Volunteering
                </Link>
              </li>
            </ul>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
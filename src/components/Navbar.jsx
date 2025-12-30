import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('menu-open');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleMenu();
    }
  };

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
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              aria-current={location.pathname === '/about' ? 'page' : undefined}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/points" 
              className={`nav-link ${location.pathname === '/points' ? 'active' : ''}`}
              aria-current={location.pathname === '/points' ? 'page' : undefined}
            >
              Points
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/news" 
              className={`nav-link ${location.pathname === '/news' ? 'active' : ''}`}
              aria-current={location.pathname === '/news' ? 'page' : undefined}
            >
              News & Events
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/faq" 
              className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`}
              aria-current={location.pathname === '/faq' ? 'page' : undefined}
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
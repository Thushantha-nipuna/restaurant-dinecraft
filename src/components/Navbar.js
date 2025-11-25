
import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('home')}>
          <h1>DINECRAFT</h1>
        </div>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <li onClick={() => scrollToSection('home')}>HOME</li>
          <li onClick={() => scrollToSection('about')}>ABOUT</li>
          <li onClick={() => scrollToSection('gallery')}>MENU</li>
          <li onClick={() => scrollToSection('location')}>LOCATION</li>
          <li onClick={() => scrollToSection('contact')}>CONTACT</li>
          <li>
            <button className="order-btn">ORDER NOW</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
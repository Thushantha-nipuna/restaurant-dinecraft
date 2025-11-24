// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-section brand">
            <h2>DINECRAFT</h2>
            <p>Crafting memorable dining experiences since 2020</p>
            <div className="social-icons">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>CONTACT</h3>
            <div className="footer-links">
              <a href="tel:+94123456789">
                <FaPhone />
                <span>+94 123 456 789</span>
              </a>
              <a href="mailto:hello@dinecraft.lk">
                <FaEnvelope />
                <span>hello@dinecraft.lk</span>
              </a>
              <a href="#">
                <FaMapMarkerAlt />
                <span>123 Galle Road, Colombo 03</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>HOURS</h3>
            <div className="hours-list">
              <div className="hours-item">
                <span>MONDAY - FRIDAY</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
              <div className="hours-item">
                <span>WEEKENDS</span>
                <span>10:00 AM - 12:00 AM</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>QUICK LINKS</h3>
            <div className="footer-links">
              <a href="#about">About Us</a>
              <a href="#gallery">Menu</a>
              <a href="#">Reservations</a>
              <a href="#">Careers</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 THUSHANTHA NIPUNA. ALL RIGHTS RESERVED.</p>
        <div className="footer-legal">
          <a href="#">PRIVACY POLICY</a>
          <span>|</span>
          <a href="#">TERMS OF SERVICE</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
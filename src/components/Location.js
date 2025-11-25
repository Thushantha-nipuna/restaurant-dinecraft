
import React from 'react';
import './Location.css';
import { FaMapMarkerAlt, FaPhone, FaClock, FaDirections } from 'react-icons/fa';

function Location() {
  return (
    <section id="location" className="location">
      <div className="location-container">
        <div className="location-header">
          <h2>FIND US</h2>
          <div className="title-underline"></div>
          <p>VISIT US FOR AN UNFORGETTABLE DINING EXPERIENCE</p>
        </div>

        <div className="location-content">
          <div className="location-info">
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-text">
                <h3>ADDRESS</h3>
                <p>123 Galle Road</p>
                <p>Colombo 03, Sri Lanka</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-text">
                <h3>PHONE</h3>
                <p>+94 123 456 789</p>
                <p>+94 987 654 321</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaClock />
              </div>
              <div className="info-text">
                <h3>HOURS</h3>
                <p>Mon - Fri: 11 AM - 11 PM</p>
                <p>Weekends: 10 AM - 12 AM</p>
              </div>
            </div>

            <button className="directions-btn">
              <FaDirections />
              <span>GET DIRECTIONS</span>
            </button>
          </div>

          <div className="location-map">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467127638!2d79.85080731477264!3d6.914682295008567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259692f7b87c3%3A0x9b8b72a5e4b3e8f0!2sGalle%20Road%2C%20Colombo!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
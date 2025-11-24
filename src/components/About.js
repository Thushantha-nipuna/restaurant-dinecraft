// src/components/About.js
import React from 'react';
import './About.css';
import { FaUtensils, FaTruck, FaClock, FaAward } from 'react-icons/fa';

function About() {
  const services = [
    {
      icon: <FaUtensils />,
      title: 'GOURMET CUISINE',
      description: 'Expertly crafted dishes using premium ingredients and innovative cooking techniques.'
    },
    {
      icon: <FaTruck />,
      title: 'FAST DELIVERY',
      description: 'Hot and fresh meals delivered to your door within 30 minutes or less.'
    },
    {
      icon: <FaClock />,
      title: 'OPEN LATE',
      description: 'Serving delicious food from 11 AM to 11 PM, seven days a week.'
    },
    {
      icon: <FaAward />,
      title: 'AWARD WINNING',
      description: 'Recognized as the Best Restaurant in Colombo for three consecutive years.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-header">
        <h2 className="about-title">WHY DINECRAFT</h2>
        <div className="title-underline"></div>
        <p className="about-subtitle">
          CRAFTING MEMORABLE DINING EXPERIENCES
        </p>
      </div>

      <div className="about-container">
        <div className="about-grid">
          {services.map((service, index) => (
            <div 
              className="about-card" 
              key={index}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card-icon-wrapper">
                <div className="card-icon">{service.icon}</div>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-cta">
        <h3>EXPERIENCE THE DIFFERENCE</h3>
        <button className="cta-btn">VIEW FULL MENU</button>
      </div>
    </section>
  );
}

export default About;
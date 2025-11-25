
import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  // array of bg imgs
  const images = [
    `${process.env.PUBLIC_URL}/images/hero-bg-1.jpg`,
    `${process.env.PUBLIC_URL}/images/hero-bg-2.jpg`,
    `${process.env.PUBLIC_URL}/images/hero-bg-3.jpg`,
    `${process.env.PUBLIC_URL}/images/hero-bg-4.jpg`,
    `${process.env.PUBLIC_URL}/images/hero-bg-5.jpg`
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    transition: 'background-image 1s ease-in-out' 
  };

  return (
    <section id="home" className="hero" style={heroStyle}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">DINE</span>
            <span className="title-line">CRAFT</span>
          </h1>
          <p className="hero-location">DOWNTOWN COLOMBO</p>
          <p className="hero-tagline">AVAILABLE FOR PICKUP & DELIVERY</p>
        </div>
        
        <div className="hero-buttons">
          <button className="hero-btn primary" onClick={scrollToGallery}>
            ORDER PICKUP
          </button>
          <button className="hero-btn secondary" onClick={scrollToGallery}>
            ORDER DELIVERY
          </button>
        </div>
      </div>

      {/* Slideshow indicators */}
      <div className="slideshow-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
        
    </section>
  );
}

export default Hero;
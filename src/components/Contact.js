
import React, { useState } from 'react';
import './Contact.css';
import { FaPaperPlane } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>GET IN TOUCH</h2>
          <div className="title-underline"></div>
          <p>QUESTIONS? RESERVATIONS? WE'D LOVE TO HEAR FROM YOU</p>
        </div>

        <div className="contact-content">
          <div className="contact-info-text">
            <h3>SEND US A MESSAGE</h3>
            <p>
              Whether you're planning a special celebration, have dietary requirements,
              or just want to know more about our menu, our team is here to help.
              Fill out the form and we'll get back to you within 24 hours.
            </p>
            
            <div className="contact-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Private dining available</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Catering services</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Special event hosting</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME *"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="YOUR PHONE"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="YOUR MESSAGE *"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <FaPaperPlane />
              <span>SEND MESSAGE</span>
            </button>

            {submitted && (
              <div className="success-message">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
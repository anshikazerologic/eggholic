import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-info-area" id="contact">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Contact Details */}
          <div className="col-md-4">
            <h3 className="contact-title">Contact Us</h3>
            <div className="contact-details mt-3">
              <p className="address">
                <i className="fas fa-map-marker-alt me-2"></i>
                5959 W Diversey Ave, Chicago, IL 60639
              </p>
              <p className="phone">
                <i className="fas fa-phone-alt me-2"></i>
                Phone: <a href="tel:7733776402">(773) 377-6402</a>
              </p>
            </div>
            
            <div className="social-links mt-4">
              <span className="social_item">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </span>
              <span className="social_item">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </span>
            </div>
          </div>

          {/* Map Section */}
          <div className="col-md-8">
            <div className="map-container rounded overflow-hidden shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.441443658249!2d-87.77783462341858!3d41.93175006172081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcc606d091e41%3A0xc3f60505191b6f04!2s5959%20W%20Diversey%20Ave%2C%20Chicago%2C%20IL%2060639%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
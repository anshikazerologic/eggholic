import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <main className="landing-page">
      {/* --- Hero Section --- */}
      <section className="hero-parallax">
        <div className="container">
          <h1 className="display-2 fw-bold">Mexican Food Restaurant in Austin</h1>
          <p className="fs-4 mb-4">Authentic Flavors, Bold Spices, Unforgettable Taste.</p>
          <a 
            href="https://new.tacopros.com/austin-order" 
            className="btn-loading order-btn-logic"
          >
            <span>Order Now</span>
          </a>
        </div>
      </section>

      {/* --- SEO Content Section --- */}
      <article className="seo-content container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="mb-4">Savor Authentic Mexican Street Food in Austin</h2>
            <p>
              Craving bold flavors and street-style eats? Taco Pros in Austin brings the hustle and spice of
              authentic street food to life with a unique menu. From spicy tacos to flavorful
              burritos and fusion favorites, every dish is crafted with authentic taste and a modern twist.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default HeroSection;
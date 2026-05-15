import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBar from '../components/Navbar';
import './BlogPage.css';

const IndianStreetFood = () => {
  return (
    <HelmetProvider>
      <NavBar />

      {/* SEO Meta Tags using Helmet */}
      <Helmet>
        <title>Indian Street Food Guide | Popular Dishes Explained</title>
        <meta name="description" content="Learn about Indian street food, popular dishes, and why these fast, flavorful meals are loved around the world." />
        <link rel="canonical" href="https://eggholic.com/news/why-indian-street-food-is-popular" />
      </Helmet>

      <div className="pop-blog-wrapper">
        {/* Top Cover Image */}
        <img 
          src="/egg blog apps.jpg" 
          alt="Vibrant Indian Street Food" 
          className="pop-cover-image"
        />

        {/* Main Content Container (1300px centered) */}
        <div className="pop-container">
          <header className="pop-header">
            <h1 className="pop-main-title">Indian Street Food: Flavor and Culture</h1>
            <h2 className="pop-sub-title">Why Indian Street Food Is So Popular Worldwide</h2>
          </header>

          <article className="pop-content-section">
            <p className="pop-text">
              Indian street food stands out as a lively and well-known part of the country’s food scene. With bold flavors, 
              quick cooking, and low prices, it is a big part of daily life. You’ll find these dishes everywhere, from 
              crowded markets to local street corners. Today, Indian street food is popular worldwide, showing up in 
              restaurants and food trucks far beyond India.
            </p>

            <h3 className="pop-heading">What Defines Street Food</h3>
            <p className="pop-text">
              Street food is prepared quickly and served in portable portions. Vendors typically use fresh ingredients 
              and robust spice blends, creating dishes that are both flavorful and accessible. Many street foods are 
              designed for on-the-go consumption, making them practical for busy lifestyles. Others are shared among 
              friends, turning a quick meal into a social experience.
            </p>
            <p className="pop-text">
              These foods balance crunchy textures, tangy tastes, a bit of sweetness, and spice in every bite. The aim 
              is to pack in as much flavor as possible, as fast as possible.
            </p>

            <h3 className="pop-heading">Popular Indian Street Foods</h3>
            <p className="pop-text">
              Several street foods are widely recognized:
            </p>
            <ul className="pop-list">
              <li className="pop-list-item">Chaat snacks with tangy and spicy toppings</li>
              <li className="pop-list-item">Pav-based dishes served with bread rolls</li>
              <li className="pop-list-item">Egg rolls or wraps filled with spiced ingredients</li>
              <li className="pop-list-item">Fried snacks made from lentils or vegetables</li>
              <li className="pop-list-item">Rice bowls with bold seasoning</li>
              <li className="pop-list-item">Savory pancakes or crepes</li>
            </ul>
            <p className="pop-text">
              Each dish is made to be easy to eat and full of flavor. You can often add your favorite toppings, 
              sauces, or adjust the spice to your liking.
            </p>

            <h3 className="pop-heading">Why It Is So Popular</h3>
            <p className="pop-text">
              Indian street food is both affordable and varied. You get to taste many flavors without needing to sit 
              down for a formal meal. Since the portions are small, you can try several dishes at once. This variety 
              attracts both locals and tourists. Whether for a quick snack or a casual meal, street food provides 
              satisfying options.
            </p>

            <h3 className="pop-heading">Cultural Importance</h3>
            <p className="pop-text">
              Street food shows off local culture and everyday habits. Many vendors focus on dishes their families 
              have made for years. Markets and street corners turn into places where people gather, eat, and connect. 
              Sharing these moments is a big reason why street food is so loved.
            </p>
            <p className="pop-text">
              Street food also highlights regional differences. Each city has its own famous snacks, special 
              ingredients, and unique flavors. Trying street food is a great way to learn about local traditions and tastes.
            </p>

            <h3 className="pop-heading">Final Thoughts</h3>
            <p className="pop-text">
              Indian street food brings together easy eating and strong flavors. Its range, low cost, and cultural 
              meaning have made it a favorite around the world. Whether you eat them in a crowded market or make 
              them at home, these dishes reflect the lively spirit of everyday cooking. The mix of textures, spices, 
              and easy access keeps Indian street food important on the world food scene.
            </p>
          </article>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default IndianStreetFood;
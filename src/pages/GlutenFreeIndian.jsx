import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBar from '../components/Navbar';
import './BlogPage.css';

const GlutenFreeIndian = () => {
  return (
    <HelmetProvider>
      <NavBar />

      {/* SEO Meta Tags using Helmet */}
      <Helmet>
        <title>Looking for Gluten-Free Indian Food? Try These Eggholic Favorites</title>
        <meta name="description" content="Discover naturally gluten-free Indian food options at Eggholic. From Anda Pulav to Rice Bowls, enjoy bold flavors without the wheat." />
        <link rel="canonical" href="https://eggholic.com/news/gluten-free-indian-food-options" />
      </Helmet>

      <div className="pop-blog-wrapper">
        {/* Top Cover Image */}
        <img 
          src="/egg blog gluten free.jpg" 
          alt="Gluten Free Indian Food" 
          className="pop-cover-image"
        />

        {/* Main Content Container (1300px centered) */}
        <div className="pop-container">
          <header className="pop-header">
            <h1 className="pop-main-title">Gluten-Free Indian Food: What to Order at Eggholic</h1>
            <h2 className="pop-sub-title">Naturally Wheat-Free Comfort Food with Bold Spices</h2>
          </header>

          <article className="pop-content-section">
            <p className="pop-text">
              Indian cuisine is a great choice for naturally gluten-free meals, especially when dishes feature rice, lentils, 
              and eggs. If you want gluten-free Indian food that still tastes delicious, Eggholic has a menu that balances 
              flavor and dietary needs.
            </p>

            <h3 className="pop-heading">Why Indian Food Is Naturally Gluten-Free</h3>
            <p className="pop-text">
              Many traditional Indian dishes use rice instead of wheat. Staples like pulav, curries, and egg dishes are made 
              without flour thickeners. You can enjoy bold spices, comforting food, and filling meals without worrying 
              about hidden gluten.
            </p>
            <p className="pop-text">
              The main foods to watch out for are wheat breads like naan or roti. Most other dishes are naturally 
              gluten-free or can be adjusted to fit your needs.
            </p>

            <h3 className="pop-heading">Gluten-Free Dishes to Try at Eggholic</h3>
            <p className="pop-text">
              Eggholic’s menu focuses on eggs, making it easy to find gluten-free choices:
            </p>
            <ul className="pop-list">
              <li className="pop-list-item"><strong>Anda Pulav:</strong> Fragrant basmati rice cooked with spices and boiled eggs.</li>
              <li className="pop-list-item"><strong>Egg Bhurji with Rice:</strong> Scrambled eggs with onions, tomatoes, and spices served over rice.</li>
              <li className="pop-list-item"><strong>Masala Omelettes:</strong> Protein-packed and customizable.</li>
              <li className="pop-list-item"><strong>Rice Bowls:</strong> Flavorful, filling, and wheat-free.</li>
              <li className="pop-list-item"><strong>Lassi and Chaas:</strong> Yogurt-based drinks that pair perfectly with spicy dishes.</li>
            </ul>
            <p className="pop-text">
              Most dishes are made fresh, so it’s easy to request modifications if you need to avoid gluten.
            </p>

            <h3 className="pop-heading">How Eggholic Makes Ordering Easy</h3>
            <p className="pop-text">
              Ordering gluten-free should be simple. At Eggholic, you can expect:
            </p>
            <ul className="pop-list">
              <li className="pop-list-item">Dishes are made fresh</li>
              <li className="pop-list-item">Rice can replace bread</li>
              <li className="pop-list-item">Spice levels are customizable</li>
              <li className="pop-list-item">Staff can guide you through safe options</li>
            </ul>
            <p className="pop-text">
              This flexibility makes Eggholic a great place for anyone wanting gluten-free Indian comfort food.
            </p>

            <h3 className="pop-heading">Tips for Ordering Gluten-Free</h3>
            <p className="pop-text">
              If you’re eating out and want gluten-free Indian food, here are some helpful tips:
            </p>
            <ul className="pop-list">
              <li className="pop-list-item">Choose rice-based dishes</li>
              <li className="pop-list-item">Skip naan or bread</li>
              <li className="pop-list-item">Ask about sauces</li>
              <li className="pop-list-item">Stick to egg, rice, and lentil dishes</li>
            </ul>
            <p className="pop-text">
              Indian food is full of flavor even without wheat, making it a great choice for gluten-free diners.
            </p>

            <h3 className="pop-heading">A Flavorful Gluten-Free Experience</h3>
            <p className="pop-text">
              Eating gluten-free doesn’t mean you have to eat bland food. At Eggholic, bold spices, fresh eggs, 
              and rice dishes make the menu both tasty and easy to enjoy.
            </p>
            <p className="pop-text">
              The next time you want gluten-free Indian food, try Eggholic for a meal that’s full of flavor and 
              naturally wheat-free.
            </p>
          </article>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default GlutenFreeIndian;
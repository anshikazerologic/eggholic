import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBar from '../components/Navbar';
import './BlogPage.css';

const IndianFoodHealthGuide = () => {
  return (
    <HelmetProvider>
      <NavBar />

      {/* SEO Meta Tags using Helmet */}
      <Helmet>
        <title>Is Indian Food Healthy? Nutrition, Spices, and What to Expect</title>
        <meta name="description" content="Discover if Indian food is healthy. Explore the nutritional benefits of spices, lentils, and vegetables, and learn how to choose balanced Indian meals." />
        <link rel="canonical" href="https://eggholic.com/news/is-indian-food-healthy" />
      </Helmet>

      <div className="pop-blog-wrapper">
        {/* Top Cover Image */}
        <img 
          src="/egg blog street food healthy.jpg" 
          alt="Healthy Indian Meal with Vegetables and Grains" 
          className="pop-cover-image"
        />

        {/* Main Content Container (1300px centered) */}
        <div className="pop-container">
          <header className="pop-header">
            <h1 className="pop-main-title">Is Indian Food Healthy? A Guide to Spice, Nutrition, and What to Expect</h1>
            <h2 className="pop-sub-title">Nutrition, Spices, and Navigating the Diverse Indian Menu</h2>
          </header>

          <article className="pop-content-section">
            <p className="pop-text">
              Indian food is one of the fastest-growing cuisines in the United States, yet many people still ask: 
              <strong> Is Indian food healthy?</strong> Is it always spicy? What exactly makes up an Indian meal? 
              The answer lies in the ingredients, preparation, and balance. Indian cuisine is a diverse collection 
              of regional styles that can be both nourishing and flavorful when chosen thoughtfully.
            </p>

            <h3 className="pop-heading">What is Indian Food?</h3>
            <p className="pop-text">
              Indian food refers to a wide variety of dishes from different regions of India, each using its own 
              combination of grains, vegetables, and spices. Many everyday meals are built around rice or bread 
              paired with lentils (dal) and spiced gravies. 
            </p>
            <p className="pop-text">
              Spices like <strong>turmeric, cumin, coriander, ginger, and garlic</strong> are used to create layered 
              flavors rather than relying on heavy fats. Restaurants like <strong>Eggholic</strong> showcase this 
              diversity through street-style snacks, rice plates, and wraps that offer a mix of textures and 
              Gujarati-inspired flavors.
            </p>

            <h3 className="pop-heading">Is Indian Food Healthy and Good for You?</h3>
            <p className="pop-text">
              Yes, Indian food can be very healthy. Most traditional dishes center on <strong>plant-based proteins</strong> 
              like chickpeas and lentils, which provide high fiber. Here is why it’s nutritionally dense:
            </p>
            <ul className="pop-list">
              <li className="pop-list-item"><strong>Fiber & Protein:</strong> Lentils and beans are staples that support digestion and muscle repair.</li>
              <li className="pop-list-item"><strong>Complex Carbs:</strong> Grains like basmati rice and whole-wheat roti provide steady energy.</li>
              <li className="pop-list-item"><strong>Antioxidants:</strong> Spices like turmeric (curcumin) and ginger have natural anti-inflammatory properties.</li>
              <li className="pop-list-item"><strong>Vegetable Forward:</strong> Many dishes use seasonal vegetables as the main star, ensuring high vitamin intake.</li>
            </ul>

            <h3 className="pop-heading">Debunking the "Spicy" and "Heavy" Myths</h3>
            <p className="pop-text">
              <strong>Is it always spicy?</strong> Not necessarily. Indian cooking uses spices for <em>aroma</em> and 
              <em>complexity</em> rather than just heat. Most modern restaurants allow you to customize the heat 
              level from mild to bold.
            </p>
            <p className="pop-text">
              <strong>Is it heavy?</strong> While celebratory dishes may use cream or butter, everyday Indian food 
              is relatively light. Street foods, wraps, and lentil-based soups (dal) are designed to be filling 
              without being sluggish. Choosing grilled or sautéed options over deep-fried snacks is an easy 
              way to keep the meal balanced.
            </p>

            <h3 className="pop-heading">How to Choose a Balanced Indian Meal</h3>
            <p className="pop-text">
              To make the most of your dining experience, follow these tips for a well-rounded plate:
            </p>
            <ul className="pop-list">
              <li className="pop-list-item">Pair a vegetable-based dish with a protein option (like egg or paneer).</li>
              <li className="pop-list-item">Opt for whole-grain breads or steamed rice.</li>
              <li className="pop-list-item">Incorporate a side of yogurt (raita) or a fresh salad for probiotics and crunch.</li>
              <li className="pop-list-item">Share multiple small plates to get a variety of nutrients and flavors.</li>
            </ul>

            <h3 className="pop-heading">Final Thoughts</h3>
            <p className="pop-text">
              Indian cuisine offers incredible flexibility and depth. It can be a highly nutritious part of your 
              diet, balancing comfort and health in equal measure. As more Americans explore these flavors, they 
              are discovering that Indian food isn't just a treat for the taste buds—it's a smart choice for the body, too.
            </p>
          </article>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default IndianFoodHealthGuide;
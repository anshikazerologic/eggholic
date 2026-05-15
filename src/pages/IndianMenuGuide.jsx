import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBar from '../components/Navbar';
import './BlogPage.css';

const IndianMenuGuide = () => {
  return (
    <HelmetProvider>
      <NavBar />

      {/* SEO Meta Tags using Helmet */}
      <Helmet>
        <title>Indian Restaurant Menu Guide | How to Order</title>
        <meta name="description" content="Learn how to read an Indian restaurant menu, understand dish types, spice levels, and choose meals that match your taste and diet." />
        <link rel="canonical" href="https://eggholic.com/news/how-to-order-from-indian-menu" />
      </Helmet>

      <div className="pop-blog-wrapper">
        {/* Top Cover Image */}
        <img 
          src="/egg blog how to read indian menu.jpg" 
          alt="Indian Restaurant Menu and Dining" 
          className="pop-cover-image"
        />

        {/* Main Content Container (1300px centered) */}
        <div className="pop-container">
          <header className="pop-header">
            <h1 className="pop-main-title">How to Read an Indian Restaurant Menu</h1>
            <h2 className="pop-sub-title">Confused by an Indian Menu? Here’s How to Read and Order Easily</h2>
          </header>

          <article className="pop-content-section">
            <p className="pop-text">
              An Indian restaurant menu might seem overwhelming at first, with unfamiliar dish names, many sections, 
              and lots of cooking styles. But once you know how these menus are set up, ordering gets much easier. 
              Most Indian menus are organized by cooking methods, ingredients, and regional styles. If you understand 
              how dishes are grouped and described, you can confidently pick meals that suit your taste, spice level, 
              and dietary needs.
            </p>

            <h3 className="pop-heading">Why Indian Menus Seem Complex</h3>
            <p className="pop-text">
              Indian cuisine is incredibly diverse, shaped by regional traditions, climate, and local ingredients. 
              A single menu may include dishes inspired by North Indian, South Indian, and street-food traditions. 
              Instead of focusing on one main course per person, many Indian meals are designed for sharing. This 
              variety can make menus look long and complicated, but the structure is usually consistent across restaurants.
            </p>
            <p className="pop-text">
              Most menus sort dishes by how they are cooked or served. Once you spot these categories, it becomes 
              easier to look through the menu.
            </p>

            <h3 className="pop-heading">Common Menu Sections</h3>
            <p className="pop-text">
              A standard Indian restaurant menu usually has a few main sections:
            </p>
            <ul className="pop-list">
              <li className="pop-list-item">Appetizers or street-style snacks</li>
              <li className="pop-list-item">Curries or gravies</li>
              <li className="pop-list-item">Dry or sautéed dishes</li>
              <li className="pop-list-item">Rice preparations</li>
              <li className="pop-list-item">Breads</li>
              <li className="pop-list-item">Egg and vegetarian dishes</li>
              <li className="pop-list-item">Desserts and beverages</li>
            </ul>
            <p className="pop-text">
              Each section covers a different part of the meal. Appetizers are usually small plates for sharing, 
              while curries and rice dishes make up the main course. Breads and sides add balance and texture to the meal.
            </p>

            <h3 className="pop-heading">Understanding Curries and Gravies</h3>
            <p className="pop-text">
              Curries are some of the most well-known Indian dishes. On a menu, “curry” means dishes cooked in a 
              sauce made from things like tomatoes, onions, yogurt, coconut milk, or cream. Some curries are rich 
              and creamy, while others are lighter and spicier. People usually eat these dishes with rice or bread 
              to balance the flavors.
            </p>
            <p className="pop-text">
              Gravies can be mild and buttery or bold and spicy. Menu descriptions usually give clues about the flavors. 
              Words like “butter,” “korma,” or “cream” mean the dish is milder. If you see “masala,” “spicy,” or “chili,” 
              expect more heat and stronger spices.
            </p>

            <h3 className="pop-heading">What Are Dry Dishes?</h3>
            <p className="pop-text">
              Dry dishes, sometimes labeled as sautéed or stir-fried, contain minimal sauce. Dry dishes, sometimes 
              called sautéed or stir-fried, have little or no sauce. They highlight spices and texture instead of gravy. 
              These dishes might have vegetables, eggs, or other proteins cooked with onions, herbs, and spices. 
              You can eat them with rice or bread, or enjoy them alone as a lighter choice. Some rice dishes, such 
              as biryani or flavored rice preparations, are complete meals that combine grains, spices, and protein. 
              These dishes are convenient if you want something filling without ordering multiple items. They are also 
              a good choice for solo diners.
            </p>

            <h3 className="pop-heading">Choosing Based on Flavor Preferences</h3>
            <p className="pop-text">
              When you read menu descriptions, watch for hints about flavor and spice. If you like milder food, pick 
              dishes called creamy, buttery, or lightly spiced. If you want stronger flavors, look for words like 
              masala, chili, or street-style. Most restaurants let you choose how spicy you want your food, so you 
              can ask for mild, medium, or spicy.
            </p>
            <p className="pop-text">
              Egg dishes are a good place to start because they are balanced and filling but not too heavy. They 
              also go well with both rice and bread.
            </p>

            <h3 className="pop-heading">Portion Size and Sharing</h3>
            <p className="pop-text">
              Indian meals are usually served family-style, with several dishes shared at the table. Try ordering 
              one curry, one dry dish, and a rice or bread to taste different flavors. If you are eating alone, 
              one rice dish or a curry with a side is often enough.
            </p>

            <h3 className="pop-heading">Dietary Preferences and Flexibility</h3>
            <p className="pop-text">
              Indian menus usually work well for different diets. There are plenty of vegetarian choices, and many 
              dishes are gluten-free if you pick rice instead of bread. Lentils, vegetables, and eggs offer protein 
              for people who do not eat meat. If you have special dietary needs, you can often ask for changes.
            </p>

            <h3 className="pop-heading">Final Thoughts</h3>
            <p className="pop-text">
              Once you know the categories and cooking styles, reading an Indian restaurant menu gets much easier. 
              Begin with ingredients you know, adjust the spice to your liking, and try new things slowly. Indian 
              food is flexible and suits many tastes and diets. With some practice, looking through the menu can 
              be a fun part of your meal instead of a challenge.
            </p>
          </article>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default IndianMenuGuide;
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBar from '../components/Navbar';
import './BlogPage.css';

const IndianFoodGrowth = () => {
  return (
    <HelmetProvider>
      <NavBar />

      {/* SEO Meta Tags using Helmet */}
      <Helmet>
        <title>Indian Food in USA | Popular Dishes, Trends, and Growth</title>
        <meta name="description" content="Discover the growth of Indian food in the USA, popular dishes Americans love, and why Indian cuisine continues to expand across cities and dining trends." />
        <link rel="canonical" href="https://eggholic.com/news/growth-of-indian-food-in-usa" />
      </Helmet>

      <div className="pop-blog-wrapper">
        {/* Top Cover Image */}
        <img 
          src="/egg blog sandwich.jpg" 
          alt="Indian Food Culture in the USA" 
          className="pop-cover-image"
        />

        {/* Main Content Container (1300px centered) */}
        <div className="pop-container">
          <header className="pop-header">
            <h1 className="pop-main-title">Indian Food in the USA: Popular Dishes, Growth, and Why It Continues to Rise</h1>
            <h2 className="pop-sub-title">Growth of Indian Food in the USA: Popular Dishes and Trends</h2>
          </header>

          <article className="pop-content-section">
            <p className="pop-text">
              Indian food in the USA has grown from a niche option to a well-known part of the country’s dining scene. 
              Now, you can find Indian restaurants in big cities, suburbs, and college towns. People are drawn to 
              Indian cuisine for its bold flavors, variety, and ability to fit different diets. As Americans try 
              more global foods, Indian cuisine has built a strong and growing presence.
            </p>

            <h3 className="pop-heading">Growth of Indian Food in the USA</h3>
            <p className="pop-text">
              Indian food has slowly but steadily become more popular in the United States. At first, Indian restaurants 
              mostly served immigrant communities, but over time, more people wanted to try new flavors. Travel, 
              cultural exchange, and media have all helped Americans become familiar with Indian dishes and ingredients.
            </p>
            <p className="pop-text">
              Lately, more people want food that is both diverse and full of flavor. Many are moving beyond classic 
              American dishes and trying foods from around the world. Indian food fits this trend because it offers 
              variety, comfort, and can be customized. With more fast-casual and takeout options, Indian meals are 
              now easy to enjoy any day, not just for special occasions.
            </p>

            <h3 className="pop-heading">Popular Indian Dishes in the USA</h3>
            <p className="pop-text">
              Some Indian dishes have become especially popular in American cities. These meals offer rich flavors that 
              still feel familiar, making them easy for first-time diners to try.
            </p>
            <p className="pop-text">
              Common favorites include:
            </p>
            <ul className="pop-list">
              <li className="pop-list-item">Tomato-based and creamy curries</li>
              <li className="pop-list-item">Rice dishes such as biryani or flavored rice</li>
              <li className="pop-list-item">Lentil dishes like dal</li>
              <li className="pop-list-item">Egg-based preparations</li>
              <li className="pop-list-item">Grilled or roasted items with spices</li>
              <li className="pop-list-item">Street-style snacks and wraps</li>
            </ul>
            <p className="pop-text">
              Rice and curry dishes are favorites because they are filling and easy to share. Egg dishes and vegetarian 
              options are also popular with people who want protein without eating a lot of meat.
            </p>

            <h3 className="pop-heading">Why Indian Food Appeals to American Diners</h3>
            <p className="pop-text">
              A big reason Indian food is so popular in the USA is its flexibility. Many dishes can be made mild, 
              medium, or spicy, so diners can pick what suits them best. This makes it easier for people to try new 
              flavors without feeling overwhelmed.
            </p>
            <p className="pop-text">
              Another reason is the variety of diets to which Indian food can adapt. There are lots of vegetarian 
              and vegan dishes, and many rice-based meals are naturally gluten-free. As more Americans try plant-based 
              or flexible diets, these choices are even more appealing. Lentils, beans, vegetables, and eggs offer 
              protein and nutrients, making meals balanced.
            </p>
            <p className="pop-text">
              The depth of flavor is important, too. Indian cooking uses layers of spices to create complex tastes, 
              not just heat. This style attracts people who want meals that smell great and are satisfying.
            </p>

            <h3 className="pop-heading">Regional Diversity and Adaptation</h3>
            <p className="pop-text">
              Indian food is very diverse, with each region having its own cooking style. Some places focus on creamy 
              gravies and breads, while others feature rice dishes and lighter meals. In the USA, many restaurants 
              mix these styles on one menu, so diners have lots of options.
            </p>
            <p className="pop-text">
              Indian food has adapted to fit American dining habits. Restaurants might change portion sizes, spice 
              levels, or how dishes look, but they keep the traditional flavors. This mix of authenticity and 
              accessibility helps more people enjoy Indian cuisine.
            </p>

            <h3 className="pop-heading">Dining Trends and Accessibility</h3>
            <p className="pop-text">
              With more delivery apps and online ordering, Indian food is easier to get than ever. Many restaurants 
              now have quick-service options and simple menus for takeout or casual meals. This convenience helps 
              Indian food compete with other fast-casual choices.
            </p>
            <p className="pop-text">
              Indian food is great for sharing with a group. When people order several dishes, everyone can try 
              different flavors and textures in a single meal. This social way of eating aligns with today’s dining 
              trends, which emphasize variety and sharing.
            </p>

            <h3 className="pop-heading">Final Thoughts</h3>
            <p className="pop-text">
              Indian food in the USA continues to grow because it offers variety, flexibility, and bold flavors. 
              There are many dishes that fit different tastes and diets, and people can customize their meals. 
              As more Americans try foods from around the world and look for balanced, tasty meals, Indian cuisine 
              is becoming an even bigger part of the country’s food scene.
            </p>
          </article>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default IndianFoodGrowth;
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBar from '../components/Navbar';
import './BlogPage.css';

const StreetFoodCatering = () => {
  return (
    <HelmetProvider>
      <NavBar />

      {/* SEO Meta Tags using Helmet */}
      <Helmet>
        <title>Indian Street Food for Catering: Why It Works Perfectly for Group Dining</title>
        <meta name="description" content="Discover why Indian street food is the ultimate choice for catering and group events. From shareable wraps to flavorful masala dishes that travel perfectly." />
        <link rel="canonical" href="https://eggholic.com/news/indian-street-food-catering-group-dining" />
      </Helmet>

      <div className="pop-blog-wrapper">
        {/* Top Cover Image */}
        <img 
          src="/egg blog catering 3.jpg" 
          alt="Indian Street Food Catering for Groups" 
          className="pop-cover-image"
        />

        {/* Main Content Container (1300px centered) */}
        <div className="pop-container">
          <header className="pop-header">
            <h1 className="pop-main-title">Indian Street Food and Catering: Why This Style of Dining Works for Groups</h1>
            <h2 className="pop-sub-title">Indian Street Food for Catering: Why It Works Perfectly for Group Dining</h2>
          </header>

          <article className="pop-content-section">
            <p className="pop-text">
              Indian street food is made for movement. It’s meant to be eaten quickly, shared with others, and remembered 
              right away. After visiting Eggholic and seeing how plates moved from person to person, I understood why 
              this style works so well for group dining and catering. The dishes are sturdy, easy to pass around, and 
              keep their flavor even after leaving the kitchen.
            </p>

            <p className="pop-text">
              When you order several dishes, each one adds a new texture to the meal. The wrap is crisp enough to hold 
              its filling. The masala dish brings depth and warmth. The rice plate adds balance. Together, they create 
              a flow instead of focusing on just one dish. This flow makes Indian street food great for groups. People 
              aren’t stuck with one plate: they can try everything together.
            </p>

            <h3 className="pop-heading">Structure and Portability</h3>
            <p className="pop-text">
              The wraps I tried had the kind of structure you want in a catering setting. They held their shape without 
              becoming dry. The filling remained flavorful without leaking. That might sound like a small detail, but 
              it matters. Street-style wraps need to survive movement. They need to taste just as good ten minutes 
              later as they do when they first arrive. These did.
            </p>

            <p className="pop-text">
              Masala dishes also work well for groups because the flavor lasts. The spices stay strong, and the sauce 
              holds together. Even when served in bigger portions, these dishes still feel complete. They don’t need 
              fancy plating; they just need to taste good. That’s what you want for a group: food that travels well 
              and still makes an impression.
            </p>

            <h3 className="pop-heading">Interactive Dining Experience</h3>
            <p className="pop-text">
              What I noticed most during that visit was how people interacted with the dishes. No one hesitated to reach 
              across the table and try something else. Someone would start with a wrap, then move to a rice dish, then 
              return to a masala plate. That kind of movement is what makes catering feel lively rather than static. 
              It encourages conversation. It keeps the meal active.
            </p>

            <p className="pop-text">
              Indian street food also offers variety without confusion. The flavors are bold but familiar enough that 
              guests don’t feel lost. Even if someone is new to the cuisine, they can find an entry point. A wrap feels 
              recognizable. A rice dish feels grounding. A masala-heavy plate offers something deeper for those who 
              want it. That range makes it easier to satisfy different preferences within a group.
            </p>

            <h3 className="pop-heading">Efficiency in Service</h3>
            <p className="pop-text">
              This cooking style is also efficient. The dishes don’t need complicated serving steps. They can be served 
              quickly, shared easily, and enjoyed right away. That’s why street food works so well in busy places; 
              it keeps up with the pace instead of slowing things down.
            </p>

            <p className="pop-text">
              By the end of the meal, it was clear this food isn’t meant to be eaten alone. It’s made for groups. 
              The same things that make Indian street food great for a casual meal—bold spices, shareable portions, 
              lasting flavor—also make it perfect for events. You can picture trays of wraps, bowls of masala, and 
              rice dishes moving around a room, each keeping its unique taste.
            </p>

            <h3 className="pop-heading">Final Thoughts</h3>
            <p className="pop-text">
              Indian street food isn’t about being formal; it’s about being memorable. That’s why it’s so good for 
              groups. It gives people something to talk about, share, and come back to. After trying it in a restaurant, 
              it’s easy to see how well it works for catering. This food is made for movement, conversation, and sharing, 
              which is just what group dining needs.
            </p>
          </article>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default StreetFoodCatering;
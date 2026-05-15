import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBar from '../components/Navbar';
import './BlogPage.css';

const HeavyFood = () => {
  return (
    <HelmetProvider>
      <NavBar />

      {/* SEO Meta Tags using Helmet */}
      <Helmet>
        <title>Indian Appetisers Guide | Indian Food Appetisers and Vegetarian Starters</title>
        <meta name="description" content="Explore Indian appetisers, from crispy street-food snacks to vegetarian options such as samosas, paneer bites, and wraps. Discover flavorful starters that aren’t as heavy as you think." />
        <link rel="canonical" href="https://eggholic.com/news/indian-appetizers-guide" />
      </Helmet>

      <div className="pop-blog-wrapper">
        {/* Top Cover Image - Updated for Appetizers theme */}
        <img 
          src="/Card%203.png" 
          alt="Indian Appetisers and Snacks" 
          className="pop-cover-image"
        />

        {/* Main Content Container (1300px centered) */}
        <div className="pop-container">
          <header className="pop-header">
            <h1 className="pop-main-title">Indian Appetisers Guide</h1>
            <h2 className="pop-sub-title">Indian Appetisers: The So-Called “Heavy Food” That Actually Starts With Snacks</h2>
          </header>

          <article className="pop-content-section">
            <p className="pop-text">
              People have certain ideas about Indian food. Many think it’s heavy and rich. Yeah, the kind of meal 
              that leaves you needing a nap. But in reality, every proper Indian meal begins with appetisers. 
              It’s not a salad or something plain. Instead, it’s something crispy, spiced, and often fried, grilled, or stuffed.
            </p>

            <p className="pop-text">
              Before the famous gravies show up, Indian cuisine does something smart. It gets you ready for the meal. 
              Indian appetisers are there to ease any worries. That first bite shows Indian food isn’t meant to 
              overwhelm; it’s meant to spark your appetite.
            </p>

            <p className="pop-text">
              If you visit an Indian home as guests arrive, you won’t see a big pot of curry first. Instead, you’ll 
              spot a tray with small, snackable bites, maybe samosas, pakoras, or paneer cubes tossed in spices. 
              These are easy to grab while chatting. That’s the way Indian food welcomes you. It starts gently.
            </p>

            <p className="pop-text">
              Indian appetisers are all about contrast: crunch with softness, heat with tang, spice with comfort. 
              A samosa has a flaky shell and a warm, spiced potato filling. Pakoras(Fritters) are crisp on the 
              outside and light on the inside. Paneer appetisers give you protein without feeling heavy, since 
              the spices add most of the flavour.
            </p>

            <p className="pop-text">
              Many of the best Indian appetisers are vegetarian, not out of necessity, but because they’re delicious. 
              Chickpea flour, potatoes, paneer, onions, and herbs all soak up spices well and add texture without 
              being heavy. These vegetarian appetisers aren’t substitutes; they’re made to be enjoyed as they are.
            </p>

            <p className="pop-text">
              That’s why the appetiser section on an Indian menu is often the most exciting. It’s lively, lets you 
              sample a bit of everything, and shows that Indian food is about layers of flavour, not just one strong dish.
            </p>

            <h3 className="pop-heading">Building Excitement at the Table</h3>
            <p className="pop-text">
              Restaurants inspired by Indian street food know this well. They make appetisers a main part of the 
              experience, not just an afterthought. You’ll find spiced sandwiches, paneer bites, snack platters, 
              and wraps served first. The goal is to build excitement at the table, starting with something crisp, 
              then warm, then saucy. By the time the main dishes come, you’re already enjoying the flow.
            </p>

            <p className="pop-text">
              That rhythm is what makes Indian food feel less intimidating than people expect. The appetisers act 
              as a guide. They introduce the spice level gently. They show how flavour builds. They give you a 
              chance to explore without committing to a full heavy meal right away.
            </p>

            <h3 className="pop-heading">Modern Indian Street-Style in the U.S.</h3>
            <p className="pop-text">
              Even in modern Indian street-style restaurants in the U.S., this approach remains. Menus often 
              feature shareable starters that feel casual and familiar, grilled paneer appetisers instead of 
              ones covered in sauce, sandwiches with layered masala that are comforting, and snack platters 
              for sharing. These dishes make Indian food feel welcoming from the start.
            </p>

            <h3 className="pop-heading">Final Thoughts: Building the Appetite</h3>
            <p className="pop-text">
              So, is Indian food heavy? Sometimes. It can be rich and indulgent, but it rarely starts that way. 
              The meal begins with playful, balanced appetisers that set the tone and welcome you in.
            </p>
            
            <p className="pop-text">
              If anything, Indian cuisine understands appetite well. You don’t start with the heaviest dish; 
              you build up to it. You begin with something crisp and warm, something that sparks your curiosity 
              rather than leaving you hesitant.
            </p>

            <p className="pop-text">
              That’s the role of Indian appetisers. They shift your perspective before the main course even appears.
            </p>

            <p className="pop-text">
              Once you see that this so-called “heavy” cuisine actually starts with snacks, it feels much 
              less intimidating and a lot more fun.
            </p>
          </article>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default HeavyFood;
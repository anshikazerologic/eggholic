import React, { useState } from 'react';
import './MenuTabs.css';
import { Link } from 'react-router-dom';

const menuData = {
  "Holic Specials": [
    {
      id: 1,
      title: "Surti Gotalo",
      description: "A chaotic Surti masterpiece. Shredded eggs simmered in tomato gravy, topped with runny sunny-side-ups",
      isPopular: true,
      image: "Surati Gotalo.webp",
      icon: "./egg.svg"
    },
    {
      id: 2,
      title: "Malai Tikka",
      description: "Hard-boiled eggs simmered in a chef special mild, creamy onion-tomato sauce with warm spices. ",
      isPopular: false,
      image: "Malai Tikka.webp",
      icon: "./egg.svg"
    },
    {
      id: 3,
      title: "Toofani Curry",
      description: "Pieces of boiled eggs cooked in a spicy gravy",
      isPopular: true,
      image: "Toofani Curry.webp",
      icon: "./egg.svg"

    }
  ],
  "Sandwiches & Chaats": [{
    id: 1,
    title: "Amdavadi Touch",
    description: "Masala potatoes, fresh veggies, and cheese - Sandwich straight from Ahmedabad.",
    isPopular: true,
    image: "Amdavadi Touch.webp",
    icon: "./gluten.svg"
  },
  {
    id: 2,
    title: "Chicken Masala Sandwich",
    description: "Shredded Chicken marinated in our signature sauce, Onions, Cucumber, Cheese & mayo  ",
    isPopular: false,
    image: "Chicken Masala Sandwich.webp",
    icon: "./gluten.svg"
  },
  {
    id: 3,
    title: "Dabeli",
    description: "Soft buns filled with sweet-spicy potato filling, chutneys, peanuts, and crunchy sev ",
    isPopular: true,
    image: "Dabeli.webp",
    icon: "./gluten.svg"
  }], // Add items as needed
  "Main Course": [{
    id: 1,
    title: "Chicken Butter Masala",
    description: "Boneless chicken simmered in a creamy onion-tomato-butter sauce ",
    isPopular: true,
    image: "Chicken Butter Masala1.webp",
    icon: "./hen.svg"
  },
  {
    id: 2,
    title: "Paneer Kadai",
    description: "Indian cottage cheese (paneer) cooked with onions and bell peppers in a rich tomato gravy.",
    isPopular: false,
    image: "Paneer Kadai.webp",
    icon: "./veg.svg"
  },
  {
    id: 3,
    title: "'Holic' Chicken Kabob With Rice",
    description: "Chicken marinated with onions, chilies, and Indian spices, Cooked perfectly and served with basmati rice. ",
    isPopular: true,
    image: "Holic Chicken Kabob with Rice1.webp",
    icon: "./hen.svg"
  }]
};

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState("Holic Specials");
  const categories = Object.keys(menuData);

  return (
    <div className="cv-menu-wrapper">
      {/* Tab Navigation */}
      <nav className="cv-tabs-nav">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`cv-tab-btn ${activeTab === cat ? 'cv-active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
            {activeTab === cat && <span className="cv-dot"></span>}
          </button>
        ))}
      </nav>

      {/* Cards Grid */}
      <div className="cv-cards-grid">
        {menuData[activeTab].map((item) => (
          <div key={item.id} className="cv-menu-card">


            <div className='card-holder'>

              <div className="cv-image-container">
                {item.isPopular && <span className="cv-badge-popular-n">
                  <span className='it'>POPULAR</span>
                </span>}
                <div className="cv-icon-top-right">
                  <span className='fx-icon-n'>
                    <img src={item.icon} />
                  </span>
                </div>
                <img src={item.image} alt={item.title} className="cv-food-img" />
              </div>

              
            <div className="cv-card-body">
              <h3 className="cv-food-title">{item.title}</h3>
              <p className="cv-food-desc">{item.description}</p>
              <Link to="https://order.eggholic.com/" className="cv-order-link">Order now &rarr;</Link>

            </div>

            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuTabs;
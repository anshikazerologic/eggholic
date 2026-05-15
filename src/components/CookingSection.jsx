import React from 'react';
import './CookingSection.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Framer motion import karein

const CookingSection = () => {
  const cards = [
    {
      title: "New to Indian Food? Start with These Best Indian Dishes",
      date: "13th – 15th March",
      link: "/news/best-indian-dishes-for-first-time",
      // Character count: 116
      description: `Explore the best Indian dishes for beginners, featuring savory curries, rice, egg specialties, and iconic street food.`,
      image: "egg blog spread 3.jpg",
      alt: `A spread of popular Indian dishes for a beginner's guide to Indian cuisine`
    },
    {
      title: "Paneer: The Everyday Kitchen Story in India",
      date: "13th – 15th March",
      link: "/news/indian-cottage-cheese-paneer",
      // Character count: 117
      description: `Learn why paneer is an Indian staple. Explore why these cottage cheese dishes are a flavorful favorite in every home.`,
      image: "egg blog paneer 2.jpg",
      alt: `Fresh paneer (Indian cottage cheese) displayed on a cutting board - a staple Indian ingredient`
    },
    {
      title: "The “Heavy Food” That Starts with Snacks",
      date: "13th – 15th March",
      link: "/news/indian-appetizers-guide",
      // Character count: 115
      description: "From crispy samosas to paneer bites, discover light and flavorful Indian starters that are perfect for any occasion.",
      image: "egg blog sandwich.jpg",
      alt: `Indian snacks and appetizers including samosas and paneer bites on a table`
    }
  ];

  const revealVariant = {
    hidden: {
      y: 60,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    }
  };


  return (
    <section className="cx-container">
      <header className="cx-header">
        <div className="mask">
          <motion.p

            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >


            <h1 className="cx-main-title">
              Just One Story More
            </h1>
            <p className="cx-subtitle">Lights. Camera. Masala full of backstories behind what you eat</p>


          </motion.p>
        </div>


      </header>

      <motion.p

        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className='tab-spacing'>
          <div className="cx-grid">
            {cards.map((card, index) => (
              <div key={index} className="cx-card">
                <div className="cx-image-wrapper">
                  {card.image ? (
                    <img src={card.image} alt={card.title} className="cx-image" fetchpriority="low" loading="lazy" width="482" height="301" />
                  ) : (
                    <div className="cx-placeholder"></div>
                  )}
                </div>
                <div className="cx-content">
                  <h2 className="cx-card-title">{card.title}</h2>
                  <p className="cx-description">
                    {card.description.length > 110
                      ? `${card.description.substring(0, 110)}...`
                      : card.description}
                  </p>
                  <Link to={card.link} className="cx-link">FIND OUT MORE</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </motion.p>


    </section>
  );
};

export default CookingSection;
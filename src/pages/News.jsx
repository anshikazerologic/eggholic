
import '../components/CookingSection.css';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import { Helmet } from 'react-helmet-async';
import React, { useState,useEffect } from 'react';

const News = () => {

      useEffect(() => {
          // Signal to the prerenderer that the Menu page is fully loaded
          const timer = setTimeout(() => {
              console.log("Menu SEO Tags injected - Dispatching render-event");
              document.dispatchEvent(new Event('render-event'));
          }, 2000); 
  
          return () => clearTimeout(timer);
      }, []);
  

  const cards = [
    {
      title: "New to Indian Food? Start with These Best Indian Dishes",
      date: "13th – 15th March",
      link: "/news/best-indian-dishes-for-first-time",
      description: `Discover the best Indian dishes to try for the first time, including curries, rice dishes, egg specialties, and popular street foods.`,
      image: "egg blog spread 3.jpg" // Yellow placeholder
    },
    {
      title: "Paneer: The Everyday Kitchen Story in India",
      date: "13th – 15th March",
      link: "/news/indian-cottage-cheese-paneer",
      description: `Discover how paneer, or Indian cottage cheese, is used in Indian food. Learn why paneer dishes are popular, flavorful, and a staple in Indian cooking at home and in restaurants.
`,
      image: "egg blog paneer 2.jpg" // Yellow placeholder
    },
    {
      title: "The “Heavy Food” That Starts with Snacks",
      date: "13th – 15th March",
      link: "/news/indian-appetizers-guide",
      description: " Explore Indian appetisers, from crispy street-food snacks to vegetarian options such as samosas, paneer bites, and wraps. Discover flavorful starters that aren’t as heavy as you think.",
      image: "egg blog sandwich.jpg" // Replace with actual interior image
    },
    {
      title: "Popularity of Indian Food: Why It Keeps Growing in the USA",
      date: "13th – 15th March",
      link: "/news/indian-food-trends-usa",
      description: "Explore why Indian food is booming in the USA, from street-style snacks to bold regional flavors.",
      image: "egg blog why indian food is getting popular.png" // Replace with actual interior image
    },
    {
      title: "Indian Food in USA: Rising Popularity & Global Trends",
      date: "13th – 15th March",
      link: "/news/popularity-of-indian-cuisine-usa",
      description: "Discover why Indian food restaurants are booming in the USA with bold spices and street-style eats.",
      image: "egg blog spread.jpg" // Replace with actual interior image
    },
    {
      title: "Indian Breakfast Food: Healthy Savory Mornings",
      date: "13th – 15th March",
      link: "/news/indian-breakfast-food-savory-mornings",
      description: "Swap sugary cereal for savory Indian breakfast—protein-packed, spiced, and perfect for the USA.",
      image: "egg blog spread 2.jpg" // Replace with actual interior image
    },
    {
      title: "The Popularity of Indian Food: Spice, Soul & Street Food",
      date: "13th – 15th March",
      link: "/news/popularity-of-indian-food",
      description: "Explore the growing popularity of Indian food, from its spicy flavors to soul-soothing dishes and vibrant street food culture worldwide.",
      image: "egg blog spices.jpg" // Replace with actual interior image
    }, {
      title: "Healthy Indian Breakfast Foods for a Nutritious Start",
      date: "13th – 15th March",
      link: "/news/healthy-indian-breakfast-food",
      description: "Is Indian food healthy? Discover healthy Indian breakfast food at Eggholic. Our protein-packed Desi Omelette gives you a flavorful, nutritious start.",
      image: "indan food heathy.jpg" // Replace with actual interior image
    }, {
      title: "Indian Restaurants in the USA: Popular Dishes You Should Try",
      date: "13th – 15th March",
      link: "/news/indian-restaurants-usa-popular-dishes",
      description: "Explore a wide range of popular Indian food dishes in the USA, from rice plates and masala gravies to street-style wraps and snack plates.",
      image: "egg blog spread 3.jpg" // Replace with actual interior image
    },
    {
      title: "Looking for Gluten-Free Indian Food? Try These Eggholic Favorites",
      date: "13th – 15th March",
      link: "/news/gluten-free-indian-food-options",
      description: "Discover naturally gluten-free Indian food options at Eggholic. From Anda Pulav to Rice Bowls, enjoy bold flavors without the wheat.",
      image: "egg blog gluten free.jpg" // Replace with actual interior image
    },
    {
      title: "Indian Restaurant Menu Guide, How to Order",
      date: "13th – 15th March",
      link: "/news/how-to-order-from-indian-menu",
      description: "Learn how to read an Indian restaurant menu, understand dish types, spice levels, and choose meals that match your taste and diet.",
      image: "egg blog how to read indian menu.jpg" // Replace with actual interior image
    }, {
      title: "Indian Food in USA | Popular Dishes, Trends, and Growth",
      date: "13th – 15th March",
      link: "/news/growth-of-indian-food-in-usa",
      description: "Discover the growth of Indian food in the USA, popular dishes Americans love, and why Indian cuisine continues to expand across cities and dining trends.",
      image: "egg blog sandwich.jpg" // Replace with actual interior image
    },
    {
      title: "Indian Breakfast Food Guide | Morning Meal Ideas",
      date: "13th – 15th March",
      link: "/news/what-do-indians-eat-for-breakfast",
      description: "Explore popular Indian breakfast foods including egg dishes, regional specialties, and balanced meals that provide energy for the day.",
      image: "egg blog man eating.jpg" // Replace with actual interior image
    },
    {
      title: "Indian Food Restaurants in USA: Why the Cuisine is Booming",
      date: "13th – 15th March",
      link: "/news/indian-food-restaurant",
      description: "Looking for the best Indian food restaurant in the USA? Discover bold flavors, egg-based dishes, and authentic Indian meals made fresh. Visit Eggholic today.",
      image: "egg blog group.jpg" // Replace with actual interior image
    },
    {
      title: "From Indian Breakfast to Street Food: The Stories Behind Every Bite",
      date: "13th – 15th March",
      link: "/news/indian-breakfast-to-street-food",
      description: "Explore the connection between Indian breakfast traditions and street food culture. Discover how these bold, savory flavors travel across continents to create comfort.",
      image: "egg blog pani puri.jpg" // Replace with actual interior image
    },
    {
      title: "Popularity of Indian Food Worldwide: Reasons Behind Its Global Appeal",
      date: "13th – 15th March",
      link: "/news/popularity-of-indian-food-global-appeal",
      description: "Explore why Indian food is popular worldwide, from its bold spices and diverse dishes to its vegetarian, vegan, and gluten-free options.",
      image: "egg blog spread 6.jpg" // Replace with actual interior image
    },{
      title: "Indian Street Food for Catering: Why It Works Perfectly",
      date: "13th – 15th March",
      link: "/news/indian-street-food-catering-group-dining",
      description: "Discover why Indian street food is the ultimate choice for catering and group events. From shareable wraps to flavorful masala dishes that travel perfectly.",
      image: "egg blog catering 3.jpg" // Replace with actual interior image
    },{
      title: "Indian Street Food Guide; Popular Dishes Explained",
      date: "13th – 15th March",
      link: "/news/why-indian-street-food-is-popular",
      description: "Learn about Indian street food, popular dishes, and why these fast, flavorful meals are loved around the world.",
      image: "egg blog apps.jpg" // Replace with actual interior image
    },{
      title: "Indian Food Near Me | Tips to Find the Best Spots",
      date: "13th – 15th March",
      link: "/news/searching-indian-food-near-me",
      description: "Searching for Indian food near you? Learn how to evaluate menus, reviews, and quality to find reliable Indian restaurants locally.",
      image: "egg blog street food near me 2.jpg" // Replace with actual interior image
    },{
      title: "Searching “Indian Food Near Me”? Here’s How to Find the Best Spots",
      date: "13th – 15th March",
      link: "/news/searching-indian-food-near-me-guide",
      description: "Discover the growth of Indian food in the USA and how to find flavorful, authentic dining near you. Explore rice plates, masala gravies, and street-style wraps.",
      image: "egg blog street food near me 3.jpg" // Replace with actual interior image
    },{
      title: "Indian Food Catering in the USA: Best Options for Home Events",
      date: "13th – 15th March",
      link: "/news/indian-food-catering-usa",
      description: "Discover how to elevate your home gatherings with the best Indian food catering in the USA. From street-style wraps to masala-based trays that travel perfectly.",
      image: "egg blog catering 2.jpg" // Replace with actual interior image
    },

    {
      title: "Is Indian Food Healthy? Nutrition, Spices, and What to Expect",
      date: "13th – 15th March",
      link: "/news/is-indian-food-healthy",
      description: "Discover if Indian food is healthy. Explore the nutritional benefits of spices, lentils, and vegetables, and learn how to choose balanced Indian meals.",
      image: "egg blog street food healthy.jpg" // Replace with actual interior image
    },




  ];

  return (

    <>

      <Helmet>
        <title>Discover The Latest News & Food Trends | Indian Food Near Me
        </title>
        <meta
          name="description"
          content="Stay Updated With The Latest News & Trends Of Our Blogs On Indian Street Food | Indian Restaurant Near Me | Indian Food Near Me | Indian Street Food Near Me | Indian Egg Restaurant Near Me | Indian Restaurant In Edison"
        />
      </Helmet>


      <NavBar />

      <section className="cx-container">
        <header className="cx-header">
          <h1 className="cx-main-title">
            Just One Story More
          </h1>
          <p className="cx-subtitle">Lights. Camera. Masala full of backstories behind what you eat</p>
        </header>

        <div className='tab-spacing'>
          <div className="cx-grid">
            {cards.map((card, index) => (
              <div key={index} className="cx-card">
                <div className="cx-image-wrapper">
                  {card.image ? (
                    <img src={card.image} alt={card.title} className="cx-image" />
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
      </section>
    </>


  );
};

export default News;
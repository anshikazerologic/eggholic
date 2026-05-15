import React from 'react';
import './OurStory.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Framer motion import karein


const OurStory = () => {

  const revealVariant = {
    hidden: {
      x: 60,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    }
  };

    const revealVariant2 = {
    hidden: {
      x: -60,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    }
  };


  return (
    <section className="bx-story-container">
      <div className="bx-story-wrapper">

        {/* Left Side: Image with custom shape */}
        <div className="bx-image-side">

          <div className="bx-shape-container">

            <motion.p

              variants={revealVariant2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <img
                src="./3.1.webp"
                alt="Eggholic founder at the family's original Indian egg street food stall in India - the origin story of the restaurant"
                className="bx-main-img"
              />
            </motion.p>

          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="bx-text-side">
          <motion.p

            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <p className="bx-paragraph">

              Eggholic began as a feeling we grew up with in India, where food was meant to be shared, and nothing brought people together like Egg Night. Those street-side lahris, the aroma of fresh spices, and the joy of eating hot food made on the spot stayed with us. We wanted to bring that same experience to you. That’s why every dish at Eggholic is made to order, with customizable spice levels and served fresh from the pan, using bold, authentic flavors. From curries to sandwiches and chaats, this is our way of sharing a piece of home with you, one bite at a time.
            </p>

            <Link to="/our-story" className='readmore' >

              <button class="mx-menu-btn"><span className='center-mj'> Get Familiar</span></button>
            </Link>

          </motion.p>



        </div>

      </div>
    </section>
  );
};

export default OurStory;
import React from 'react';
import { motion } from 'framer-motion';

const FramerRevealText = () => {
 // Animation Settings (Variants)
  const revealVariant = {
    hidden: { 
      y: "100%", 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.95], // Smooth luxury ease
        delay: 0.2
      }
    }
  };

  return (
   <div className="container">
      {/* Mask acting as the invisible wall */}
      <div className="mask">
        <motion.h1 
          className="reveal-text"
          variants={revealVariant}
          initial="hidden"
          animate="visible"
        >
          HELLO WORLD
        </motion.h1>
      </div>
    </div>
  );
};

export default FramerRevealText;
import React from 'react';
import './Bite.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Framer motion import karein

const Bite = () => {
  // Animation settings

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
    <section className="mx-bite-section">
      <div className="mx-container">
        <div className="mx-row">

          {/* Left Column */}
          <div className="mx-col mx-col-left">
            <motion.p

              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >

              <div className="mask">
                <div className="mx-image-frame">
                  <video
                    className="fgh-main-video-2"
                    preload="metadata"
                    poster="/poster.webp"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="./Homepage Banner.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

            </motion.p>

          </div>

          {/* Right Column */}
          <div className="mx-col mx-col-right">
            <div className="mx-content">
              <div className="mx-title">
                <div className="mask">
                  <motion.p

                    variants={revealVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    <img src="./bit.svg" alt="Eggholic's philosophy" />

                  </motion.p>

                </div>
              </div>

              {/* Animation Wrapper (The Mask) */}
              <div className="mx-description-mask">
                <motion.p
                  className="mx-description"
                  variants={revealVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }} // 20% dikhte hi chalna chahiye
                >
                  In Indian homes, meals never end with the first serving. Someone always insists on one more bite, one more story, one more laugh. At Eggholic, we bring that same feeling to the table. Bold Indian street food, made fresh and meant to be shared. Here, the table is always open. A place where no one leaves with an empty stomach or a heavy heart.
                </motion.p>
              </div>

              <div className="kjld">


                <motion.p

                  variants={revealVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                >

                  <div className="mask">
                    <button className="mx-menu-btn">
                      <Link to="/menu">
                        <span> See the menu</span>
                      </Link>
                    </button>
                  </div>
                </motion.p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Bite;
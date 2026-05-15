import React, { useState } from "react";
import "./ReelsSection.css"; // CSS file import karein
import { motion } from 'framer-motion'; // Framer motion import karein

function ReelsSection({ reels = [] }) {
  const [show, setShow] = useState(false);
  const [activeReel, setActiveReel] = useState(null);

  const handleOpen = (reel) => {
    // Option A: Open Instagram URL in new tab
    window.open("https://www.instagram.com/eggholicofficial/", "_blank");

    // Option B: Show in a modal (using your existing state)
    // setActiveReel(reel);
    // setShow(true);
    // document.body.style.overflow = "hidden"; // Lock scroll
  };

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
    <section className="fgh-section">
      <div className="fgh-container">
        <div className="mask">
          <motion.p

            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="fgh-title-kjj">
              {/* <img src="./catchupp.svg" alt="" /> */}
              Catch Up

            </h2>
          </motion.p>
        </div>

        <div className="mshjdk">
          <img src="./Line 12.svg" fetchpriority="low" alt="decorative divider" />
          <p id="sh">See what we're plating, pouring, and posting</p>
          <img src="./Line 12.svg" fetchpriority="low" alt="decorative divider 2" />
        </div>

        <div className="jhkdl">
          <div className="kkdh">


            <a href="https://www.tiktok.com/@eggholic">
              <img src="./t1.svg" alt="Follow Eggholic on TikTok" fetchpriority="low" />
            </a>


            <a href="https://www.facebook.com/EggHolicofficial">
              <img src="./t2.svg" alt="Follow Eggholic on Facebook" fetchpriority="low" />
            </a>
            <a href="https://www.instagram.com/eggholicofficial/">
              <img src="./t3.svg" alt="Follow Eggholic on Instagram" fetchpriority="low" />
            </a>
          </div>
        </div>


          <div className="fgh-grid">
            {reels.map((reel, idx) => (
              <div key={idx} className="fgh-card-wrapper">
                <div className="fgh-card" onClick={() => handleOpen(reel)}>
                  <video
                    src={reel.image}
                    className="fgh-video-preview"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                </div>
              </div>
            ))}
          </div>

      


      </div>


    </section>
  );
}

export default ReelsSection;
import React, { useState } from "react"; // useState import karein
import CounterSection from "../components/CounterSection";
import NavBar from "../components/Navbar";
import Timeline from "../components/TimelineData";
import "./About.css";
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion'; // Framer motion import karein

const About = () => {
  // Loader ki state
  const [isLoading, setIsLoading] = useState(true);

  // Jab video ka data load ho jaye, tab loader hata dein
  const handleVideoLoad = () => {
    setIsLoading(false);
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
    <>
      <Helmet>
        <title>Our Story</title>
        <meta
          name="description"
          content="Check out Eggholic's menu! Enjoy our authentic Indian street food dishes in the USA and Canada. Visit our website now and get in touch today!"
        />
      </Helmet>

      {/* Agar isLoading true hai toh loader dikhao */}
      {isLoading && (
        <div className="desktop-loader-container">
          <div className="simple-spinner"></div>
        </div>
      )}

      <NavBar />
      <motion.p

        variants={revealVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="xd-cover">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="bg-video"
            onLoadedData={handleVideoLoad} // Video load event handle karein
          >
            <source src="/Eggholic.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.p>


      <Timeline />
      <CounterSection />

      <section className="map-new">
        <div className="mapBoxv">
          <div className="mapcontent">
            <p className="mapH">Discover your next favourite destination </p>
            <button className="mx-menu-btn">
              <a href="/locations" data-discover="true"><span> See Locations</span></a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
import React from 'react';
import './RewardsSection.css';
import { motion } from 'framer-motion'; // Framer motion import karein

// SVG logic extracted to a reusable function that accepts a className
const StarIcon = ({ className }) => (
  <span className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
      <path d="M18.7432 16.4351C21.4102 16.204 25.3318 15.5003 30.9611 14.7565C25.6902 14.0629 21.9268 13.3994 19.2703 13.128C20.5985 11.6805 22.2958 9.6701 24.6149 7.09677C21.3892 9.12729 18.9435 10.5446 17.2357 11.6504C16.9933 9.10718 16.2553 5.36781 15.4753 0C14.7479 5.02604 14.0521 8.61463 13.7675 11.1478C12.2495 9.8812 10.1306 8.26282 7.44246 6.05136C9.57189 9.1273 11.0583 11.4594 12.2179 13.0878C9.5508 13.319 5.62928 14.0227 0 14.7665C5.27086 15.4601 9.03426 16.1235 11.6908 16.3949C10.3625 17.8424 8.66532 19.8529 6.34614 22.4262C9.57191 20.3957 12.0176 18.9783 13.7254 17.8726C13.9678 20.4158 14.7057 24.1552 15.4858 29.523C16.2132 24.4969 16.9089 20.9083 17.1936 18.3752C18.7116 19.6418 20.8305 21.2601 23.5186 23.4716C21.3892 20.3957 19.9028 18.0636 18.7432 16.4351Z" fill="#F5F5DE" />
    </svg>
  </span>
);


const revealVariant = {
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

const revealVariant2 = {
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

const revealVariant3 = {
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



const RewardsSection = () => {
  const tierContent = [
    {
      id: "left",
      title: "Join the Club",
      points: [
        "Create your Eggholic Rewards account and get the party started. New members receive a $5 welcome reward, and you earn 10 points for every dollar you spend.",
      ]
    },
    {
      id: "right",
      title: "Feast on the rewards",
      points: [
        "Turn your points into Eggholic favorites. Enjoy free dishes, drinks, birthday treats, and exclusive members-only surprises."
      ]
    }
  ];

  return (
    <section className="rx-rewards-container">
      <div className="rx-header">


        <motion.p

          variants={revealVariant3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="rx-main-title">
            <img src='/reward.svg' alt="Rewards Header" />
          </h1>

        </motion.p>


      </div>

      <div className="rx-content-layout">
        {/* Left Column */}

        <motion.p

          variants={revealVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="rx-column rx-left-column">
            <h2 className="rx-tier-title rx-left-align">
              {/* Added unique class for the left span */}
              <StarIcon className="rx-icon-left" />
              {tierContent[0].title}
            </h2>
            {tierContent[0].points.map((text, i) => (
              <p key={i} className="rx-description rx-left-align">


                <p className='df-left'>
                  {text}
                </p>
              </p>
            ))}

            <a href='https://www.toasttab.com/eggholic-schaumburg/rewardsSignup' className='sign-up'>Sign Up →</a>
          </div>

        </motion.p>


        {/* Center Image */}

        <motion.p

          variants={revealVariant3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >

          <div className="rx-image-center">
            <img src='/2.png' alt="Eggholic Rewards - join the club, earn 10 points for every dollar you spend, get a $5 welcome reward, and redeem points for free dishes, drinks, birthday treats, and exclusive member surprises " />
          </div>

        </motion.p>

        {/* Right Column */}
        <motion.p

          variants={revealVariant2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="rx-column rx-right-column">
            <h2 className="rx-tier-title rx-right-align">
              {/* Added unique class for the right span */}
              <StarIcon className="rx-icon-right" />
              {tierContent[1].title}
            </h2>
            {tierContent[1].points.map((text, i) => (
              <p key={i} className="rx-description rx-right-align">
                <p className='df-right'>
                  {text}
                </p>
              </p>
            ))}
          </div>

        </motion.p>

      </div>

      <motion.p

        variants={revealVariant3}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="center-box">
          <div className="fgh-banner-container">
            <h1 className="fgh-title">
              <span className='nnkk'>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                  <path d="M16.1796 14.1873C18.4819 13.9877 21.867 13.3803 26.7264 12.7382C22.1764 12.1394 18.9278 11.5667 16.6346 11.3325C17.7812 10.0829 19.2463 8.34749 21.2483 6.12612C18.4637 7.87892 16.3525 9.1024 14.8783 10.0569C14.669 7.86156 14.032 4.63364 13.3586 0C12.7307 4.33861 12.1302 7.43638 11.8845 9.62304C10.5741 8.52971 8.745 7.13268 6.42453 5.22369C8.2627 7.87892 9.54579 9.89204 10.5468 11.2977C8.2445 11.4973 4.85934 12.1047 0 12.7468C4.54995 13.3456 7.79861 13.9183 10.0918 14.1526C8.9452 15.4021 7.48013 17.1375 5.47816 19.3589C8.26272 17.6061 10.3739 16.3826 11.8481 15.4281C12.0574 17.6234 12.6944 20.8514 13.3678 25.485C13.9956 21.1464 14.5962 18.0486 14.8419 15.862C16.1523 16.9553 17.9814 18.3523 20.3019 20.2613C18.4637 17.6061 17.1806 15.593 16.1796 14.1873Z" fill="#F5F5DE" />
                </svg>
              </span>
              Download the Eggholic App to start<br />
              earning points

              <span className='mmkk'>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                  <path d="M16.1796 14.1873C18.4819 13.9877 21.867 13.3803 26.7264 12.7382C22.1764 12.1394 18.9278 11.5667 16.6346 11.3325C17.7812 10.0829 19.2463 8.34749 21.2483 6.12612C18.4637 7.87892 16.3525 9.1024 14.8783 10.0569C14.669 7.86156 14.032 4.63364 13.3586 0C12.7307 4.33861 12.1302 7.43638 11.8845 9.62304C10.5741 8.52971 8.745 7.13268 6.42453 5.22369C8.2627 7.87892 9.54579 9.89204 10.5468 11.2977C8.2445 11.4973 4.85934 12.1047 0 12.7468C4.54995 13.3456 7.79861 13.9183 10.0918 14.1526C8.9452 15.4021 7.48013 17.1375 5.47816 19.3589C8.26272 17.6061 10.3739 16.3826 11.8481 15.4281C12.0574 17.6234 12.6944 20.8514 13.3678 25.485C13.9956 21.1464 14.5962 18.0486 14.8419 15.862C16.1523 16.9553 17.9814 18.3523 20.3019 20.2613C18.4637 17.6061 17.1806 15.593 16.1796 14.1873Z" fill="#F5F5DE" />
                </svg>
              </span>
            </h1>

            <div className="fgh-button-wrapper">
              <a href="https://apps.apple.com/us/app/eggholic/id6444826099" className="fgh-store-button" target="_blank">
                <img src="./apple-store-badge-1.svg" alt='Download the Eggholic app on the Apple App Store' />
              </a>

              <a href="https://play.google.com/store/apps/details?id=com.como.prod940720221130" className="fgh-store-button" target="_blank">
                <img src="./google-play-badge-1-2 - Copy.svg" alt='Get the Eggholic app on Google Play' />
              </a>
            </div>
          </div>
        </div>

      </motion.p>




    </section>


  );
};

export default RewardsSection;
import React from 'react';
import './Timeline.css';
import { motion } from 'framer-motion'; // Framer motion import karein


const timelineData = [
  {
    id: 1,
    title: `A Story That Started With Hunger`,
    description: <>
      Some great ideas begin with strategy. Ours began with hunger.  <br />
      Back in 2017, two cousins living in the U.S, Bhagyesh and Lay, had a simple situation. Late-night cravings. The kind that only Indian street food could solve. Back home in India, stepping out for spicy egg dishes three nights a week was normal. In Chicago, something felt incomplete.
      <br /> <br />
      Indian restaurants were everywhere. But the sizzling street-style egg dishes you would find on a midnight food cart in India were missing. <br />
      <br />
      One evening, the thought slipped out almost casually. Why don’t we just open one ourselves?  <br />
      There was no elaborate restaurant empire plan. Just two food lovers following a craving they truly believed in.
    </>,
    image: "a2.webp",
    side: "left"
  },
  {
    id: 2,
    title: "The Bet",
    description: <>
      Before the first Eggholic opened, there were doubts.
      <br />
      <i>“The flavors are too strong.”  </i> <br />
      <i> “People might prefer something milder.” </i><br />
      <br />

      But the founders believed otherwise. The food had to stay true to its soul. So the brothers teamed up with their friend Vilas, someone who could bring any recipe to life. And in 2018, the first Eggholic opened exactly as they had imagined it. Authentic street-style recipes. Every dish was cooked to order.
      <br />
      <br />
      And the moment people tasted it, something clicked. For some, it felt like home. For others, it was their first real introduction to Indian street food. Either way, it stayed with them.
    </>,
    image: "a1.png",
    side: "right"
  },
  {
    id: 3,
    title: "Family, Aprons, and Long Days",
    video: true,
    description: <>
      The early days of Eggholic were powered by family. Parents stepped into the kitchen. Relatives welcomed guests at the counter. Everyone stepped in wherever support was needed. <br />
      <br />
      Days were long. Nights were busy. The kitchen stayed alive with energy.
      It was a family making sure every plate leaving the kitchen carried the taste they believed in.
    </>,
    image: "v.mp4",
    side: "left"
  },
  {
    id: 4,
    title: "The Flyer Phase ",
    description: <>
      When the second location opened, the founders took the Eggholic story directly to people.

      Flyers were printed. Neighborhoods were visited. Coupons reached apartment mailboxes. <br /><br />

      Conversations happened with anyone curious to know about the food. <br /><br />

      Security guards became allies. Neighbors became the first regulars. <br />
      Slowly, more people discovered Eggholic.
      Five customers became twenty. Twenty became fifty.
      The restaurant began filling with the energy of people enjoying food together.
    </>,
    image: "a4.jpg",
    side: "right"
  },
  {
    id: 5,
    title: "The Turning Point ",
    description: <>
      Locations began growing. Cities joined the journey. States followed. Continents followed .

      Yet one belief stayed constant. Give the best to the customer, stay strong on Made to Order. <br /><br />

      Every new Eggholic begins the same way. The team gathers before opening, excitement in the room, and a reminder of what Eggholic stands for.
      A shared commitment to serving every guest with care.
    </>,
    image: "Eggholic-new.mp4",
    video: true,
    side: "left"
  },
  {
    id: 6,
    title: "Eggholic 2.0  ",
    description: <>
      Today, Eggholic is evolving into something bigger than a restaurant.

      A place to eat. A place to belong. A place where people arrive hungry and leave feeling lighter, welcomed, and cared for.
      Because food is about more than filling plates. It is about bringing people together around the table. <br />
      <br />
      And this next chapter is just getting started.
    </>,
    image: "a6.3.jpg",
    side: "right"
  }
];

const Timeline = () => {

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
    <section className="timeline-section">
      <div className="timeline-container">


        {timelineData.map((item) => (
          <div key={item.id} className={`timeline-item ${item.side}`}>


            {/* Text Content */}

            <div className="timeline-content">
              <motion.div

                variants={revealVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                <h2 className="timeline-title">{item.title}</h2>
                <div className="timeline-desc">{item.description}</div>
              </motion.div>



            </div>


            {/* Media Box (Image or Video) */}

            <div className="timeline-image-wrapper">
              <div className="timeline-image-placeholder">
                <motion.div

                  variants={revealVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >

                  {item.video ? (
                    <video
                      src={item.image} // Yahan image field mein video path (e.g. a3.mp4) hona chahiye
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <img src={item.image} alt={item.title} />
                  )}
                </motion.div>

              </div>
            </div>


          </div>
        ))}
      </div>
    </section >
  );
};

export default Timeline;
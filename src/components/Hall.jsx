import React, { useRef } from 'react'; // Import useRef
import './Hall.css';
import { motion } from 'framer-motion'; // Framer motion import karein
import Carousel from "./Carousel"

function Hall() {
    const scrollRef = useRef(null);

    // Function to handle clicking arrows
    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
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
        <div className='dc-hall'>
            <div className='dc-hell-heading'>


                <motion.p

                    variants={revealVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h1 className="fgh-title-kjj"> Hall Of Fame</h1>
                </motion.p>
            </div>

            <Carousel />
        </div>
    );
}

export default Hall;
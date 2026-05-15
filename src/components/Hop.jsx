import './Hop.css';
import HopMobile from './HopMobile';
import { motion } from 'framer-motion'; // Framer motion import karein

const OurStory = () => {

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


    const revealVariant2 = {
        hidden: {
            x: -60,
            opacity: 0.5
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
            x: 60,
            opacity: 0.5
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
        <>

            <div className="dcx">

                <motion.p

                    variants={revealVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <h1 className='fgh-title-kjj'>
                        Hop On
                    </h1>
                </motion.p>


            </div>

            <div className='gfx-container'>
                <span className='gfx-truckleft'>

                    <motion.p

                        variants={revealVariant2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                        <img src="./truck.svg" alt='Eggholic food truck illustration' fetchpriority="high" />
                    </motion.p>

                </span>

                <div className='dx-box'>
                    <img src="./hop4.svg" alt='Hop on - find an Eggholic near you' fetchpriority="high" />

                    {/* UK */}
                    <div className='uk'>
                        <img src="uk.svg" alt="Eggholic locations in the United Kingdom" fetchpriority="high" />
                        <ul>
                            <li>
                                <a href='https://eggholic.com/indian-restaurant-in-pinner'>Pinner, UK</a>
                            </li>

                        </ul>
                    </div>

                    {/* USA */}
                    <div className='us'>
                        <img src="us.svg" alt='Eggholic locations across the United States' fetchpriority="high" />
                        <ul>

                            {/* California */}

                            <li>
                                <a href='https://eggholic.com/indian-restaurant-in-san-diego'>San Diego, CA</a>
                            </li>
                            <li>
                                <a href='https://eggholic.com/indian-restaurant-in-newark-ca'>Newark, CA</a>
                            </li>

                            {/* Illinois */}
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-niles">Niles, IL</a>
                            </li>
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-schaumburg-il">Schaumburg, IL</a>
                            </li>
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-chicago">Chicago, IL</a>
                            </li>

                            <li>
                                <a href='https://eggholic.com/indian-restaurant-in-hyde-park-il.html'> Hyde Park, IL <br /> (Virtual) </a>
                            </li>

                            {/* Texas */}
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-sugar-land">Sugar Land, TX</a>
                            </li>
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-irving/">Irving, TX</a>
                            </li>

                            {/* New Jersey */}
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-new-jersey">Jersey City, NJ</a>
                            </li>
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-edison-nj">Edison, NJ</a>
                            </li>

                            {/* New York */}
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-queens-ny">Queens, NY</a>
                            </li>

                            {/* Virginia / DC */}
                            <li>
                                <a href='https://eggholic.com/indian-restaurant-in-washington-dc'>Washington, DC</a>
                            </li>
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-chantilly-va.html">Chantillly, VA</a>
                            </li>

                            {/* Ohio */}
                            <li>
                                <a href='https://eggholic.com/indian-restaurant-in-cincinnati'>Cincinnati, OH</a>
                            </li>

                            {/* Massachusetts */}
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-shrewsbury-ma">Shrewsbury, MA</a>
                            </li>
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-burlington-ma">Burlington, MA</a>
                            </li>

                            {/* Indiana */}
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-indianapolis-in">Indianapolis, IN</a>
                            </li>

                            {/* Tennessee */}
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-nashville-tn">Nashville, TN</a>
                            </li>

                            {/* Kentucky */}
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-louisville-ky">Louisville, KY</a>
                            </li>

                            {/* North Carolina */}
                            <li>
                                <a href="https://eggholic.com/indian-restaurant-in-pineville-nc">Pineville, NC</a>
                            </li>





                        </ul>
                    </div>

                    {/* Canada */}
                    <div className='canada'>
                        <img src="./canada.svg" alt="Eggholic locations across Canada" fetchpriority="high" />
                        <ul>

                            {/* Ontario */}
                            <li>
                                <a href='https://eggholic.com/indian-food-restaurant-in-london-ontario'>London, ON</a>
                            </li>
                            <li>
                                <a href='https://eggholic.com/indian-restaurant-in-etobicoke-ontario'>Etobicoke, ON</a>
                            </li>


                            <li>
                                <a href='https://eggholic.com/indian-restaurant-in-scarborough'>Scarborough, ON</a>
                            </li>
                            <li>
                                <a href='https://eggholic.com/indian-restaurant-in-waterloo-ontario'>Waterloo, ON</a>
                            </li>

                            <li>
                                <a href='https://eggholic.com/indian-restaurant-in-brampton'>Brampton, ON</a>
                            </li>

                            {/* Alberta */}
                            <li>
                                <a href='https://eggholic.com/indian-restaurant-in-calgary-canada'>Calgary, AB</a>
                            </li>

                            {/* Saskatchewan */}
                            <li>
                                <a href='https://eggholic.com/indian-restaurant-in-saskatoon'>Saskatoon, SK</a>
                            </li>



                        </ul>
                    </div>

                </div>

                <span className='gfx-truckright'>

                     <motion.p

                        variants={revealVariant3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
                             <img src="./truckx.png" fetchpriority="high" alt='Eggholic food truck' />

                    </motion.p>
                   
                </span>
            </div>

            <HopMobile />
        </>
    )
}
export default OurStory;
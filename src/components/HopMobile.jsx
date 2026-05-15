import { useState } from "react";
import "./hopmobile.css";

function HopMobile() {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="accordion-wrapper" id="mobilemain">
            {/* Truck Section */}
            <h2 class="fgh-title-kjj">Hop On</h2>
            <section className="truckmobile">

                <div className="left-x-circle">
                    <img src="/truck.png" alt="Eggholic food truck" fetchpriority="low" />
                </div>

                <div className="main-container-center-box-wrp">
                    <div className="main-center-box"></div>
                </div>

                <div className="right-x-circle">
                    <img src="/truck.png" alt="Eggholic food truck" fetchpriority="low" />
                </div>

            </section>

            <div className="accordion-container">
                {/* USA SECTION */}
                <div className={`accordion-item ${activeSection === 'usa' ? 'active' : ''}`}>
                    <div className="accordion-title" onClick={() => toggleSection('usa')}>
                        <span>USA</span>
                        <i className="arrow-icon"></i>
                    </div>
                    <div className="accordion-content">
                        <ul>
                            <li><a href='https://eggholic.com/indian-restaurant-in-san-diego'>San Diego, CA</a></li>
                            <li><a href='https://eggholic.com/indian-restaurant-in-newark-ca'>Newark, CA</a></li>
                            <li><a href="https://eggholic.com/indian-restaurant-in-niles">Niles, IL</a></li>
                            <li><a href="https://eggholic.com/indian-restaurant-in-chicago">Chicago, IL</a></li>
                            <li><a href='https://eggholic.com/indian-restaurant-in-hyde-park-il.html'>Hyde Park (Virtual)</a></li>
                            <li><a href="https://eggholic.com/indian-restaurant-in-sugar-land">Sugar Land, TX</a></li>
                            <li><a href="https://eggholic.com/indian-restaurant-in-new-jersey">Jersey City, NJ</a></li>
                            <li><a href="https://eggholic.com/indian-restaurant-in-queens-ny">Queens, NY</a></li>
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
                </div>

                {/* CANADA SECTION */}
                <div className={`accordion-item ${activeSection === 'canada' ? 'active' : ''}`}>
                    <div className="accordion-title" onClick={() => toggleSection('canada')}>
                        <span>CANADA</span>
                        <i className="arrow-icon"></i>
                    </div>
                    <div className="accordion-content">
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

                {/* UK SECTION */}
                <div className={`accordion-item ${activeSection === 'uk' ? 'active' : ''}`}>
                    <div className="accordion-title" onClick={() => toggleSection('uk')}>
                        <span>UK</span>
                        <i className="arrow-icon"></i>
                    </div>
                    <div className="accordion-content">
                        <ul>
                            <li><a href='https://eggholic.com/indian-restaurant-in-pinner'>Pinner, UK</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HopMobile;
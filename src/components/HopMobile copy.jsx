import { useState } from "react";
import "./hopmobile.css";

function HopMobile() {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="expandableLocationContainer" id="mobilemain">

            <section className="truckmobile">

                <div className="left-x-circle">
                    <img src="/truck.png" alt="Eggholic food truck" fetchpriority="low"/>
                </div>

                <div className="main-container-center-box-wrp">
                    <div className="main-center-box"></div>
                </div>

                <div className="right-x-circle">
                    <img src="/truck.png" alt="Eggholic food truck" fetchpriority="low"/>
                </div>

            </section>

            <div className="expandableContainer">


<div className="kjk-box">
    {/* USA: Button then Content (Expands Down) */}
    <div className="tab-group">
        <div className="expandableTabTop" onClick={() => toggleSection('usa')}>
            <span className={`usa-name ${activeSection === 'usa' ? 'usaActive' : ''}`}>
                USA
            </span>
        </div>
        <div className={`content-box ${activeSection === 'usa' ? 'show' : ''}`}>
            <p>
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
            </p>
        </div>
    </div>

    {/* CANADA: Button then Content (Expands Down) */}
    <div className="tab-group">
        <div className="expandableTabMiddle" onClick={() => toggleSection('canada')}>
            <span className={` ${activeSection === 'canada' ? 'usaActive' : ''}`}>Canada </span>
        </div>
        <div className={`content-box ${activeSection === 'canada' ? 'show' : ''}`}>
            <p>
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
            </p>
        </div>
    </div>

    {/* UK: Content then Button (Expands UP) */}
    <div className="tab-group">
        <div className={`content-box ${activeSection === 'uk' ? 'show' : ''}`}>
            <p>
                <ul>
                    <li>
                        <a href='https://eggholic.com/indian-restaurant-in-pinner'>Pinner, UK</a>
                    </li>
                </ul>
            </p>
        </div>
        <div className="expandableTabBottom" onClick={() => toggleSection('uk')}>
            <span className={`uk-name ${activeSection === 'uk' ? 'usaActive' : ''}`}>
                UK
            </span>
        </div>
    </div>
</div>
```

            </div>
        </div>
    );
}

export default HopMobile;
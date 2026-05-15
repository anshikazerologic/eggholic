import React, { useState,useEffect } from 'react';
import locations from './locations.js';
import './LocationCards.css';
import NavBar from '../components/Navbar.jsx';
import "./franchising.css";
import "./contact.css";
import "../components/HiringForm.css";
import { Helmet } from 'react-helmet-async';

function Location() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCountry, setActiveCountry] = useState("US"); // Default to US

  const countries = ["US", "Canada", "UK"];

  // Filter logic: Matches Country AND Search Query
  const filteredLocations = locations.filter((loc) => {
    const searchTerm = searchQuery.toLowerCase();
    const matchesCountry = loc.country === activeCountry;
    const matchesSearch =
      loc.name.toLowerCase().includes(searchTerm) ||
      loc.address.toLowerCase().includes(searchTerm);

    return matchesCountry && matchesSearch;
  });

      useEffect(() => {
          // Signal to the prerenderer that the Menu page is fully loaded
          const timer = setTimeout(() => {
              console.log("Menu SEO Tags injected - Dispatching render-event");
              document.dispatchEvent(new Event('render-event'));
          }, 1000); 
  
          return () => clearTimeout(timer);
      }, []);
  

  return (
    <>


      <Helmet>
        <title>Indian Food Near Me Locations | Eggholic
        </title>
        <meta
          name="description"
          content="Find your nearest EggHolic locations and enjoy delicious, fresh meals. Indian Restaurant near me, Indian food near me, Indian street food near me, Indian Egg Restaurant near me, Indian Restaurant In Edison, NJ, Indian Restaurant In Nashville, TN, Indian Restaurant In Queens, NY"
        />
      </Helmet>

      <NavBar />
      <section className='mn-svh'>
        <div className="container py-5" id="location">
          <h2 className="text-center mb-4 bcjj">Find Your EggHolic Location</h2>



          {/* Search Bar UI */}
          <div className="row justify-content-center mb-5">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-start-0 ps-0"
                  placeholder={`Search in ${activeCountry}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <p className="text-muted small mt-2 njj">
                Showing {filteredLocations.length} locations in {activeCountry}
              </p>
            </div>
          </div>

          {/* Country Toggle UI */}
          <div className="d-flex justify-content-center mb-4">
            <div className="btn-group p-1 bg-light rounded-pill shadow-sm widthkk">
              {countries.map((country) => (
                <button
                  key={country}
                  onClick={() => setActiveCountry(country)}
                  className={`btn rounded-pill px-4 ${activeCountry === country
                    ? "btn-primary country-btn"
                    : "btn-light text-muted country-btn"
                    }`}
                  style={{ border: 'none' }}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((loc, index) => (
                <div key={index} className="card2">
                  {/* ... Your existing Card Inner JSX ... */}
                  <div className="one">
                    <iframe src={loc.mapSrc} width="100%" height="219" title={loc.name}></iframe>
                  </div>
                  <div className="two">
                    
                      <a href={loc.pageLink}>
                         <h1 className="heading">{loc.name}</h1>
                      </a>
              
                    <p className="address2">{loc.address}</p>
                    <div className="actions2">
                      <a href={loc.dir} className="btn2 primary2">
                        <span>Directions</span>
                      </a>
                      <a href={loc.orderLink} className="btn2 btn-3">
                        <span>
                          Order Online
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-5">
                <h3>No locations found in {activeCountry}</h3>
                <button className="btn btn-link" onClick={() => setSearchQuery("")}>
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Location;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import locations from './locations.js';
import './LocationCards.css';

function Location2() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLocations = locations.filter((loc) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      loc.name.toLowerCase().includes(searchTerm) ||
      loc.address.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <section className='mn-svh'>
      <div className="container py-5" id="location">
        <h2 className="text-center mb-4 bcjj">Find Your EggHolic Location</h2>

        {/* Search Bar UI */}

        <div className="d-flex flex-wrap justify-content-center gap-4">
          {filteredLocations.length > 0 ? (
            filteredLocations.map((loc, index) => (
              <div key={index} className="card2">
                <div className="one">
                  <iframe
                    src={loc.mapSrc}
                    width="100%"
                    height="219"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${loc.name} map`}
                  ></iframe>
                </div>

                <div className="two">
                  <div className="a">
                    <h1 className="heading">{loc.name}</h1>
                    <div className="detail">
                      <div className="address">
                        <i className="fa-solid fa-map-pin"></i>
                        <p className="address2">{loc.address}</p>
                      </div>
                      <div className="phone">
                        <i className="fa-solid fa-phone"></i>
                        <p>{loc.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="actions2">
                    {/* Direction Button */}
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn2 primary2"
                    >
                      Directions
                    </a>

                    {/* Order Online Button (Replacing View Page) */}
                    <a 
                      href={loc.orderLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn2 btn-3"
                    >
                      <span>Order Online</span>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5">
              <i className="fa-solid fa-utensils fa-3x mb-3 text-muted"></i>
              <h3>No locations found matching "{searchQuery}"</h3>
              <button 
                className="btn btn-link" 
                onClick={() => setSearchQuery("")}
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Location2;
import React from 'react';
import './PopMeModal.css';

const PopMeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const locations = [
    { city: "Schaumburg", phone: "847-565-4105" },
    { city: "Chicago", phone: "312-940-3521" },
    { city: "Niles", phone: "224-534-7137" },
    { city: "Louisville", phone: "502-916-2024" },
    { city: "Edison", phone: "848-448-7799" },
    { city: "Mechanicsburg", phone: "717-458-5760" },
    { city: "Catonsville", phone: "443-860-9392" },
    { city: "Nashville", phone: "615-739-6227" },
    { city: "Sugarland", phone: "281-637-0032" },
    { city: "Irving", phone: "972-685-7999" },
    { city: "Chantilly", phone: "703-253-1646" },
    { city: "Queens", phone: "718-413-5432" },
    { city: "Indianapolis", phone: "317-343-2995" },
    { city: "Shrewsbury", phone: "774-275-3165" },
    { city: "Suwanee", phone: "470-239-3255" },
    { city: "Burlington", phone: "781-359-4024" },
    { city: "Marietta, GA", phone: "770-422-8000" },
    { city: "Jersey City", phone: "201-721-5025" },
    { city: "Washington DC", phone: "202-891-7863" },
    { city: "Naperville", phone: "331-226-2953" },
  ];

  return (
    <div className="popme-overlay" onClick={onClose}>
      <div className="popme-modal" onClick={(e) => e.stopPropagation()}>
        <button className="popme-close-btn" onClick={onClose}>&times;</button>
        
        <h2 className="popme-title">GIVE US A RING</h2>
        
        <div className="popme-grid-container">
          {locations.map((loc, index) => (
            <a key={index} href={`tel:${loc.phone.replace(/-/g, '')}`} className="popme-item">
              <div className="popme-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="popme-details">
                <span className="popme-city">{loc.city}</span>
                <span className="popme-phone">{loc.phone}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopMeModal;
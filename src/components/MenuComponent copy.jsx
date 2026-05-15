import React, { useState, useEffect } from 'react';
import "./menucomponent.css";
import { useNavigate, useSearchParams } from 'react-router-dom';

// Menu data component ke bahar rakhna sahi hai (performance ke liye)
const menuData = {
  'SANDWICH': {
    title: 'SANDWICH PLATTER',
    subtitle: '5 SANDWICHES OF YOUR CHOSEN FLAVOR',
    items: [{ label: 'TRAY', detail: '(Serves 5-6 People)', price: '$50' }],
    img: "./Catering-4.png",
  },
  'DABELI': {
    title: 'DABELI PLATTER',
    items: [
      { label: 'HALF TRAY', detail: '(9 Pieces)', price: '$35' },
      { label: 'FULL TRAY', detail: '(18 Pieces)', price: '$65' }
    ],
    img: "./CATERING-DABELI.webp"
  },
  'VADA-PAV': {
    title: 'VADA-PAV PLATTER',
    items: [
      { label: 'HALF TRAY', detail: '(9 Pieces)', price: '$40' },
      { label: 'FULL TRAY', detail: '(18 Pieces)', price: '$75' }
    ],
    img: "./vada pav tray-m.webp"
  },
  'KATHI ROLL': {
    title: 'KATHI ROLL PLATTER',
    subtitle: 'YOUR CHOSEN FLAVOR',
    items: [
      { label: 'HALF TRAY', detail: '(8 Pieces)', price: '$45' },
      { label: 'FULL TRAY', detail: '(16 Pieces)', price: '$90' }
    ],
    img: "./Catering-6.png"
  },
  'ENTRÉE': {
    title: 'ENTRÉE PLATTERS',
    subtitle: 'YOUR CHOSEN ENTRÉE',
    sections: [
      {
        sectionTitle: 'EGG/VEG',
        items: [
          { label: 'HALF TRAY', detail: '(Serves 8-10 People)', price: '$80' },
          { label: 'FULL TRAY', detail: '(Serves 16-18 People)', price: '$160' }
        ]
      },
      {
        sectionTitle: 'CHICKEN',
        items: [
          { label: 'HALF TRAY', detail: '(Serves 8-10 People)', price: '$100' },
          { label: 'FULL TRAY', detail: '(Serves 16-18 People)', price: '$200' }
        ]
      }
    ],
    img: "./CATERING- ENTREE.webp"
  }
};

const MenuComponent = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryFromUrl = searchParams.get('category');

  const [activeTab, setActiveTab] = useState('SANDWICH');
  const tabs = ['SANDWICH', 'DABELI', 'VADA-PAV', 'KATHI ROLL', 'ENTRÉE'];

  // --- FIX: Current content ko activeTab ke base par nikalna ---
  const currentContent = menuData[activeTab];

  // 1. Initial Load from URL
  useEffect(() => {
    if (categoryFromUrl) {
      const cleanUrlCat = categoryFromUrl.toUpperCase();
      const matchedTab = tabs.find(tab => {
        const upperTab = tab.toUpperCase();
        // Check if URL string contains tab name or vice versa (for spacing/platter issues)
        return cleanUrlCat.includes(upperTab) || upperTab.includes(cleanUrlCat);
      });

      if (matchedTab) {
        setActiveTab(matchedTab);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  // 2. Manual Tab Click logic
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    // URL clean karein taaki query parameters confusion na karein refresh par
    navigate('/catering', { replace: true });
  };

  // Helper function to render items
  const renderItems = (items) => (
    items.map((item, index) => (
      <div key={index} className="cdx-item-row">
        <div className="cdx-item-left">
          <span className="cdx-label">{item.label}</span>
          <span className="cdx-detail">{item.detail}</span>
        </div>
        <div className="cdx-price-leader"></div>
        <span className="cdx-price">{item.price}</span>
      </div>
    ))
  );

  return (
    <div className="cdx-container">
      <div className="cdx-menu-card">
        {/* Navigation Tabs */}
        <div className="cdx-tabs-header">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`cdx-tab-btn ${activeTab === tab ? 'cdx-active' : ''}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="cdx-content">
          {currentContent?.subtitle && (
            <p className="cdx-subtitle">{currentContent.subtitle}</p>
          )}

          {currentContent?.sections ? (
            currentContent.sections.map((section, idx) => (
              <div key={idx} className="cdx-section-wrapper">
                <h3 className="cdx-section-title">{section.sectionTitle}</h3>
                {renderItems(section.items)}
              </div>
            ))
          ) : (
            <div className="cdx-items-wrapper">
              {currentContent?.items && renderItems(currentContent.items)}
            </div>
          )}
        </div>

        {/* Image Section */}
        <section className='imageCover'>
          <img 
            src={currentContent?.img} 
            className='cover-img' 
            alt={currentContent?.title || activeTab}
          />
        </section>
      </div>
    </div>
  );
};

export default MenuComponent;
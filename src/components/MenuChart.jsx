import React from 'react';
import './MenuChart.css';

const MenuChart = () => {
  return (
    <div className="fgc-menu-page">
      <div className="fgc-menu-container">
        
        {/* TOP ROW */}
        <div className="fgc-flex-row">
          {/* Left Column: Appetizers */}
          <section className="fgc-section fgc-section-appetizers fgc-border-right">
            <h2 className="fgc-category-title">APPETIZERS</h2>
            <div className="fgc-items-cols-2">
              <div className="fgc-col">
                <p>Boiled Egg Plain</p>
                <p>Cheese Katori</p>
                <p>Egg Locho</p>
                <p>Green Boiled Fry</p>
                <p>Egg Bites</p>
                <p>Samosas</p>
                <p>Dabeli</p>
                <p>Vadapav</p>
                <div className="fgc-special-item">
                  <p className="fgc-bold-item">Kathi Roll</p>
                  <p className="fgc-sub-text mbds">Paneer Tikka | Chicken Masala <br/> | Samosa | Egg</p>
                </div>
              </div>
              <div className="fgc-col">
                <p>Amdavadi Touch Sandwich</p>
                <p>Paneer Masala Sandwich</p>
                <p>Paneer Schezwan Sandwich</p>
                <p>Corn Masala Sandwich</p>
                <p>Veg Cheese Grill Sandwich</p>
                <p>Anda Masala Sandwich</p>
                <p>Chicken Masala Sandwich</p>
               
              </div>
            </div>

            <div className="fgc-callout-box">
              <h3>Add Egg or Chicken dishes for Extra +$2/Person</h3>
              <p>All of our items are also available in Tray style catering. Ask us and we will provide you more information on that.</p>
            </div>
          </section>

          {/* Right Column: Veg & Egg */}
          <div className="fgc-flex-col fgc-width-50">
            <section className="fgc-section fgc-border-bottom">
              <h2 className="fgc-category-title">VEG ENTRÉES</h2>
              <div className="fgc-items-cols-2">
                <div className="fgc-col">
                  <p>Paneer Kadai</p>
                  <p>Paneer Gotalo</p>
                  <p>Paneer Bhurji</p>
                  <p>Paneer Butter Masala</p>
                  <p>Methi Mutter Malai</p>
               
                </div>
                <div className="fgc-col">
                  <p>Chhole</p>
                  <p>Dal-Fry</p>
                  <p>Jeera Rice</p>
                  <p>Veg Pulav</p>
                  <p>Lava Paneer Pulav</p>
                  <p>Hydrabadi Pulav</p>
                </div>
              </div>
            </section>

            <section className="fgc-section">
              <h2 className="fgc-category-title">EGG ENTRÉES</h2>
              <div className="fgc-items-cols-2">
                <div className="fgc-col">
               
              
                  <p>Boiled Kheemo</p>
                  <p>Egg Bhurji</p>
                  <p>Surti Gotalo</p>
                  <p>Boil Tikka</p>
                  <p>Australian Fry</p>
                </div>
                <div className="fgc-col">
                  <p>Toofani Curry</p>
                  <p>Egg Curry</p>
                  <p>Bhurji Pulav</p>
                  <p>Anda Pulav</p>
                  <p>Lava Pulav</p>
                  <p>Green Egg Rice</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="fgc-flex-row fgc-border-top">
          <section className="fgc-section fgc-width-25 fgc-border-right">
            <h2 className="fgc-category-title">CHICKEN ENTRÉES</h2>
       
         
            <p>Holic Kabobs</p>
            <p>Raja da Kabobs</p>
            <p>Tandoori Kabobs</p>
            <p>Chicken Butter Masala</p>
            <p>Chicken Kadai</p>
            <p>Toofani Chicken</p>
          </section>

          <section className="fgc-section fgc-width-25 fgc-border-right fgc-border-top-2">
            <h2 className="fgc-category-title">BEVERAGES</h2>
            <p>Chai</p>
            <p>Masala Chaas</p>
            <p>Mango Lassi</p>
            <p>Sweet Lassi</p>
            <p>Rabadi Falooda</p>
            <p>Rose Falooda</p>
          </section>

          <section className="fgc-section fgc-width-25 fgc-border-right fgc-border-bottom-2 fgc-border-top-2">
            <h2 className="fgc-category-title">BREADS</h2>
            <p>Roti (Chapati)</p>
            <p>Naan</p>
            <p>Butter Naan</p>
            <p>Garlic Naan</p>
            <p>Toasted Bread</p>
          </section>

          <section className="fgc-section fgc-width-25">
            <h2 className="fgc-category-title">DESSERTS</h2>
            <p>Gulab Jamun</p>
            <p>Ras Malai</p>
            <p>Brownie</p>
          </section>
        </div>

      </div>
    </div>
  );
};

export default MenuChart;
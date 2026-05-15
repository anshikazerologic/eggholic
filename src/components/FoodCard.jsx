import React from 'react';

const DIETARY_ALT_TEXT = {
  '/egg.svg': 'Contains Egg',
  '/gluten.svg': 'Contains Gluten',
  '/veg.svg': 'Vegetarian',
  '/ckn.svg': 'Contains Chicken (Halal)',
  '/hen.svg': 'Contains Chicken',
  '/nuts.svg': 'Contains Nuts'
};

const FoodCard = ({ item }) => {
  return (
    <div className="fx-card">
      <span className='fx-icon'>
        <img src={item.icon} alt={DIETARY_ALT_TEXT[item.icon] || "Dietary Info"} />
      </span>
      <div className="fx-img-box">
        <img src={item.image} className="fx-img" alt={item.alt || item.title} loading="lazy" />
      </div>
      <div className="fx-card-content">
        <h3 className="fx-card-title">{item.title}</h3>
        <p className="fx-card-desc">{item.description}</p>
        <a href="https://order.eggholic.com/" className="cv-order-link">Order now →</a>
      </div>
    </div>
  );
};

export default FoodCard;
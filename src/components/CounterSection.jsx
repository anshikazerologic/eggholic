import React from 'react';
import './CounterSection.css';

const CounterSection = () => {
  const stats = [
    { label: 'Established', value: '2017' },
    { label: 'Countries', value: '3' },
    { label: 'Stores', value: '29' },
    { label: 'Customers', value: '1m+' },
  ];

  return (
    <section className="count-container">

      
      <div className="count-wrapper">
        {stats.map((stat, index) => (
          <div key={index} className="count-item">
            <span className="count-label">{stat.label}</span>
            <span className="count-value">{stat.value}</span>
          </div>
        ))}
      </div>

  
    </section>
  );
};

export default CounterSection;
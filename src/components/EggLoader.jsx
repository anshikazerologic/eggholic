import React from 'react';
import './Loader.css';

const EggLoader = () => {
  return (
     <div className="ios-loader-wrapper">
      <div className="ios-loader" aria-label="Loading">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="ios-bar" />
        ))}
      </div>
    </div>
  );
};

export default EggLoader;
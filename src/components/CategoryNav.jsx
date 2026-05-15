import React from 'react';

/**
 * CategoryNav Component
 * @param {Array} categories - Category names ki list
 * @param {String} activeCategory - Current selected category
 * @param {Function} setActiveCategory - Category change karne ka function
 * @param {Ref} scrollRef - Sub-nav list ka reference (scroll control ke liye)
 * @param {Boolean} canScrollLeft - Left arrow ki visibility state
 * @param {Boolean} canScrollRight - Right arrow ki visibility state
 * @param {Function} onScroll - Scroll button click handler
 */
const CategoryNav = ({ 
  categories, 
  activeCategory, 
  setActiveCategory, 
  scrollRef, 
  canScrollLeft, 
  canScrollRight, 
  onScroll 
}) => {

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    
    // Mobile/Tablet par click karne ke baad screen ko thoda upar le jana 
    // taaki menu items upar se dikhen
    if (window.innerWidth < 1024) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fx-nav-container">
      {/* Navigation Arrows (Optional: CSS se hide/show handle karein) */}
      <div className="fx-nav-controls">
        <button
          onClick={() => onScroll('left')}
          className={`fx-nav-arrow left-arrow ${!canScrollLeft ? 'is-disabled' : ''}`}
          disabled={!canScrollLeft}
          aria-label="Scroll Left"
        >
          {"<"}
        </button>

        <button
          onClick={() => onScroll('right')}
          className={`fx-nav-arrow right-arrow ${!canScrollRight ? 'is-disabled' : ''}`}
          disabled={!canScrollRight}
          aria-label="Scroll Right"
        >
          {">"}
        </button>
      </div>

      {/* Categories List */}
      <nav className="fx-sub-nav">
        <ul className="fx-sub-list" ref={scrollRef}>
          {categories.map((cat) => (
            <li
              key={cat}
              className={`fx-sub-item ${activeCategory === cat ? 'fx-sub-active' : ''}`}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default CategoryNav;
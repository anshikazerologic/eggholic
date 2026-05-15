import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { mockData } from './menuData';
import { useMenuScroll } from './useMenuScroll';
import CategoryNav from './CategoryNav';
import FoodCard from './FoodCard';
import './FoodMenu.css';

const FoodMenu = () => {

  // =========================
  // STATES
  // =========================
  const [activeTab] = useState('online');

  const [activeCategory, setActiveCategory] =
    useState('New Here? Try these');

  const [searchQuery, setSearchQuery] =
    useState('');

  const [searchResults, setSearchResults] =
    useState([]);

  const [isSearching, setIsSearching] =
    useState(false);

  // =========================
  // REFS
  // =========================
  const scrollRef = useRef(null);

  // =========================
  // ROUTER
  // =========================
  const location = useLocation();

  // =========================
  // CUSTOM SCROLL HOOK
  // =========================
  const {
    canScrollLeft,
    canScrollRight,
    scroll
  } = useMenuScroll(scrollRef);

  // =========================
  // CATEGORY LIST
  // =========================
  const categoriesList = useMemo(() => {
    return mockData[activeTab].map(
      (catObj) => catObj.category
    );
  }, [activeTab]);

  // =========================
  // SEARCH HANDLER
  // =========================
  const handleSearch = (e) => {

    if (e) e.preventDefault();

    const query =
      searchQuery.trim().toLowerCase();

    // Empty search
    if (!query) {
      setIsSearching(false);
      setSearchResults([]);
      return;
    }

    // All items
    const allItems =
      mockData[activeTab].flatMap(
        (cat) => cat.items
      );

    // Filter items
    const filtered = allItems.filter(
      (item) =>
        item.title
          .toLowerCase()
          .includes(query) ||
        item.description
          .toLowerCase()
          .includes(query)
    );

    // Update states
    setSearchResults(filtered.slice(0, 9));
    setIsSearching(true);
  };

  // =========================
  // FILTERED CATEGORY ITEMS
  // =========================
  const filteredItems = useMemo(() => {

    const selectedCatObj =
      mockData[activeTab].find(
        (cat) =>
          cat.category === activeCategory
      );

    return selectedCatObj
      ? selectedCatObj.items
      : [];

  }, [activeTab, activeCategory]);

  // =========================
  // URL CATEGORY SYNC
  // =========================
  useEffect(() => {

    const params =
      new URLSearchParams(location.search);

    const categoryFromUrl =
      params.get('category');

    if (categoryFromUrl) {

      setActiveCategory(
        decodeURIComponent(
          categoryFromUrl
        ).trim()
      );

      setIsSearching(false);
    }

  }, [location.search]);

  // Is block ko component ke andar add karein
useEffect(() => {
  // Pura menu data traverse karke images preload karna
  const allItems = mockData[activeTab].flatMap(cat => cat.items);
  allItems.forEach(item => {
    if (item.image) {
      const img = new Image();
      img.src = item.image;
    }
  });
}, [activeTab]);

  // =========================
  // AUTO SCROLL ACTIVE ITEM
  // =========================
  useEffect(() => {

    if (
      scrollRef.current &&
      activeCategory
    ) {

      const timeout = setTimeout(() => {

        const activeElement =
          scrollRef.current.querySelector(
            '.fx-sub-active'
          );

        if (activeElement) {

          activeElement.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'nearest'
          });

        }

      }, 100);

      return () => clearTimeout(timeout);
    }

  }, [activeCategory, isSearching]);

  // =========================
  // CATEGORY CHANGE
  // =========================
  const handleCategoryChange = (
    category
  ) => {

    setActiveCategory(category);

    // Search reset
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);

  };

  // =========================
  // CLEAR SEARCH
  // =========================
const clearSearch = () => {
  window.location.reload();
};
  // =========================
  // JSX
  // =========================


  // =========================
// STICKY CATEGORY NAV
// =========================
useEffect(() => {

  const handleStickyNav = () => {

    // Sirf smaller devices
    if (window.innerWidth >= 1024) return;

    const subNav =
      document.querySelector('.fx-sub-nav');

    if (!subNav) return;

    if (window.scrollY > 235) {
      subNav.classList.add('is-sticky');
    } else {
      subNav.classList.remove('is-sticky');
    }

  };

  window.addEventListener(
    'scroll',
    handleStickyNav
  );

  window.addEventListener(
    'resize',
    handleStickyNav
  );

  // Initial check
  handleStickyNav();

  return () => {
    window.removeEventListener(
      'scroll',
      handleStickyNav
    );

    window.removeEventListener(
      'resize',
      handleStickyNav
    );
  };

}, []);


  return (

    <div className="fx-wrapper">

      {/* =====================
          TOP NAVIGATION
      ====================== */}
      <div className="cxz-toggle-container">

        <div className="cxz-toggle-wrapper shadow-sm">

          <NavLink
            to="/menu"
            className="cxz-toggle-item cxz-active"
          >
            Menu
          </NavLink>

          <NavLink
            to="/catering"
            className="cxz-toggle-item"
          >
            Catering
          </NavLink>

        </div>

      </div>

      {/* =====================
          SEARCH SECTION
      ====================== */}
      <div className="fx-search-container">

        <form
          className="fx-search-form"
          onSubmit={handleSearch}
        >

          <input
            type="text"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
            className="fx-search-input"
          />

          <button
            type="submit"
            className="fx-search-btn"
          >
            Search
          </button>

          {isSearching && (

            <button
              type="button"
              className="fx-clear-btn"
              onClick={clearSearch}
            >
              ✕
            </button>

          )}

        </form>

      </div>

      {/* =====================
          CATEGORY NAV
      ====================== */}

      {/* IMPORTANT:
          Hide only with CSS
          Don't unmount component
      */}

      <div
        className={
          isSearching
            ? 'hide-nav'
            : ''
        }
      >

        <CategoryNav
          categories={categoriesList}
          activeCategory={activeCategory}
          setActiveCategory={
            handleCategoryChange
          }
          scrollRef={scrollRef}
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          onScroll={scroll}
        />

      </div>

      {/* =====================
          FOOD GRID
      ====================== */}
      <main className="fx-grid">

        {isSearching ? (

          <>
            {searchResults.length > 0 ? (

              searchResults.map((item) => (

                <FoodCard
                  key={item.id}
                  item={item}
                />

              ))

            ) : (

              <p className="no-items">
                No result found
              </p>

            )}
          </>

        ) : (

          filteredItems.map((item) => (

            <FoodCard
              key={item.id}
              item={item}
            />

          ))

        )}

      </main>

    </div>
  );
};

export default FoodMenu;
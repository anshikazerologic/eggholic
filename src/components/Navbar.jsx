import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Nav.css';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Helper to check if any of the "More" dropdown items are active
  const isMoreActive = ['/hiring', '/franchising', '/locations'].includes(location.pathname);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  const handleOrderClick = (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      // USE THIS FOR EXTERNAL LINKS:
      window.location.href = 'https://order.eggholic.com/';

      // Note: The code below will likely not execute as the page 
      // is redirecting to a new website.
      /*
      setTimeout(() => {
        window.dispatchEvent(new Event('scrollToLocation'));
      }, 400);
      */
    }, 1000);
  };



  const OrderNowButton = ({ className = "" }) => (


    <button
      onClick={handleOrderClick}
      className={`dx-btn-loading ${className} ${isLoading ? 'is-loading' : ''}`}
      disabled={isLoading}
    >
      <span className="dx-btn-text">
        {isLoading ? 'Processing...' : 'Order Now'}

      </span>
    </button>
  );

  return (
    <header className="dx-header">
      <nav className="dx-navbar">
        <div className="dx-container">
          {/* Logo */}
          <Link className="dx-brand" to="/">
            <img src="/EGGHOLIC NAV BAR LOGO.png" alt="Eggholic" width="150" height="auto"
              className='logo-desktop' />
            <img
              src="/egg-logo-mobile.png"
              alt="Eggholic"
              className="logo-mobile"
            />
          </Link>

          {/* Desktop Links */}

          {/* Right Section */}
          <div className="dx-actions">

            <div className="dx-desktop-menu">
              <Link className={`dx-nav-link ${isActive('/') ? 'is-active-link' : ''}`} to="/">
                Home
              </Link>
              <Link className={`dx-nav-link ${isActive('/our-story') ? 'is-active-link' : ''}`} to="/our-story">
                Our story
              </Link>
              <Link className={`dx-nav-link ${isActive('/menu') ? 'is-active-link' : ''}`} to="/menu">
                Our Menu
              </Link>
              <Link className={`dx-nav-link ${isActive('/catering') ? 'is-active-link' : ''}`} to="/catering">
                Catering
              </Link>

              <div className="dx-dropdown">
                <span className={`dx-nav-link ${isMoreActive ? 'is-active-link' : ''}`}>
                  more ▾
                </span>
                <div className="dx-dropdown-content">
                  <Link to="/hiring" className={`dx-dropdown-item ${isActive('/hiring') ? 'is-active-sub' : ''}`}>
                    hiring
                  </Link>
                  <Link to="/franchising" className={`dx-dropdown-item ${isActive('/franchising') ? 'is-active-sub' : ''}`}>
                    franchising
                  </Link>
                  <Link to="/locations" className={`dx-dropdown-item ${isActive('/locations') ? 'is-active-sub' : ''}`}>
                    Locations
                  </Link>
                </div>
              </div>

              <Link className={`dx-nav-link ${isActive('/contact-us') ? 'is-active-link' : ''}`} to="/contact-us">
                Contact us
              </Link>
            </div>

            <OrderNowButton className="dx-hide-mobile" />

            <a href="https://order.eggholic.com/" className='mob-order'>
              Order Online
            </a>

            <button
              className={`dx-taco-toggle ${isMenuOpen ? 'is-active hide-me' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <div className="dx-taco-bars">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Custom Mobile Drawer Overlay */}
      <div className={`dx-mobile-overlay ${isMenuOpen ? 'is-visible' : ''}`} onClick={() => setIsMenuOpen(false)} />

      {/* Custom Mobile Drawer */}
      <aside className={`dx-mobile-drawer ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="dx-drawer-header">
          {/* <span className="dx-drawer-title">Menu</span> */}
          <button
            className={`dx-taco-toggle ${isMenuOpen ? 'is-active ' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >



            <div className="dx-taco-bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <div className="dx-drawer-body">
          <Link className="dx-drawer-link" to="/">Home</Link>
          <Link className="dx-drawer-link" to="/menu">Our Menu</Link>
          <Link className="dx-drawer-link" to="/catering"> Catering</Link>
          <Link className="dx-drawer-link" to="/our-story">Our Story</Link>
          <Link className="dx-drawer-link" to="/contact-us">Contact Us</Link>
          <Link className="dx-drawer-link" to="/hiring">Hiring</Link>
          <Link className="dx-drawer-link" to="/franchising">Franchise</Link>
          <Link to="/locations" className="dx-drawer-link">
            Locations
          </Link>
        </div>
      </aside>
    </header>
  );
};

export default NavBar;
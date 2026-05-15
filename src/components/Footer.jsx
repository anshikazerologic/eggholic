import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className='dcxx'></div>

      <footer className="cfx-footer">
        <div className="cfx-footer-container">
          {/* Brand Section */}
          <div className="cfx-footer-brand">
            <div className="cfx-footer-logo">
              {/* Replace with your actual logo img tag */}
              <img src='/FOOTER LOGO.png' width={390} alt='Eggholic - authentic Indian egg street food restaurant'/>
            </div>

            <div className="cfx-social-links">
              <a href="https://www.facebook.com/EggHolicofficial" aria-label="Facebook">
               <img src="/Facebook.svg" alt='Follow Eggholic on Facebook' />
              </a>
              <a href="https://www.instagram.com/eggholicofficial/" aria-label="Instagram">
                <img src='/Instagram.svg' alt='Follow Eggholic on Instagram' />
              </a>

              <a href="https://www.tiktok.com/@eggholic" aria-label="">
                <img src="/tik.svg" alt='Follow Eggholic on TikTok'/>
              </a>

            </div>
          </div>

          {/* Links Section */}
          <div className="cfx-footer-group">

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/catering">Catering</Link></li>
              <li><Link to="/franchising">Franchising</Link></li>
              <li><Link to="/hiring">Hiring</Link></li>
              <li><Link to="/locations">Locations</Link></li>
              <li>
                <Link to="/contact-us">Contact us</Link>

              </li>

                <li>
                <Link to="/privacy-policy">Privacy policy</Link>

              </li>

               <li>
                <Link to="/news">News</Link>

              </li>

        
            </ul>
          </div>

          {/* Support Section */}


        </div>

        <div className="cfx-footer-bottom">
          <p>&copy; {currentYear}  Eggholic International LLC. All Rights Reserved.</p>
        </div>
           <div class="copyright_text"><a class="links-shown" href="https://zerologic.io" target="_blank" rel="noopener noreferrer">Designed by Zerologic</a></div>
      </footer>
    </>
  );
};

export default Footer;
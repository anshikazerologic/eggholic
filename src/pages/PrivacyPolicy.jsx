import React from 'react';
import './BlogPage.css';
import NavBar from '../components/Navbar';

const PrivacyPolicy = () => {
  return (
    <>
        <NavBar/>

         <div className="pop-blog-wrapper">
      {/* Top Cover Image */}
      <img 
        src="/Card%203.png" 
        alt="Privacy Policy and Security" 
        className="pop-cover-image"
      />

      {/* Main Content Container (1300px centered) */}
      <div className="pop-container">
        <header className="pop-header">
          <h1 className="pop-main-title">Privacy Policy</h1>
          <h2 className="pop-sub-title">Eggholic International LLC Privacy Statement</h2>
        </header>

        <article className="pop-content-section">
          <p className="pop-text">
            This statement sets forth the Privacy Policy of Eggholic International LLC (the “Company”) for the use of the 
            Company’s website (the “website” or “site”), and describes the practices that the Company will follow with 
            respect to the privacy of users of the website. This Privacy Policy does not apply to the Company’s offline 
            information collection activities. 
          </p>
          
          <p className="pop-text">
            From time to time, we may change this Privacy Policy. Accordingly, you should note the date of the latest 
            revision posted at the bottom of this page, which should alert you to changes since your prior visit.
          </p>

          <h3 className="pop-heading">Personally Identifiable Information</h3>
          <p className="pop-text">
            “Personally identifiable information” is information specifically about you that can be used to identify you, 
            such as name, address, e-mail address, a user ID, a driver’s license number or a credit card number.
          </p>

          <h3 className="pop-heading">Information Collection, Use and Distribution</h3>
          <p className="pop-text">
            The nature of the services that we provide through our website requires that we collect and use information 
            about you. Some of your private information may be disclosed to third parties (for example, accrediting bodies) 
            in order to provide the information and services that you request.
          </p>
          <ul className="pop-list">
            <li className="pop-list-item">We do not sell or rent personally identifiable information collected through this site to anyone.</li>
            <li className="pop-list-item">We may use your information to fulfill orders or follow up after your visit.</li>
            <li className="pop-list-item">We may disclose information to conform to legal requirements or protect our rights and property.</li>
          </ul>

          <h3 className="pop-heading">Children’s Privacy</h3>
          <p className="pop-text">
            This website is intended for use by persons aged 13 or older. By your use of this site, you affirm that you 
            are at least 13 years of age. If you are under 18, you are only permitted to use this website with the 
            consent of your parents or an adult guardian. We do not knowingly collect information from children under 13.
          </p>

          <h3 className="pop-heading">Information Security</h3>
          <p className="pop-text">
            We exercise great care to protect your personally identifiable information using industry-standard security 
            practices. However, no data transmission over the Internet can be guaranteed to be 100% secure. While we 
            strive to protect your information, we cannot ensure or warrant the security of any information you transmit to us.
          </p>

          <h3 className="pop-heading">Use of Cookies</h3>
          <p className="pop-text">
            This website utilizes “cookies” to collect information about how our site is used. Cookies are small strings 
            of text that help us remember your preferences. While you can modify your browser to reject cookies, 
            doing so may prevent you from utilizing certain features of this website.
          </p>

          <h3 className="pop-heading">Links to Other Sites</h3>
          <p className="pop-text">
            This website may contain links to other websites. We are not responsible for the privacy practices or 
            the content contained on or accessible from such other websites.
          </p>

          <h3 className="pop-heading">Ownership Changes</h3>
          <p className="pop-text">
            In the event that the Company or this website becomes owned or controlled by other entities, your 
            information may be transferred. In such an event, this Privacy Policy will continue to apply until 
            you are notified otherwise.
          </p>

          <h3 className="pop-heading">Contact Information</h3>
          <p className="pop-text">
            If you have questions or concerns regarding this Privacy Policy, you should contact the Company at: 
            <strong> contact@eggholic.com</strong>
          </p>
        </article>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;
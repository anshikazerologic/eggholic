import React, { useState,useEffect } from 'react';
import Location2 from './Location2';
import NavBar from '../components/Navbar';
import { countryCodes } from './countryCodes';
import "./contact.css";
import "./FranchiseForm.css";
import "./franchising.css";
import "../components/HiringForm.css";
import { Helmet } from 'react-helmet-async';
import './Hiring.css';
function Contact() {

    useEffect(() => {
        // Signal to the prerenderer that the Menu page is fully loaded
        const timer = setTimeout(() => {
            console.log("Menu SEO Tags injected - Dispatching render-event");
            document.dispatchEvent(new Event('render-event'));
        }, 1000); 

        return () => clearTimeout(timer);
    }, []);


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    desiredLocation: '',
    message: ''
  });

  const [status, setStatus] = useState(null); // null, 'loading', 'success', 'error', 'missing_fields'

  const locations = [
    '829 W Higgins Rd, Schaumburg, IL 60195',
    '833 W Chicago Ave FL 1, Chicago, IL 60642',
    '8425 W Golf Rd, Niles, IL 60714',
    '8435 W Golf Rd, Niles, IL 60714',
    '1947 S Hurstbourne Pkwy, Louisville, KY 40220',
    '1679 Oak Tree Rd, Edison, NJ 08820',
    '4126 Harding Place, Suite 106, Nashville, TN 37211',
    '232 Highway 6, Suite 100, Sugar Land, TX 77478',
    '7750 N MacArthur Blvd, Suite 135, Irving, TX 75063',
    '13951 Metrotech Drive, Chantilly, VA 20151',
    '256-01 Hillside Ave, Queens, NY 11001',
    '1224 W 86th St, Indianapolis, IN 46260',
    '378 Maple Ave, Shrewsbury, MA 01545',
    '10 Wall St, Burlington, MA 01803',
    '490 Franklin Gateway SE, Marietta, GA 30067',
    '769 Newark Avenue, Jersey City, NJ 07306',
    '1990 M St NW, Unit 102, Washington, DC 20036',
    '9774 Cincinnati Columbus Road, Cincinnati, OH 45241',
    '9474 Black Mountain Rd, Suite G-H, San Diego, CA 92126',
    '5862 Mowry School Road, Newark, CA 94560',
    '601 North Polk Street, Suite G, Pineville, NC 28314',
    '168 Kennedy Rd S #1, Brampton, ON L6W 3G6, Canada',
    '3478 Lawrence Ave E, Scarborough, ON M1H 1A9, Canada',
    '31 University Ave E, Waterloo, ON N2J 2V9, Canada',
    '4150 109 Ave NE, Suite 08, Calgary, AB T3N 1A6, Canada',
    '2687 Kipling Ave, Toronto, ON M9V 5G6, Canada',
    '931 Oxford Street East, Unit 2, London, ON N5Y 3K1, Canada',
    '1036 Louise Ave, Saskatoon, SK S7H 2P6, Canada',
    '381 Uxbridge Road, Pinner, HA5 4JN, UK'
  ];

  const handleChange = (e) => {
    // Clear the error status once the user starts typing again
    if (status === "missing_fields") setStatus(null);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Hard Validation Check
    const { firstName, lastName, email, phone, desiredLocation, message } = formData;
    if (!firstName || !lastName || !email || !phone || !desiredLocation || !message) {
      setStatus("missing_fields");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/contactapi.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '+1',
          phone: '',
          desiredLocation: '',
          message: ''
        });
      } else {
        throw new Error(result.message || "Server Error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <>

      <Helmet>
        <title>Get In Touch With Us | Best Indian Restaurant In USA, UK & Canada
        </title>
        <meta
          name="description"
          content="Contact Us For Any Queries & Learn More About Our Menu For The Best Indian Street Food | Indian Restaurant In Queens | Indian Food Near Me | Indian Restaurant In Chantilly | Indian Egg Restaurant Near Me"
        />
      </Helmet>

      <NavBar />

      <section className='hir-container'>
        <img src="./contact.png" alt="Contact Banner" />
      </section>




      <div className="container marghj">
        <div className="row align-items-center justify-content-center formtop">
          <div className="col-md-8 formtopx">
            <form onSubmit={handleSubmit} noValidate>
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <input
                    type="text"
                    name="firstName"
                    className={`form-control ${status === 'missing_fields' && !formData.firstName ? 'is-invalid' : ''}`}
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-sm-6 mb-3">
                  <input
                    type="text"
                    name="lastName"
                    className={`form-control ${status === 'missing_fields' && !formData.lastName ? 'is-invalid' : ''}`}
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className={`form-control ${status === 'missing_fields' && !formData.email ? 'is-invalid' : ''}`}
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <div className="input-group">
                  <select
                    name="countryCode"
                    className="form-select country-code-select"
                    style={{ maxWidth: '80px' }}
                    value={formData.countryCode}
                    onChange={handleChange}
                  >
                    {countryCodes.map((item) => (
                      <option key={item.code} value={item.code}>
                        {item.code}
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    name="phone"
                    className={`form-control ${status === 'missing_fields' && !formData.phone ? 'is-invalid' : ''}`}
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group mb-3">
                <label className="mb-1">Contact Location(s)</label>
                <select
                  name="desiredLocation"
                  className={`form-control ${status === 'missing_fields' && !formData.desiredLocation ? 'is-invalid' : ''}`}
                  value={formData.desiredLocation}
                  onChange={handleChange}
                  style={{ border: "var(--bs-border-width) solid var(--bs-border-color)" }}
                  required
                >
                  <option value="">-- Select Location --</option>
                  {locations.map((loc, i) => (
                    <option key={i} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <textarea
                  className={`form-control ${status === 'missing_fields' && !formData.message ? 'is-invalid' : ''}`}
                  rows="4"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              <div className="mt-3">
                {status === "missing_fields" && (
                  <div className="alert alert-warning">⚠️ All fields are required. Please fill them out.</div>
                )}
                {status === "success" && (
                  <div className="alert alert-success">✅ Message sent successfully!</div>
                )}
                {status === "error" && (
                  <div className="alert alert-danger">❌ Failed to send. Please try again.</div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <section>
        <Location2 />
      </section>
    </>
  );
}

export default Contact;
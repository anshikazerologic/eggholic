import "./franchising.css";
import "./contact.css";
import "../components/HiringForm.css";
import FranchiseForm from "./FranchiseForm"
import NavBar from "../components/Navbar";
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import './Hiring.css';


export default function Franchising() {

    useEffect(() => {
        // Signal to the prerenderer that the Menu page is fully loaded
        const timer = setTimeout(() => {
            console.log("Menu SEO Tags injected - Dispatching render-event");
            document.dispatchEvent(new Event('render-event'));
        }, 1000); 

        return () => clearTimeout(timer);
    }, []);

  return (
    <>

      <NavBar />
      <div className="hir-container">
        <img src="./FRANCHISING PAGE.png" alt="FRANCHISING"/>
      </div>


      <Helmet>
        <title>Invest In Our Indian Street Food Restaurant Franchise | Eggholic
        </title>
        <meta
          name="description"
          content="Become A Part Of Our EggHolic Indian Street Food Franchising Family in USA & Canada | Indian Restaurant Near Me | Indian Food Near Me | Indian Restaurant In Brampton | Indian Egg Restaurant Near Me | Indian Street Food In Brampton"
        />
      </Helmet>


      <section className="ghk-container">
        <div className="ghk-wrapper">

          {/* Text Content Column */}
          <div className="ghk-content-col">
            <h1 className="ghk-title">
              Eggs-Elling Beyond <br className="ghk-hide-mobile" /> The Map
            </h1>

            <div className="ghk-description">
              <p className="ghk-text">
                Eggholic is expanding and we are on the lookout for driven and exceptional
                franchise partners. We have brought the unique flavors of street styled eggs
                of India to the United States.
              </p>
              <p className="ghk-text">
                Since opening our first location in 2018, we have been immersing our patrons
                in authentic Indian flavor. Whether our customers are eggeterians,
                vegetarians, or chicken lovers, we have an option for all! We strive to ensure
                that our customers are receiving the best, safest, and most efficient
                experience when dining with us. For us at Eggholic, along with flavor, our
                customers come first.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="ghk-image-col">
            <div className="ghk-image-frame">
              <img
                src="./Background+Border.png"
                alt="Indian street style sandwich"
                className="ghk-main-img"
              />
            </div>
          </div>

        </div>
      </section>


      <FranchiseForm />

    </>
  )
}
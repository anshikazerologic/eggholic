import MenuChart from '../components/MenuChart';
import MenuComponent from '../components/MenuComponent';
import NavBar from '../components/Navbar';

import { Link } from 'react-router-dom';
import { useRef, useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import './Catering.css';

import '../components/FoodMenu.css';
import '../components/Bite.css';

import MoonCatering from '../components/MoonCatering';
import PopMeModal from '../components/PopMeModal';

export default function Catering() {

    const [isModalOpen, setIsModalOpen] = useState(false);

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

            <Helmet>
                <title>Indian Restaurant Catering Services in USA and Canada | Eggholic
                </title>
                <meta
                    name="description"
                    content="Eggholic is an authentic Indian Restaurant Catering services provided in the USA and Canada. Book your catering today!"
                />
            </Helmet>

            <NavBar />

            <div className="catering-cx">
                <img src='/Catering-new2.svg' alt='Eggholic catering'/>
            </div>

            <div className="cxz-toggle-container mobile-mrg desktop-ct">
                <div className="cxz-toggle-wrapper shadow-sm">
                    {/* Locations Link */}
                    <NavLink
                        to="/menu"
                        className={
                            "cxz-toggle-item "}
                    >
                        <span>
                            Menu
                        </span>
                    </NavLink>

                    {/* Catering Link */}
                    <NavLink
                        to="/catering"
                        className="cxz-toggle-item cxz-active">
                        <span>Catering</span>
                    </NavLink>

                </div>
            </div>


            <div className="Catering">


                <img src="/tt.svg" className='kjhs' alt='Eggholic US'/>
                {/* 
                <section className='catering-cd'>

                    <img src='./CLASSIC.svg' />

                    <div className='cateringBox'>
                        <li>1x Appetizer </li>
                        <li>2x Entrees (2 Curries)</li>
                        <li>1x Bread/Roti/Naan </li>
                        <li>1x Beverage </li>
                        <li>1x Dessert </li>

                    </div>

                    <div className='price-p'>
                        $15/PERSON

                        <div className="lkjo">
                            (Minimum 15 people)
                        </div>
                    </div>


                    <img src='./GRAND.svg' />

                    <div className='cateringBox-2'>
                        <li>2x Appetizer </li>
                        <li>3x Entrees (3 Curries)</li>
                        <li>1x Bread/Roti/Naan </li>
                        <li>1x Beverage </li>
                        <li>1x Dessert </li>

                    </div>

                    <div className='price-p-2'>
                        $18/PERSON

                        <div className="lkjo">
                            (Minimum 15 people)
                        </div>
                    </div>
                    <img src='./SIGNATURE.svg' />


                    <div className='cateringBox-3'>
                        <li>3x Appetizer </li>
                        <li>4x Entrees (3 Curries + 1 Rice)</li>
                        <li>1x Bread/Roti/Naan </li>
                        <li>1x Beverage </li>
                        <li>1x Dessert </li>

                    </div>

                    <div className='price-p-3'>
                        $22/PERSON

                        <div className="lkjo">
                            (Minimum 15 people)
                        </div>
                    </div>

                </section> */}


                {/* <MoonCatering /> */}

                <div className="lkjl">
                    <a href='https://www.ezcater.com/brand/pvt/eggholic'>
                        <button class="mx-menu-btn"><span> Order Online</span></button>
                    </a>


                    <button
                        className="mx-menu-btn mnjkjo"
                        onClick={() => setIsModalOpen(true)}
                    >
                        <span> Phone Order</span>
                    </button>

                    {/* 3. Place the Modal component and pass the props */}
                    <PopMeModal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    />




                </div>

                <MenuComponent />

                <MenuChart />
            </div>
        </>
    )
}
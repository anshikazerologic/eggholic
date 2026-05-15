import FoodMenu from '../components/Foodmenu';
import NavBar from '../components/Navbar';
import './menu.css';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';

export default function Menu() {

    useEffect(() => {
        // Signal to the prerenderer that the Menu page is fully loaded
        const timer = setTimeout(() => {
            console.log("Menu SEO Tags injected - Dispatching render-event");
            document.dispatchEvent(new Event('render-event'));
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Helmet>
                <title> Indian Street Food Restaurant Menu | Eggholic</title>
                <meta
                    name="description"
                    content="Check out Eggholic's menu! Enjoy our authentic Indian street food dishes in the USA and Canada. Visit our website now and get in touch today!"
                />
            </Helmet>

            <NavBar />



            <div className="Menu-dx">
                <img src='/menu-new.svg' className='max-css' alt='Eggholic menu'/>
                <section className='menuFood'>
                    <FoodMenu />
                </section>
            </div>
        </>
    )
}
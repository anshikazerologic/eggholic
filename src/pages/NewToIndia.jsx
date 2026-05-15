import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavBar from '../components/Navbar';
import './BlogPage.css';

const NewToIndia = () => {
    return (
        <HelmetProvider>
            <NavBar />

            {/* SEO Meta Tags using Helmet */}
            <Helmet>
                <title>Best Indian Food Dishes | Beginner Guide</title>
                <meta name="description" content="Discover the best Indian dishes to try for the first time, including curries, rice dishes, egg specialties, and popular street foods." />
                <link rel="canonical" href="https://eggholic.com/news/best-indian-dishes-for-first-time/" />
            </Helmet>

            <div className="pop-blog-wrapper">
                {/* Top Cover Image */}
                <img
                    src="/Card 1.png"
                    alt="Best Indian Food Dishes for Beginners"
                    className="pop-cover-image"
                />

                {/* Main Content Container (1300px centered) */}
                <div className="pop-container">
                    <header className="pop-header">
                        <h1 className="pop-main-title">New to Indian Food? Start with These Best Indian Dishes</h1>
                        <h2 className="pop-sub-title">A Beginner's Guide to Exploring Authentic Flavors</h2>
                    </header>

                    <article className="pop-content-section">
                        <p className="pop-text">
                            Indian food stands out for its rich flavors, wide range of ingredients, and many cooking styles. If you’re new to Indian cuisine, the options might seem overwhelming at first. There’s so much to try, from curries and rice dishes to street snacks and grilled foods. Beginning with popular, well-loved dishes can make things easier. These basics let you experience key flavors and cooking methods without being too strong for first-timers.
                        </p>

                        <h3 className="pop-heading">Why Starting Simple Helps</h3>
                        <p className="pop-text">
                            Indian food uses many spices, textures, and cooking styles. Starting with familiar dishes helps you feel more comfortable and learn what you like. Many beginner dishes use ingredients you already know, like rice, eggs, lentils, or vegetables, with just the right amount of seasoning. These meals are tasty but not too spicy, which makes them great for people trying Indian food for the first time.
                        </p>

                        <h3 className="pop-heading">Must-Try Indian Dishes</h3>
                        <p className="pop-text">
                            Here are some well-known dishes that are a great way to start exploring Indian food:
                        </p>
                        <ul className="pop-list">
                            <li className="pop-list-item">Mild curries made with tomato, onion, or butter bases</li>
                            <li className="pop-list-item">Rice dishes such as biryani or vegetable pulao</li>
                            <li className="pop-list-item">Lentil preparations like dal</li>
                            <li className="pop-list-item">Egg-based dishes including egg curry or spiced scrambled eggs</li>
                            <li className="pop-list-item">Grilled or roasted items seasoned with spices</li>
                            <li className="pop-list-item">Street-style snacks such as chaat or simple wraps</li>
                        </ul>
                        <p className="pop-text">
                            These dishes show the main techniques used in Indian cooking. They highlight how spices are added in layers, how grains go with proteins, and how different textures make each meal interesting.
                        </p>

                        <h3 className="pop-heading">Understanding Flavor Profiles</h3>
                        <p className="pop-text">
                            People often think Indian food is always spicy, but that’s not true. Many dishes are more about aroma than heat. Creamy or tomato-based curries are usually mild and a bit sweet, while masala dishes have stronger, savory flavors. Rice helps balance out bold tastes. Egg and lentil dishes add protein and are usually mild, so they’re easy to like.
                        </p>

                        <h3 className="pop-heading">Why These Dishes Work for Beginners</h3>
                        <p className="pop-text">
                            Indian dishes for beginners often use ingredients you already know and mild spices. Rice is a simple base, and lentils or eggs make the meal filling and comforting. Mild curries let you try new spice mixes without too much heat. This way, you can get used to new flavors step by step.
                        </p>
                        <p className="pop-text">
                            These dishes also show how flexible Indian cooking can be. You can adjust the spice level or choose dishes that fit your diet. Whether you like vegetarian meals or want more protein, there are plenty of easy options to try.
                        </p>

                        <h3 className="pop-heading">Exploring Gradually</h3>
                        <p className="pop-text">
                            After you get used to the basic dishes, you can start trying foods from different parts of India. Each region has its own spices, grains, and ways of cooking. Some places use a lot of coconut and rice, while others are known for wheat breads and rich gravies. Trying new dishes little by little helps you enjoy and understand these differences.
                        </p>
                        <p className="pop-text">
                            It also helps to try different textures. You can have curry with rice, add a dry dish, or taste a street snack. This way, you get to enjoy many parts of Indian food in one meal.
                        </p>

                        <h3 className="pop-heading">Final Thoughts</h3>
                        <p className="pop-text">
                            Trying popular Indian dishes first is a great way to explore the food without feeling lost. Mild curries, rice, lentils, and egg dishes give you a good start with both flavor and cooking style. As you get more comfortable, you can try regional dishes and stronger spices. Indian food has so much variety, so you’ll always find something new to enjoy.
                        </p>
                    </article>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default NewToIndia;
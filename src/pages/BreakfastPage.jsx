import React from 'react';
import './BlogPage.css';
import NavBar from '../components/Navbar';

const BreakfastPage = () => {
    return (
       <>
       <NavBar/>

        <div className="pop-blog-wrapper">
            {/* Top Cover Image - Breakfast themed */}
            <img
                src="/egg blog spread 2.jpg"
                alt="Indian Breakfast Spread"
                className="pop-cover-image"
            />

            {/* Main Content Container (1300px centered) */}
            <div className="pop-container">
                <header className="pop-header">
                    <h1 className="pop-main-title">Indian Breakfast Food: Why Savory Mornings Are Healthier and More Satisfying</h1>
                    <h2 className="pop-sub-title">Indian Breakfast Food: Why Savory Mornings Make Sense</h2>
                </header>

                <article className="pop-content-section">
                    <p className="pop-text">
                        In the United States, Indian breakfast rarely gets its due. Most people picture Indian food 
                        as a dinner affair, with simmering gravies, fragrant rice, and leisurely meals. Yet after 
                        a late morning at Eggholic, I realized that an Indian breakfast might be the most 
                        practical and deeply satisfying way to greet the day.
                    </p>

                    <p className="pop-text">
                        A savory breakfast has a way of anchoring you. Rather than a rush of sugar or a flaky 
                        pastry, you are greeted by warmth and spice. My first bite that morning was eggs folded 
                        into a masala, rich with flavor but never heavy. It filled me up without slowing me down, 
                        the spices acting like a gentle alarm clock. That harmony is the secret behind the appeal 
                        of Indian breakfasts.
                    </p>

                    <h3 className="pop-heading">Protein, Spice, and Sustenance</h3>
                    <p className="pop-text">
                        The bread alongside had just the right chew, sturdy enough to cradle the masala without 
                        turning soggy. Every bite was a small, satisfying world of protein, spice, and comfort. 
                        This meal left me energized, not sleepy, and, compared to the usual sugary breakfasts, 
                        it felt truly sustaining.
                    </p>

                    <h3 className="pop-heading">Flexibility for the Morning Crowd</h3>
                    <p className="pop-text">
                        What struck me most was the menu’s flexibility for the morning crowd. Some dishes offered 
                        a light, quick start, while others invited a slower, brunch-like pace. Wraps were made 
                        for easy on-the-go eating, while masala plates encouraged lingering over each bite. This 
                        variety makes Indian breakfast easy to fit into any American morning.
                    </p>

                    <h3 className="pop-heading">A Social Start to the Day</h3>
                    <p className="pop-text">
                        Glancing around, I saw tables full of sharing: one person with something saucy, another 
                        with something crisp, everyone sampling each plate. The meal felt lively, a far cry from 
                        the stillness of a typical breakfast. Indian breakfast naturally brings energy and 
                        movement to the table.
                    </p>

                    <h3 className="pop-heading">Final Thoughts</h3>
                    <p className="pop-text">
                        As more people seek out protein-packed breakfasts instead of sugary starts, savory Indian 
                        dishes seem like a natural fit. They are layered, comforting, and full of energy. After 
                        my visit, it was clear: Indian breakfast deserves a bigger spotlight in the USA. It is 
                        not a passing trend, but a truly practical and delicious way to begin the day.
                    </p>
                </article>
            </div>
        </div>
       </>
    );
};

export default BreakfastPage;
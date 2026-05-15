import React from 'react';
import './BlogPage.css';
import NavBar from '../components/Navbar';

const TrendsUsa = () => {
    return (
       <>

       <NavBar/>

        <div className="pop-blog-wrapper">
            {/* Top Cover Image - Updated for USA Food Trends theme */}
            <img
                src="/egg blog why indian food is getting popular.png"
                alt="Indian Dining in the USA"
                className="pop-cover-image"
            />

            {/* Main Content Container (1300px centered) */}
            <div className="pop-container">
                <header className="pop-header">
                    <h1 className="pop-main-title">Popularity of Indian Food in the USA: Trends Driving Its Growth</h1>
                    <h2 className="pop-sub-title">Why Indian Cuisine Keeps Growing in the USA</h2>
                </header>

                <article className="pop-content-section">
                    <p className="pop-text">
                        Indian food didn’t become popular in the United States overnight. Its rise was gradual, thanks to
                        neighborhood restaurants, late-night takeout, and diners seeking something deeper than their usual
                        meals. In recent years, though, the growth seems more deliberate. Indian cuisine is no longer just
                        available; it’s expanding, changing, and showing up in new ways that fit how people eat now.
                    </p>

                    <p className="pop-text">
                        I was thinking about this during a recent visit to Eggholic. What struck me wasn’t just the flavor,
                        but the rhythm of the place. People weren’t ordering one large entrée and settling in for a long meal.
                        They were ordering multiple dishes, trying different textures, sharing plates, and returning to the
                        counter for something else. That kind of movement says a lot about where Indian food is headed in
                        the USA. It’s becoming more interactive and more suited to everyday dining.
                    </p>

                    <h3 className="pop-heading">Layers of Flavor Beyond Heat</h3>
                    <p className="pop-text">
                        Indian food is known for its spices. But it’s not just about heat; it’s about layers of flavor.
                        In a good masala dish, you taste more than just chili. You notice garlic, cumin, onion, tomato,
                        and a warmth that builds slowly. The spice doesn’t come all at once; it develops over time.
                        That’s what makes food feel light and keeps you wanting more.
                    </p>

                    <h3 className="pop-heading">Variety and Adaptability</h3>
                    <p className="pop-text">
                        Another reason Indian food is becoming more popular is its variety. One menu can offer rice dishes,
                        wraps, and rich gravies without repeating the same flavors. You might have something bold and
                        saucy one moment, then enjoy a quick, comforting wrap the next. This range makes it easy for
                        people to return often rather than save Indian food for special occasions.
                    </p>

                    <p className="pop-text">
                        The egg-based dishes I tried had a distinct warmth. They weren’t delicate or overly refined. They
                        felt like the kind of food meant to be eaten quickly, with enough spice to wake you up but enough
                        balance to keep you grounded. That’s the kind of dish that translates well in the American dining
                        scene right now. People want flavor that feels immediate.
                    </p>

                    <h3 className="pop-heading">The Social Dining Experience</h3>
                    <p className="pop-text">
                        Indian food is also popular because it’s so adaptable. It can be casual or complex, quick or slow,
                        meant for sharing or for one person. During my visit, I saw groups sampling a little of everything
                        — a wrap here, a rice plate there, a masala dish in the middle. Indian food works best this way,
                        not as a single main dish but as a series of flavors.
                    </p>

                    <h3 className="pop-heading">Easy Access to Regional Flavors</h3>
                    <p className="pop-text">
                        As more restaurants offer street-style menus and regional dishes, Indian food feels less limited.
                        It’s becoming something you can enjoy on a regular weeknight without much planning. This easy
                        access is helping its popularity grow. When people see that Indian food doesn’t have to be
                        formal or heavy, they come back more often.
                    </p>

                    <h3 className="pop-heading">Final Thoughts</h3>
                    <p className="pop-text">
                        As I left, I thought about how much Indian food in the USA has changed. It’s not just something
                        you try once and forget. Now, it’s something you crave and come back to, knowing there’s always
                        a new dish to try. Restaurants that focus on variety and layered spices, like Eggholic, are
                        helping create this new view. They aren’t changing Indian food; they’re just serving it in a
                        way that matches how people like to eat today.
                    </p>
                </article>
            </div>
        </div>
       </>
    );
};

export default TrendsUsa;
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

// Static imports for layout (keep these standard)
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy loaded page components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Hiring = lazy(() => import('./pages/Hiring'));
const Franchising = lazy(() => import('./pages/Franchising'));
const Slangs = lazy(() => import('./pages/Slangs'));
const Menu = lazy(() => import('./pages/Menu'));
const Catering = lazy(() => import('./pages/Catering'));
const Contact = lazy(() => import('./pages/Contact'));
const Location = lazy(() => import('./pages/Location'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const News = lazy(() => import('./pages/News'));

// Lazy loaded News/Blog sub-pages
const NewToIndia = lazy(() => import('./pages/NewToIndia'));
const Paneer = lazy(() => import('./pages/Paneer'));
const HeavyFood = lazy(() => import('./pages/HeavyFood'));
const TrendsUsa = lazy(() => import('./pages/TrendsUsa'));
const Popularity = lazy(() => import('./pages/Popularity'));
const BreakfastPage = lazy(() => import('./pages/BreakfastPage'));
const PopularitySpice = lazy(() => import('./pages/PopularitySpice'));
const HealthyBreakfast = lazy(() => import('./pages/HealthyBreakfast'));
const PopularityDishes = lazy(() => import('./pages/PopularityDishes'));
const GlutenFreeIndian = lazy(() => import('./pages/GlutenFreeIndian'));
const IndianMenuGuide = lazy(() => import('./pages/IndianMenuGuide'));
const IndianFoodGrowth = lazy(() => import('./pages/IndianFoodGrowth'));
const IndianBreakfast = lazy(() => import('./pages/IndianBreakfast'));
const IndianFoodBooming = lazy(() => import('./pages/IndianFoodBooming'));
const StreetStories = lazy(() => import('./pages/StreetStories'));
const GlobalIndianFood = lazy(() => import('./pages/GlobalIndianFood'));
const StreetFoodCatering = lazy(() => import('./pages/StreetFoodCatering'));
const IndianStreetFood = lazy(() => import('./pages/IndianStreetFood'));
const IndianFoodNearMe = lazy(() => import('./pages/IndianFoodNearMe'));
const IndianFoodFindingGuide = lazy(() => import('./pages/IndianFoodFindingGuide'));
const IndianCateringHome = lazy(() => import('./pages/IndianCateringHome'));
const IndianFoodHealthGuide = lazy(() => import('./pages/IndianFoodHealthGuide'));

import EggLoader from './components/EggLoader';

export default function App() {
  // Your existing prerender logic remains the same
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const timer = setTimeout(() => {
        document.dispatchEvent(new Event('render-event'));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  

  return (
    <div>
      <ScrollToTop />

      <main>
        {/* Suspense handles the "loading" state while the JS chunk is fetched */}
        <Suspense fallback={<div style={{ height: '100vh' }}>

          <EggLoader/>
        </div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<About />} />
            <Route path="/hiring" element={<Hiring />} />
            <Route path="/franchising" element={<Franchising />} />
            <Route path="/menu" element={<Menu />} />
            <Route path='/catering' element={<Catering />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/locations' element={<Location />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/news' element={<News />} />
            
            {/* News Sub-routes */}
            <Route path='/news/best-indian-dishes-for-first-time' element={<NewToIndia />} />
            <Route path='/news/indian-cottage-cheese-paneer' element={<Paneer />} />
            <Route path='/news/indian-appetizers-guide' element={<HeavyFood />} />
            <Route path='/news/indian-food-trends-usa' element={<TrendsUsa />} />
            <Route path='/news/popularity-of-indian-cuisine-usa' element={<Popularity />} />
            <Route path='/news/indian-breakfast-food-savory-mornings' element={<BreakfastPage />} />
            <Route path='/news/popularity-of-indian-food' element={<PopularitySpice />} />
            <Route path='/news/healthy-indian-breakfast-food' element={<HealthyBreakfast />} />
            <Route path='/news/indian-restaurants-usa-popular-dishes' element={<PopularityDishes />} />
            <Route path='/news/gluten-free-indian-food-options' element={<GlutenFreeIndian />} />
            <Route path='/news/how-to-order-from-indian-menu' element={<IndianMenuGuide />} />
            <Route path='/news/growth-of-indian-food-in-usa' element={<IndianFoodGrowth />} />
            <Route path='/news/what-do-indians-eat-for-breakfast' element={<IndianBreakfast />} />
            <Route path='/news/indian-food-restaurant' element={<IndianFoodBooming />} />
            <Route path='/news/indian-breakfast-to-street-food' element={<StreetStories />} />
            <Route path='/news/popularity-of-indian-food-global-appeal' element={<GlobalIndianFood />} />
            <Route path='/news/indian-street-food-catering-group-dining' element={<StreetFoodCatering />} />
            <Route path='/news/why-indian-street-food-is-popular' element={<IndianStreetFood />} />
            <Route path='/news/searching-indian-food-near-me' element={<IndianFoodNearMe />} />
            <Route path='/news/searching-indian-food-near-me-guide' element={<IndianFoodFindingGuide />} />
            <Route path='/news/indian-food-catering-usa' element={<IndianCateringHome />} />
            <Route path='/news/is-indian-food-healthy' element={<IndianFoodHealthGuide />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
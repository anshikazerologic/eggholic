import { useEffect, useState } from 'react';
import Bite from '../components/Bite';
import CookingSection from '../components/CookingSection';
import MenuTabs from '../components/MenuTabs';
import RewardsSection from '../components/RewardsSection';
import OurStory from '../components/OurStory';
import Hop from '../components/Hop.jsx';
import DynamicForm from '../components/DynamicForm.jsx';
import Hall from '../components/Hall.jsx';
import NavBar from '../components/Navbar.jsx';
import ScrollButton from '../components/ScrollButton.jsx';
import MHero from '../components/MHero.jsx';
import ReelsSection from './Reels.jsx';
import MobileMenu from '../components/MobileMenu.jsx';
import useMediaQuery from '../components/useMediaQuery';
import CCarousel from '../components/CCarousel';
import useSplashScreen from './useSplashScreen';
import { Helmet } from 'react-helmet-async';
import FramerRevealText from '../components/FramerRevealText.jsx';

export default function Home() {


  const reelsData = [
    { image: "/1.mp4", title: "Reel Title 1" },
    { image: "/2.mp4", title: "Reel Title 2" },
    { image: "/Video-488.mp4", title: "Reel Title 3" },


  ];

  const slidesData = [
    { image: "/TP app banners 1.jpg", alt : `Order Eggholic online - download the app for exclusive deals and rewards` },
    { image: "/TP app banners 2.jpg" , alt : `Eggholic app banner - earn points and redeem rewards on every order` }

  ];

  const isMobile = useMediaQuery('(max-width: 1025px)');
  const [showDesktopLoader, setShowDesktopLoader] = useState(!isMobile);
  const isDevelopment = false;
  const { isVisible, isFading } = useSplashScreen(500, 2000, 600, isDevelopment);

  useEffect(() => {
    let isMounted = true;

    const timer = setTimeout(() => {
      if (isMounted) {
        console.log("SEO Tags injected - Dispatching render-event");
        document.dispatchEvent(new Event('render-event'));
      }
    }, 2200);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <>


      <Helmet>
        <title>Authentic Indian Restaurant & Indian Street Food in USA
        </title>

        <meta
          name="description"
          content="Experience authentic Indian restaurant flavors and vibrant street food in the USA, offering rich spices, traditional recipes, and unforgettable taste."
        />
      </Helmet>


      <div className="splash-container-x">
        <img
          src="./cover-top.webp"
          alt="Sizzling Indian egg street food dishes served fresh at Eggholic"
          className="splash-image-top-x"
          fetchpriority="high"
          width="980"
          height="280"
          style={{ width: '100%', height: 'auto' }}
        />

        <img
          src="./cover-down.webp"
          alt="Colorful spiced Indian street food spread at Eggholic restaurant"
          className="splash-image-x"
          fetchpriority="high"
          width="850"
          height="500"
          style={{ width: '100%', height: 'auto' }}
        />






        <div className="corner-box top-left">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
            <path d="M17 10.9582C17.3109 7.31444 20.8792 -0.0277562 24.881 4.35388C27.381 7.09126 26.12 9.73299 23.5324 11.6141C22.1445 12.6207 20.2531 12.8302 19.1848 14.142C22.3459 13.7502 27.3241 10.7487 27.9414 16.1825C28.747 23.2969 21.0412 23.3835 17.4378 19.1521C19.4913 17.3211 19.176 12.5797 17 10.9628V10.9582Z" fill="#FAC90E" />
            <path d="M15.7925 10.8297C13.4276 10.3695 10.2166 11.4523 9.56192 13.9833C4.81885 14.4029 -1.60321 6.80981 4.48929 4.11638C8.07887 2.52829 8.48415 4.99615 10.4482 7.22488C8.94287 3.54792 10.7332 -0.729093 15.0131 0.105556C20.5489 1.18383 16.9059 7.54521 15.788 10.8252L15.7925 10.8297Z" fill="#FAC90E" />
            <path d="M16.192 20.0045C17.8354 22.7036 20.6625 25.7243 17.7183 28.6091C14.3709 31.8924 6.96919 29.0076 9.52747 23.6683C9.84401 23.0025 11.6522 20.6068 12.2939 20.4529C13.4299 20.1857 14.7134 20.5887 16.192 20V20.0045Z" fill="#FAC90E" />
            <path d="M9.63607 14.6964C9.54514 16.228 9.86339 18.0885 11 19.1966C8.92228 21.4986 4.76685 23.0031 1.93443 21.2057C-0.957094 19.3678 -0.561555 14.0207 2.81644 13.0747C4.62591 12.5701 7.58564 14.791 9.64062 14.6964H9.63607Z" fill="#FAC90E" />
            <path d="M16.6489 10.1187C16.7088 10.1291 17.6895 10.601 17.7385 10.6373C20.4461 12.4786 20.8384 17.8829 18.2833 19.9627C18.2397 19.999 17.3353 20.4295 17.1937 20.4813C15.3359 21.1556 13.7233 20.694 12.2959 21C12.187 20.0612 10.8577 20.1442 10.6616 19.9627C9.29956 18.6868 8.9182 16.5448 9.02716 14.7814C9.04895 14.4442 8.95634 14.0138 9.02716 13.7441C9.82257 10.8344 13.756 9.58967 16.6489 10.1187Z" fill="#F3EBD2" />
          </svg>
        </div>
        <div className="corner-box top-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
            <path d="M17 10.9582C17.3109 7.31444 20.8792 -0.0277562 24.881 4.35388C27.381 7.09126 26.12 9.73299 23.5324 11.6141C22.1445 12.6207 20.2531 12.8302 19.1848 14.142C22.3459 13.7502 27.3241 10.7487 27.9414 16.1825C28.747 23.2969 21.0412 23.3835 17.4378 19.1521C19.4913 17.3211 19.176 12.5797 17 10.9628V10.9582Z" fill="#FAC90E" />
            <path d="M15.7925 10.8297C13.4276 10.3695 10.2166 11.4523 9.56192 13.9833C4.81885 14.4029 -1.60321 6.80981 4.48929 4.11638C8.07887 2.52829 8.48415 4.99615 10.4482 7.22488C8.94287 3.54792 10.7332 -0.729093 15.0131 0.105556C20.5489 1.18383 16.9059 7.54521 15.788 10.8252L15.7925 10.8297Z" fill="#FAC90E" />
            <path d="M16.192 20.0045C17.8354 22.7036 20.6625 25.7243 17.7183 28.6091C14.3709 31.8924 6.96919 29.0076 9.52747 23.6683C9.84401 23.0025 11.6522 20.6068 12.2939 20.4529C13.4299 20.1857 14.7134 20.5887 16.192 20V20.0045Z" fill="#FAC90E" />
            <path d="M9.63607 14.6964C9.54514 16.228 9.86339 18.0885 11 19.1966C8.92228 21.4986 4.76685 23.0031 1.93443 21.2057C-0.957094 19.3678 -0.561555 14.0207 2.81644 13.0747C4.62591 12.5701 7.58564 14.791 9.64062 14.6964H9.63607Z" fill="#FAC90E" />
            <path d="M16.6489 10.1187C16.7088 10.1291 17.6895 10.601 17.7385 10.6373C20.4461 12.4786 20.8384 17.8829 18.2833 19.9627C18.2397 19.999 17.3353 20.4295 17.1937 20.4813C15.3359 21.1556 13.7233 20.694 12.2959 21C12.187 20.0612 10.8577 20.1442 10.6616 19.9627C9.29956 18.6868 8.9182 16.5448 9.02716 14.7814C9.04895 14.4442 8.95634 14.0138 9.02716 13.7441C9.82257 10.8344 13.756 9.58967 16.6489 10.1187Z" fill="#F3EBD2" />
          </svg>
        </div>
        <div className="corner-box bottom-left">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
            <path d="M17 10.9582C17.3109 7.31444 20.8792 -0.0277562 24.881 4.35388C27.381 7.09126 26.12 9.73299 23.5324 11.6141C22.1445 12.6207 20.2531 12.8302 19.1848 14.142C22.3459 13.7502 27.3241 10.7487 27.9414 16.1825C28.747 23.2969 21.0412 23.3835 17.4378 19.1521C19.4913 17.3211 19.176 12.5797 17 10.9628V10.9582Z" fill="#FAC90E" />
            <path d="M15.7925 10.8297C13.4276 10.3695 10.2166 11.4523 9.56192 13.9833C4.81885 14.4029 -1.60321 6.80981 4.48929 4.11638C8.07887 2.52829 8.48415 4.99615 10.4482 7.22488C8.94287 3.54792 10.7332 -0.729093 15.0131 0.105556C20.5489 1.18383 16.9059 7.54521 15.788 10.8252L15.7925 10.8297Z" fill="#FAC90E" />
            <path d="M16.192 20.0045C17.8354 22.7036 20.6625 25.7243 17.7183 28.6091C14.3709 31.8924 6.96919 29.0076 9.52747 23.6683C9.84401 23.0025 11.6522 20.6068 12.2939 20.4529C13.4299 20.1857 14.7134 20.5887 16.192 20V20.0045Z" fill="#FAC90E" />
            <path d="M9.63607 14.6964C9.54514 16.228 9.86339 18.0885 11 19.1966C8.92228 21.4986 4.76685 23.0031 1.93443 21.2057C-0.957094 19.3678 -0.561555 14.0207 2.81644 13.0747C4.62591 12.5701 7.58564 14.791 9.64062 14.6964H9.63607Z" fill="#FAC90E" />
            <path d="M16.6489 10.1187C16.7088 10.1291 17.6895 10.601 17.7385 10.6373C20.4461 12.4786 20.8384 17.8829 18.2833 19.9627C18.2397 19.999 17.3353 20.4295 17.1937 20.4813C15.3359 21.1556 13.7233 20.694 12.2959 21C12.187 20.0612 10.8577 20.1442 10.6616 19.9627C9.29956 18.6868 8.9182 16.5448 9.02716 14.7814C9.04895 14.4442 8.95634 14.0138 9.02716 13.7441C9.82257 10.8344 13.756 9.58967 16.6489 10.1187Z" fill="#F3EBD2" />
          </svg>
        </div>
        <div className="corner-box bottom-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none">
            <path d="M17 10.9582C17.3109 7.31444 20.8792 -0.0277562 24.881 4.35388C27.381 7.09126 26.12 9.73299 23.5324 11.6141C22.1445 12.6207 20.2531 12.8302 19.1848 14.142C22.3459 13.7502 27.3241 10.7487 27.9414 16.1825C28.747 23.2969 21.0412 23.3835 17.4378 19.1521C19.4913 17.3211 19.176 12.5797 17 10.9628V10.9582Z" fill="#FAC90E" />
            <path d="M15.7925 10.8297C13.4276 10.3695 10.2166 11.4523 9.56192 13.9833C4.81885 14.4029 -1.60321 6.80981 4.48929 4.11638C8.07887 2.52829 8.48415 4.99615 10.4482 7.22488C8.94287 3.54792 10.7332 -0.729093 15.0131 0.105556C20.5489 1.18383 16.9059 7.54521 15.788 10.8252L15.7925 10.8297Z" fill="#FAC90E" />
            <path d="M16.192 20.0045C17.8354 22.7036 20.6625 25.7243 17.7183 28.6091C14.3709 31.8924 6.96919 29.0076 9.52747 23.6683C9.84401 23.0025 11.6522 20.6068 12.2939 20.4529C13.4299 20.1857 14.7134 20.5887 16.192 20V20.0045Z" fill="#FAC90E" />
            <path d="M9.63607 14.6964C9.54514 16.228 9.86339 18.0885 11 19.1966C8.92228 21.4986 4.76685 23.0031 1.93443 21.2057C-0.957094 19.3678 -0.561555 14.0207 2.81644 13.0747C4.62591 12.5701 7.58564 14.791 9.64062 14.6964H9.63607Z" fill="#FAC90E" />
            <path d="M16.6489 10.1187C16.7088 10.1291 17.6895 10.601 17.7385 10.6373C20.4461 12.4786 20.8384 17.8829 18.2833 19.9627C18.2397 19.999 17.3353 20.4295 17.1937 20.4813C15.3359 21.1556 13.7233 20.694 12.2959 21C12.187 20.0612 10.8577 20.1442 10.6616 19.9627C9.29956 18.6868 8.9182 16.5448 9.02716 14.7814C9.04895 14.4442 8.95634 14.0138 9.02716 13.7441C9.82257 10.8344 13.756 9.58967 16.6489 10.1187Z" fill="#F3EBD2" />
          </svg>
        </div>

        <div className='border-top'></div>
        <div className='border-down'></div>
        <div className='border-left'></div>
        <div className='border-right'></div>

        <ScrollButton />
      </div>


      {isVisible && (
        <div className={`splash-wrapper ${isFading ? 'fade-out' : ''}`}>
          <img
            src="/Splash.png"
            className="splash-image"
            alt="App Logo"
            fetchpriority="high"
            width="780"
            height="500"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      )}



      <NavBar />



      <div className="crsl">
        <CCarousel slides={slidesData} duration={3000} />
      </div>

      {isMobile ? (
        <MobileMenu />
      ) : (
        ""
      )}



      <Bite />

      <RewardsSection />

      <Hall />

      <OurStory />
      <CookingSection />
      <ReelsSection reels={reelsData} />

      <Hop />


    </>
  );
}
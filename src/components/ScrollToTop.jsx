import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // Yeh hook current URL ki location track karta hai
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi pathname badlega, window top par scroll ho jayegi
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Yeh component kuch render nahi karega
};

export default ScrollToTop;
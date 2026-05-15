import { useState, useEffect } from 'react';

const useSplashScreen = (breakpoint = 500, stayTime = 1200, fadeDuration = 600, isDev = false) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // --- DEV MODE LOGIC ---
    if (isDev) {
      setIsVisible(true);
      setIsFading(false); // Keep it solid
      return; // Stop here, don't start timers
    }

    const hasSeenSplash = sessionStorage.getItem('splash_shown');
    const isMobile = window.innerWidth < breakpoint;

    if (isMobile && !hasSeenSplash) {
      setIsVisible(true);

      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, stayTime);

      const removeTimer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('splash_shown', 'true');
      }, stayTime + fadeDuration);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
      };
    }
  }, [breakpoint, stayTime, fadeDuration, isDev]);

  return { isVisible, isFading };
};

export default useSplashScreen;
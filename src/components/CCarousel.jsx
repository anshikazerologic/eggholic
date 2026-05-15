
import { useState, useEffect, useRef } from "react";
import "./CCarousel.css";

export default function CCarousel({ slides, duration = 3000 }) {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  // Auto slide effect
  useEffect(() => {
    startSlide();
    return () => stopSlide();
  }, [current]);

  const startSlide = () => {
    stopSlide();
    slideInterval.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, duration);
  };

  const stopSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  return (
    <a href="https://order.eggholic.com/">
       <div className="cc-carousel">
      <div
        className="cc-slides"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="cc-slide" key={index}>
            <img src={slide.image} alt={slide.alt} fetchpriority="high" width="410" height="185"/>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="cc-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`cc-dot ${current === index ? "cc-active" : ""}`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
    </a>
  );
}

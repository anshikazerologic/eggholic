

const ScrollButton = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button onClick={handleScroll} className="scroll-container">
      <span className="scroll-text">Scroll Down</span>
      {/* This span becomes the arrow using CSS */}
      <span className="pure-css-arrow"></span>
    </button>
  );
};

export default ScrollButton;
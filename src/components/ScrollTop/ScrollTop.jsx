import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";


const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setVisible(scrolled > 100);
    };
    toggleVisible();
    window.addEventListener("scroll", toggleVisible, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="scrollTop" onClick={scrollToTop} aria-label="Scroll to top">
      <FaArrowUp className="arrowUp" />
    </div>
  );
};

export default ScrollTop;

import React, { useEffect, useRef, useState } from "react";
import "./Reveal.css";

// Wraps a section and fades/slides it into view the first time it enters the viewport.
const Reveal = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  // Once the entrance animation finishes we drop the transform entirely so
  // that any position:fixed descendants (e.g. the scroll-to-top button)
  // are not trapped by a transformed ancestor's containing block.
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${settled ? "reveal--settled" : ""}`}
      onTransitionEnd={() => visible && setSettled(true)}
    >
      {children}
    </div>
  );
};

export default Reveal;

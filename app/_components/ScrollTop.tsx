"use client";
import React, { useState, useEffect } from "react";
import { GoArrowUp } from "react-icons/go";

const ScrollTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white shadow-lg hover:bg-slate-100 transition duration-300 text-olive-star"
        >
          <GoArrowUp size={25} />
        </button>
      )}
    </div>
  );
};

export default ScrollTop;

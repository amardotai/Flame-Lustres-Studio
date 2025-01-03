import React from "react";
import { useState, useEffect } from "react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Hero() {
  const [fontSize, setFontSize] = useState(3);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate new font size based on scroll position
      const newFontSize = 3 - window.scrollY / 40;

      // Update font size state
      setFontSize(newFontSize);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-im">
      <h1 style={{ fontSize: `${fontSize}rem` }}>Flame Lustress</h1>
      <p>Studio</p>
    </div>
  );
}

export default Hero;

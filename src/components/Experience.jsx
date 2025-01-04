import React from "react";
import { useState, useEffect, useRef } from "react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Experience(props) {
  const [fontSize, setFontSize] = useState(3);
  const [opac, setOpac] = useState(0);
  const [z, setZ] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate new font size based on scroll position
      let newFontSize;
      if (window.scrollY < window.innerHeight) {
        newFontSize = 3;
      } else {
        newFontSize = Math.max(
          1,
          3 - (window.scrollY - window.innerHeight) / 80
        );
      }
      const newOpac = window.scrollY / window.innerHeight + 0.5;
      const newZ = Math.round(window.scrollY / window.innerHeight + 0.2);

      // Update font size state
      setFontSize(newFontSize);
      setOpac(newOpac);
      setZ(newZ);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="herobox"
      style={{ backgroundImage: `url("/src/assets/Images/${props.bi}")` }}
    >
      <p>{props.p1}</p>
      <h1 style={{ fontSize: `${fontSize}rem`, zIndex: `${z}` }}>{props.h}</h1>
      <p className="hero-intro" style={{ opacity: `${opac}` }}>
        {props.p2}
      </p>
    </div>
  );
}

export default Experience;

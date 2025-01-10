import React from "react";
import { useState, useEffect } from "react";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Container(props) {
  const [fontSize, setFontSize] = useState(3);
  const [z, setZ] = useState(0);
  let containerClass;
  if (props.bi === undefined) {
    containerClass = "container-box-pattern";
  } else {
    containerClass = "container-box";
  }

  useEffect(() => {
    const handleScroll = () => {
      // Calculate new font size based on scroll position
      let newFontSize;
      if (window.scrollY < window.innerHeight * props.cIndex) {
        newFontSize = 3;
      } else {
        newFontSize = Math.max(
          1,
          3 - (window.scrollY - window.innerHeight * props.cIndex) / 80
        );
      }
      const newZ = Math.round(window.scrollY / window.innerHeight + 0.2);

      // Update font size state
      setFontSize(newFontSize);
      setZ(newZ);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-box">
      <p>{props.p1}</p>
      <h1 style={{ fontSize: `${fontSize}rem`, zIndex: `${z}` }}>{props.h}</h1>
      <p className="container-intro">{props.p2}</p>
    </div>
  );
}

export default Container;

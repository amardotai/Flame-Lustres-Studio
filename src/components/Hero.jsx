import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";

function Hero(props) {
  const titles = [
    "/Video/video1",
    "/Video/video2",
    "/Video/video3",
    "/Video/video4",
    "/Video/video5",
  ];
  const [fontSize, setFontSize] = useState(3);
  const [opac, setOpac] = useState(0);
  const [z, setZ] = useState(0);
  const [pos, setPos] = useState("relative");
  const [wrap, setWrap] = useState("wrap");

  useEffect(() => {
    const handleScroll = () => {
      // Calculate new font size based on scroll position
      let newFontSize;
      let newPos;
      let newWrap;
      if (window.scrollY < window.innerHeight * props.heroIndex) {
        newFontSize = 3;
      } else {
        newFontSize = Math.max(
          1,
          3 - (window.scrollY - window.innerHeight * props.heroIndex) / 80
        );
      }
      const newOpac = Math.min(1, window.scrollY / window.innerHeight + 0.5);
      const newZ = Math.min(
        1,
        Math.round(window.scrollY / window.innerHeight + 0.2)
      );
      if (window.scrollY > window.innerHeight * 0.35) {
        newPos = "fixed";
        newWrap = "nowrap";
      } else {
        newPos = "relative";
        newWrap = "wrap";
      }

      // Update font size state
      setWrap(newWrap);
      setPos(newPos);
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
      style={{ backgroundImage: `url("Images/${props.bi}")` }}
    >
      <p>{props.p1}</p>
      <h1
        style={{
          fontSize: `${fontSize}rem`,
          zIndex: `${z}`,
          position: `${pos}`,
        }}
        className={wrap}
      >
        {props.h}
      </h1>
      <Carousel
        height="50vh"
        width="100vw"
        cList={titles}
        v={true}
        extension="mp4"
      ></Carousel>
    </div>
  );
}

export default Hero;

// top: 0;
// left: 50%;
// transform: translate(-50%,-50%);

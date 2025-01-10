import React, { useState } from "react";
import Card from "./Card";
function Carousel(props) {
  let c = "card";
  let cSide = "card-sider";
  if (props.v == true) {
    c = "card-video";
    cSide = "card-video-sider";
  }

  const titles = props.cList;

  const [currentIndex, setCurrentIndex] = useState(0);

  function next() {
    setCurrentIndex((prevState) => (prevState + 1) % titles.length);
  }

  function prev() {
    if (currentIndex === 0) {
      setCurrentIndex(titles.length - 1);
    } else {
      setCurrentIndex((prevState) => prevState - 1);
    }
  }
  function handlePrev(i) {
    if (i === 0) {
      return titles.length - 1;
    } else {
      return i - 1;
    }
  }
  return (
    <div
      className="carousel"
      style={{ height: `${props.height}`, width: `${props.width}` }}
    >
      <div
        onClick={prev}
        className="holder"
        style={{
          width: "15%",
          height: "50%",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(/Images/Carousel/${
            titles[handlePrev(currentIndex)]
          }.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Card
          height="100%"
          width="100%"
          cn={cSide}
          title={titles[handlePrev(currentIndex)]}
          v={props.v}
        ></Card>
      </div>
      <Card
        height="50%"
        width="50%"
        cn={c}
        bi={`/Images${titles[currentIndex]}.${props.extension}`}
        title={titles[currentIndex]}
        v={props.v}
      ></Card>
      <div
        onClick={next}
        className="holder"
        style={{
          width: "15%",
          height: "50%",
          display: "flex",
          alignItems: "center",
          backgroundImage: `url(/Images/Carousel/${
            titles[(currentIndex + 1) % titles.length]
          }.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Card
          height="100%"
          width="100%"
          cn={cSide}
          title={titles[(currentIndex + 1) % titles.length]}
          v={props.v}
        ></Card>
      </div>
    </div>
  );
}

export default Carousel;

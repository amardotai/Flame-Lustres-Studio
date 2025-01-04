import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Textblock from "./components/Textblock";
import "./App.css";

function App() {
  const slides = [
    {
      url: "/src/assets/Images/Carousel/carousel1.webp",
      title: "Lorem",
    },
    {
      url: "/src/assets/Images/Carousel/carousel2.webp",
      title: "Ipsum",
    },
    {
      url: "/src/assets/Images/Carousel/carousel3.webp",
      title: "Dolor",
    },
    {
      url: "/src/assets/Images/Carousel/carousel4.webp",
      title: "Sit",
    },
    {
      url: "/src/assets/Images/Carousel/carousel5.webp",
      title: "Amet",
    },
  ];
  return (
    <>
      <Header></Header>
      <Hero
        heroIndex={0}
        p1="Studio"
        h="Flame Lustres"
        p2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam odit aliquid illum laboriosam commodi esse asperiores quibusdam iusto perferendis tempora modi iure molestias quas vel, eius quis eligendi, cupiditate consequuntur."
        bi="image.png"
      ></Hero>
      <Experience
        p1="Our"
        h="Experience"
        p2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas recusandae dolorem facere? Atque natus minima eius aperiam quo voluptatibus suscipit maiores quasi. Necessitatibus saepe delectus veniam, nesciunt deserunt hic et, iste nemo consequatur nostrum sit quaerat explicabo odit aspernatur ab quo magni adipisci tempora amet quia dolorum voluptate. Et."
        bi="image2.jpg"
      ></Experience>
      <Textblock></Textblock>
      <Textblock></Textblock>
      <Textblock></Textblock>
      <Textblock></Textblock>
      <Textblock></Textblock>
      <Textblock></Textblock>
    </>
  );
}
export default App;

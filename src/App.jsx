import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Container from "./components/Container";
import Carousel from "./components/Carousel";
import Card from "./components/Card";
function App() {
  const titles = [
    "/Carousel/carousel1",
    "/Carousel/carousel2",
    "/Carousel/carousel3",
    "/Carousel/carousel4",
    "/Carousel/carousel5",
  ];
  return (
    <>
      <Header></Header>
      <Hero
        heroIndex={0}
        p1="Studio"
        h="Flame Lustres"
        p2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam odit aliquid illum laboriosam commodi esse asperiores quibusdam iusto perferendis tempora modi iure molestias quas vel, eius quis eligendi, cupiditate consequuntur."
        bi="image3.webp"
      ></Hero>
      <Container
        cIndex={1}
        p1="Our"
        h="Experience"
        p2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas recusandae dolorem facere? Atque natus minima eius aperiam quo voluptatibus suscipit maiores quasi. Necessitatibus saepe delectus veniam, nesciunt deserunt hic et, iste nemo consequatur nostrum sit quaerat explicabo odit aspernatur ab quo magni adipisci tempora amet quia dolorum voluptate. Et."
      ></Container>
      <Carousel
        height="100vh"
        width="100vw"
        cList={titles}
        extension="webp"
      ></Carousel>
      <Card
        v={true}
        bi="/Images/Video-479.mp4"
        height="200px"
        width="100px"
        cn="card-video"
      ></Card>
      {/* <video src="/Images/Video-479.mp4" autoPlay muted></video> */}
    </>
  );
}

export default App;

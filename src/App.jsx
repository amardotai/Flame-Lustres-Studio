import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Textblock from "./components/Textblock";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Textblock></Textblock>
    </>
  );
}

export default App;

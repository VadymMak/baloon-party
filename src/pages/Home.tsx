import React from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import About from "../components/About";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
    </>
  );
};

export default Home;

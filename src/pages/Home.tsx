// src/pages/Home.tsx
import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import About from "../components/About";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;

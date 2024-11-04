// src/pages/Home.tsx
import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Contact />
    </>
  );
};

export default Home;

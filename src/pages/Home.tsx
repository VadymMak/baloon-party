import React, { Suspense } from "react";
import Slider from "../components/Slider";

const Hero = React.lazy(() => import("../components/Hero"));
const About = React.lazy(() => import("../components/About"));

const Home: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <About />
        <Slider />
      </Suspense>
    </>
  );
};

export default Home;

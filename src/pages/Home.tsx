import React, { Suspense } from "react";
import Slider from "../components/Slider";

const Hero = React.lazy(() => import("../components/Hero"));
const About = React.lazy(() => import("../components/About"));
const Gallery = React.lazy(() => import("../components/Gallery"));

const Home: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <About />
        <Slider />
        {/* <Gallery /> */}
      </Suspense>
    </>
  );
};

export default Home;

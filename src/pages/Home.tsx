import React, { Suspense } from "react";
import Slider from "../components/Slider";
import Article from "../components/Article";
// import Banner from "../components/Banner";

const Hero = React.lazy(() => import("../components/Hero"));
const About = React.lazy(() => import("../components/About"));

const Home: React.FC = () => {
  return (
    <>
      {/* <Banner /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <About />
        <Slider />
        <Article />
      </Suspense>
    </>
  );
};

export default Home;

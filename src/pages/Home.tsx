import React, { Suspense } from "react";

const Hero = React.lazy(() => import("../components/Hero"));
const About = React.lazy(() => import("../components/About"));
const Gallery = React.lazy(() => import("../components/Gallery"));

const Home: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <About />
        <Gallery />
      </Suspense>
    </>
  );
};

export default Home;

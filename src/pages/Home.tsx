import React, { Suspense } from "react";
import Slider from "../components/Slider";
import Article from "../components/Article";
import Testimonials from "../components/Testimonials";
import ContactFAQ from "../components/ContactFaq";

const Hero = React.lazy(() => import("../components/Hero"));
const About = React.lazy(() => import("../components/About"));

const Home: React.FC = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <About />
        <Slider />
        <Article />
        <Testimonials />
        <ContactFAQ />
      </Suspense>
    </>
  );
};

export default Home;
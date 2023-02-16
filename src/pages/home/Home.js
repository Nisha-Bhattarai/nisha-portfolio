import React from "react";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";

import HomeHeroSection from "../../components/homeHeroSection/HomeHeroSection";
import Projects from "../../components/project/Projects";

const Home = () => {
  return (
    <div>
      <HomeHeroSection />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

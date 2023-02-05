import React from "react";
import Chat from "../../components/chat/Chat"
import Footer from "../../components/footer/Footer";
import HomeContent from "../../components/homeContent/HomeContent";
import HomeHeroSection from "../../components/homeHeroSection/HomeHeroSection";
import Projects from "../../components/project/Projects";

const Home = () => {
  return (
    <div>
      <HomeHeroSection />
      <HomeContent />
      <Projects />
      <Chat />
      <Footer />
    </div>
  );
};

export default Home;

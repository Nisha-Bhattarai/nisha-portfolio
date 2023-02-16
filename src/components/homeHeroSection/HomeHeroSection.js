import React from "react";
import "./HomeHeroSection.css";
import videoBg from "../../assets/video.mp4";

const HomeHeroSection = () => {
  return (
    <div className="homeSection">
      <video autoPlay muted loop id="myVideo" type="video/mp4">
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className="container">
        <h1>
          <div>Hi,</div> <div>I'm</div>
          <div>Nisha Bhattarai</div>
          <div>|</div>
          <div className="highlight">
            <div>Frontend</div>
            <div></div>
          </div>
          <div className="highlight">
            <div>Developer</div>
            <div></div>
          </div>
        </h1>
        <div className="social-media">
          <a href="https://github.com/Nisha-Bhattarai">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/nishabhattarai1/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:bhattarainisha11@gmail.com">
            <i class="fa-regular fa-envelope"></i>
          </a>
        </div>
        <div className="contents">
          <p>
            A web developer with a focus on React JS, but still exploring other
            technologies and frameworks that catch my interest! I enjoy working
            on the web and ensuring that it remains a platform for all of us to
            pursue our unique, personal, and creative interests.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;

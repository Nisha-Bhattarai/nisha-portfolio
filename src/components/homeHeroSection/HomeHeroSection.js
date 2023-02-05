import React from "react";
import "./HomeHeroSection.css";

const HomeHeroSection = () => {
  return (
    <div className="homeSection">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pulvinar consectetur sapien, vitae ultrices mauris aliquam vel.
            Phasellus pharetra mi erat, lobortis laoreet metus consectetur et.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default HomeHeroSection;

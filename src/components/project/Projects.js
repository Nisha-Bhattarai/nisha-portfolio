import React from "react";
import "./Projects.css";
import Slider from "react-slick";
import CardComponent from "../card/CardComponent";
import { projectList } from "./ProjectList";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <div id="projects">
      <div className="container">
        <h1>
          <div className="highlight">
            <div>Projects</div>
            <div></div>
          </div>
        </h1>
        <Slider {...settings}>
          {projectList?.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <CardComponent item={item} />
              </React.Fragment>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;

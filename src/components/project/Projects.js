import React from "react";
import "./Projects.css";
import byob from "../../assets/byob.png";
import amazon from "../../assets/amazon.png";
import covidTracker from "../../assets/covid-tracker.png";

const Projects = () => {
  return (
    <div className="projectContainer">
      <h1>
        <div className="highlight">
          <div>Projects</div>
        </div>
      </h1>
      <div className="projects">
        <div id="info">
          <h3>STUDENT MERN STACK DEVELOPER / LAMBTON COLLEGE</h3>
          <h1>Bid Your Own Booze</h1>
          <div id="skill">
            <ul>
              <li data-hover="Frontend">React Native</li>
              <li data-hover="Backend">Nodejs</li>
              <li data-hover="Database">MongoDB</li>
              <li data-hover="Database">Firebase</li>
              <li data-hover="API">Postman</li>
              <li data-hover="Version Control">Git</li>
              <li data-hover="Version Control">Github</li>
              <li data-hover="CSS Framework">Tailwind</li>
              <li data-hover="UI/UX design">Figma</li>
              <li data-hover="Software Tool">Visual Studio Code</li>
            </ul>
            <p>
              I created the UI design for this project using Figma and
              implemented it using React Native. This application was built
              using MERN (MongoDB, ExpressJs, ReactJs and NodeJs).
            </p>
          </div>
          <button>View Project</button>
        </div>
        <div id="image">
          <img src={byob} />
        </div>
      </div>

      <div className="projects">
        <div id="image">
          <img src={amazon} />
        </div>
        <div id="info">
          <h3>REACT JS DEVELOPER/ PERSONAL PROJECT</h3>
          <h1>Amazon Clone</h1>

          <div id="skill">
            <ul>
              <li data-hover="Frontend">React Js</li>
              <li data-hover="Database">Firebase</li>
              <li data-hover="State Management">Redux Toolkit</li>
              <li data-hover="Version Control">Git</li>
              <li data-hover="Version Control">Github</li>
              <li data-hover="Software Tool">Visual Studio Code</li>
            </ul>
            <p>
              I created the full amazon website with e-commerce functionality.
              Users are able to register and login, add products to the cart and
              checkout.
            </p>
          </div>
          <button>View Project</button>
        </div>
      </div>

      <div className="projects">
        <div id="info">
          <h3>REACT JS DEVELOPER / PERSONAL PROJECT</h3>
          <h1>COVID-19 Tracker</h1>
          <div id="skill">
            <ul>
              <li data-hover="Frontend">React Js</li>

              <li data-hover="Database">Firebase</li>
              <li data-hover="Database">Material UI</li>

              <li data-hover="Software Tool">Visual Studio Code</li>
            </ul>
            <p>
              I created the UI design for this project using Figma and
              implemented it using React Native. This application was built
              using MERN (MongoDB, ExpressJs, ReactJs and NodeJs).
            </p>
          </div>
          <button>View Project</button>
        </div>
        <div id="image">
          <img src={covidTracker} />
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import Chat from "../chat/Chat";
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <div className="content-section">
      <div className="homeContent">
        <h1>
          <div>My</div>
          <div className="highlight">
            <div>Skills</div>
            <div></div>
          </div>
        </h1>
        <div className="skillsSection">
          <div id="skill">
            <ul>
              <li data-hover="Programming Language">JavaScript</li>
              <li data-hover="Programming Language">Java</li>
              <li data-hover="Programming Language">Swift</li>

              <li data-hover="Version Control">Git</li>
              <li data-hover="Version Control">Github</li>

              <li data-hover="Web Technology">HTML</li>
              <li data-hover="Web Technology">CSS</li>
              <li data-hover="Framework">Tailwind</li>
              <li data-hover="Framework">jQuery</li>
              <li data-hover="Framework">Bootstrap</li>
              <li data-hover="Framework">React Native</li>
              <li data-hover="Framework">React JS</li>
              <li data-hover="Backend">Nodejs</li>

              <li data-hover="Software Tool">XCode</li>
              <li data-hover="Software Tool"> Android Studio</li>
              <li data-hover="Software Tool">Figma</li>
              <li data-hover="Software Tool">Visual Studio Code</li>

              <li data-hover="Content Management System">WordPress</li>

              <li data-hover="Operating System">Windows </li>
              <li data-hover="Operating System">Mac</li>
              <li data-hover="Operating System">iOS</li>
              <li data-hover="Operating System">Android</li>

              <li data-hover="Database">SQLite </li>
              <li data-hover="Database">MySQL</li>
              <li data-hover="Database">MongoDB</li>
              <li data-hover="Database">Firebase</li>

              <li data-hover="Microsoft Application">Word</li>
              <li data-hover="Microsoft Application">Excel</li>
              <li data-hover="Microsoft Application">PowerPoint</li>
            </ul>
          </div>
          <div id="skillsContent">
            <div id="content">
              <h1>Hello World!</h1>
              <p>
                I'm a web developer with a focus on React JS, but still
                exploring other technologies and frameworks that catch my
                interest! I enjoy working on the web and ensuring that it
                remains a platform for all of us to pursue our unique, personal,
                and creative interests. if you're looking for a developer to add
                to your team, I'd love to hear from you!
              </p>
            </div>
            <div className="button">
              <button>Let’s make something special</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default HomeContent;

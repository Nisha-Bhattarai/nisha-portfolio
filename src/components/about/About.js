import React from "react";
import SkillsComponent from "../skillsComponent/SkillsComponent";
import "./About.css";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div id="about">
      <div className="homeContainer">
        <h1>
          <div className="highlight">
            <div>About</div>
            <div></div>
          </div>
        </h1>
        <div id="aboutContent">
          <div id="content">
            <h2 className="--mb">Hello!</h2>
            <p>
              I am a front-end developer with a focus on creating dynamic and
              user-friendly web experiences. With knowledge in HTML, CSS,
              JavaScript, and framework such as React, I have the technical
              skills and creativity to bring designs to life and build engaging
              applications. I am dedicated to continuously learning and staying
              up-to-date with industry trends and best practices, and I am
              always striving to find new and innovative ways to improve the
              user experience. Whether working in a team or independently, I
              approach every project with enthusiasm and a commitment to
              delivering high-quality results. If you're looking for a front-end
              developer to add to your team, look no further.
            </p>
          </div>
          <div className="button">
            <Link to="contact">
              <button className="--btn --btn-primary">
                Let’s make something special
              </button>
            </Link>
          </div>
        </div>
        <div className="skillsSection">
          <h2 className="--mb">My Skills</h2>
          <div id="skill">
            <SkillsComponent
              dataFor="programming"
              skillTitle="JavaScript"
              toolTip="Programming Language"
            />

            <SkillsComponent
              dataFor="versionControl"
              skillTitle="Git"
              toolTip="Version Control"
            />
            <SkillsComponent
              dataFor="versionControl"
              skillTitle="GitHub"
              toolTip="Version Control"
            />

            <SkillsComponent
              dataFor="webTechnology"
              skillTitle="HTML"
              toolTip="Web Technology"
            />
            <SkillsComponent
              dataFor="webTechnology"
              skillTitle="CSS"
              toolTip="Web Technology"
            />

            <SkillsComponent
              dataFor="framework"
              skillTitle="Tailwind"
              toolTip="Framework"
            />
            <SkillsComponent
              dataFor="framework"
              skillTitle="jQuery"
              toolTip="Framework"
            />
            <SkillsComponent
              dataFor="framework"
              skillTitle="Bootstrap"
              toolTip="Framework"
            />
            <SkillsComponent
              dataFor="framework"
              skillTitle="React Native"
              toolTip="Framework"
            />
            <SkillsComponent
              dataFor="framework"
              skillTitle="React JS"
              toolTip="Framework"
            />

            <SkillsComponent
              dataFor="backend"
              skillTitle="Node JS"
              toolTip="Backend"
            />

            <SkillsComponent
              dataFor="APITesting"
              skillTitle="Postman"
              toolTip="API Testing"
            />

            <SkillsComponent
              dataFor="softwareTool"
              skillTitle="Figma"
              toolTip="Software Tool"
            />
            <SkillsComponent
              dataFor="softwareTool"
              skillTitle="Visual Studio Code"
              toolTip="Software Tool"
            />

            <SkillsComponent
              dataFor="cms"
              skillTitle="WordPress"
              toolTip="Content Management System"
            />

            <SkillsComponent
              dataFor="os"
              skillTitle="Windows"
              toolTip="Operating System"
            />
            <SkillsComponent
              dataFor="os"
              skillTitle="Mac"
              toolTip="Operating System"
            />
            <SkillsComponent
              dataFor="os"
              skillTitle="iOS"
              toolTip="Operating System"
            />
            <SkillsComponent
              dataFor="os"
              skillTitle="Android"
              toolTip="Operating System"
            />

            <SkillsComponent
              dataFor="database"
              skillTitle="MongoDB"
              toolTip="Database"
            />
            <SkillsComponent
              dataFor="database"
              skillTitle="Firebase"
              toolTip="Database"
            />
            <SkillsComponent
              dataFor="database"
              skillTitle="MySQL"
              toolTip="Database"
            />
            <SkillsComponent
              dataFor="database"
              skillTitle="SQLite"
              toolTip="Database"
            />

            <SkillsComponent
              dataFor="microsoftApplication"
              skillTitle="Word"
              toolTip="Microsoft Application"
            />
            <SkillsComponent
              dataFor="microsoftApplication"
              skillTitle="Excel"
              toolTip="Microsoft Application"
            />
            <SkillsComponent
              dataFor="microsoftApplication"
              skillTitle="Powerpoint"
              toolTip="Microsoft Application"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const ProjectComponent = ({ title, subtitle, paragraph, explanation }) => {
  return (
    <div className="projects">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{paragraph}</p>
      <h2>Web Stack and Explanation</h2>
      <p>{explanation}</p>
    </div>
  );
};

export default ProjectComponent;

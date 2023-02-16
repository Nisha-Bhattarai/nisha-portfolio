import React from "react";

const Covid = () => {
  return (
    <div id="covidContainer">
      <div className="container">
        <h1>Corona Tracker App</h1>
        <p>
          Corona Tracker App tracks total corona virus cases, total recovered
          and total death all over the world with maps and charts.
        </p>

        <div>
          <h2>Web Stack and Explanation</h2>
          <p>
            Designed and implemented the complete website with ReactJs, Material
            UI for frontend, and Firebase and MongoDB for database.
          </p>
        </div>
        <div className="links">
          <a
            className="my-button"
            href="https://covid-19-tracker-d4d35.web.app/"
          >
            View Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Covid;

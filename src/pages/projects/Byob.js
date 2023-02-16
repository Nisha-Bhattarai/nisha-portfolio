import React from "react";

const Byob = () => {
  return (
    <div id="finContainer">
      <div className="container">
        <h1>Bid Your Own Booze (BYOB)</h1>
        <p>
          With BYOB, the pubs and restaurants will get an opportunity to
          cultivate a mass sale of their beverages. While the cost of producing
          a single drink will rise as the volume of beverages sold increases.
        </p>

        <div>
          <h2>Project Purpose and Goal</h2>
          <p>
            We see a lot of restaurants that charge $5 for a drink but only
            charge $10 for three drinks. This gave us a thought on how we could
            maximise the sale of beverages by making them more affordable. While
            the cost of producing a single drink will rise as the volume of
            beverages sold increases. To achieve this, we created an environment
            where the prices of single beverages will be more than the order of
            the same in larger quantity.
          </p>
        </div>
        <div>
          <h2>Web Stack and Explanation</h2>
          <p>
            Designed the mock-up for the entire project using Figma and
            implemented it with React Native for frontend and Tailwind for
            styling. Nodejs is used for backend, Postman for testing API, and
            Firebase and MongoDB for database.
          </p>
        </div>
        <div className="links">
          <a className="my-button" href="https://github.com/onsever/byob">
            View GitHub Frontend
          </a>
          <a className="my-button" href="https://github.com/onsever/byob-admin">
            View GitHub Backend
          </a>
        </div>
      </div>
    </div>
  );
};

export default Byob;

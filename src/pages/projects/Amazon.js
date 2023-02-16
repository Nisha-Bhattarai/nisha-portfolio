import React from "react";

const Amazon = () => {
  return (
    <div id="amazonContainer">
      <div className="container">
        <h1>Amazon Clone</h1>
        <p>
          Amazon clone is a clone of original amazon site where users can
          register and login, add products to the cart and checkout.
        </p>

        <div>
          <h2>Web Stack and Explanation</h2>
          <p>
            Designed and implemented the complete website with ReactJs. Redux
            toolkit, and Firebase and MongoDB for database.
          </p>
        </div>
        <div className="links">
          <a className="my-button" href="https://clone-project-352a8.web.app/">
            View Website
          </a>
          <a
            className="my-button"
            href="https://github.com/Nisha-Bhattarai/amazon-clone-project"
          >
            View GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Amazon;

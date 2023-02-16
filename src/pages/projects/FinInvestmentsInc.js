import React from "react";
import "./Projects.css";

const FinInvestmentsInc = () => {
  return (
    <div id="finContainer">
      <div className="container">
        <h1>FIN Investments Inc.</h1>
        <p>
          FIN Investments Inc.’s webapp is for a private investment company that
          will automate the email and loan process for the users.{" "}
        </p>

        <div>
          <h2>Project Purpose and Goal</h2>
          <p>
            The main purpose of this website is to make the process automated.
            The web app will help the members to apply for loan, view the amount
            they deposit every month, update their profile, change/reset
            password, and view the events and discussions that is added there.
            It has multi use role-based authentication with admin, members, and
            loan officer. Admin will be able to update the amounts deposited by
            each member, update the loan amount, add/delete users, change the
            role of the users. Lastly, the Loan officer is responsible for
            updating the loan amount.
          </p>
          <p>The email is automated for the following features:</p>
          <ul>
            <li>
              • When the user is registered, they’ll get verification email
            </li>
            <li>
              • When the user forgets their password, they’ll get reset email
            </li>
            <li>
              • When the user tries to reset password, they’ll get an email with
              reset link
            </li>
            <li>
              • When the user submits contact form, admin will get an email
            </li>
            <li>
              • When the member applies for loan, both the member and admin will
              get an email
            </li>
          </ul>
        </div>
        <div>
          <h2>Web Stack and Explanation</h2>
          <p>
            Used MERN for the project, MongoDB for database, ExpressJs to manage
            server and routes, ReactJs for frontend, NodeJs for backend and
            Postman for testing the API.
          </p>
        </div>
        <div className="links">
          <a className="my-button" href="https://www.fininvestmentsinc.com/">
            View Website
          </a>
          <a
            className="my-button"
            href="https://github.com/sagomisa/FIN-Project-frontend"
          >
            View GitHub Frontend
          </a>
          <a
            className="my-button"
            href="https://github.com/sagomisa/Fin-Project-Backend"
          >
            View GitHub Backend
          </a>
        </div>
      </div>
    </div>
  );
};

export default FinInvestmentsInc;

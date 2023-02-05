import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <React.Fragment>
      <section>
        <nav>
          <div id="name">
            <NavLink to="/">Nisha Bhattarai</NavLink>
          </div>
          <div id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <NavLink
              className="nav-item"
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#FF715B" : "#fff",
              })}
            >
              About
            </NavLink>
            <NavLink
              className="nav-item"
              to="/blog"
              style={({ isActive }) => ({
                color: isActive ? "#FF715B" : "#fff",
              })}
            >
              Blog
            </NavLink>
            <NavLink
              className="nav-item"
              to="/projects"
              style={({ isActive }) => ({
                color: isActive ? "#FF715B" : "#fff",
              })}
            >
              Projects
            </NavLink>

            <NavLink
              className="nav-item"
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FF715B" : "#fff",
              })}
            >
              Contact
            </NavLink>
          </div>

          <div id="mobile" onClick={handleClick}>
            <i
              id="bar"
              className={clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </section>
    </React.Fragment>
  );
};

export default Navbar;

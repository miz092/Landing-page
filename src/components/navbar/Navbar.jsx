import React from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/Logo.png";

function Navbar() {
  return (
    <div className="taskTiger__navbar">
      <div className="taskTiger__navbar-links">
        <div className="taskTiger__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="taskTiger__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whatis">About us</a>
          </p>
          <p>
            <a href="#future">Future</a>
          </p>
          <p>
            <a href="#features">Features</a>
          </p>
          <p>
            <a href="#blog">Updates</a>
          </p>
        </div>
      </div>
      <div className="taskTiger__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div></div>
    </div>
  );
}

export default Navbar;

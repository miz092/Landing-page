import React from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/Logo.png";
import { useState } from "react";
function Navbar() {
  const Menu = () => (
    <>
      {" "}
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
    </>
  );
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="taskTiger__navbar">
      <div className="taskTiger__navbar-links">
        <div className="taskTiger__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="taskTiger__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="taskTiger__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="taskTiger__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="taskTiger__navbar-menu_container scale-up-center">
            <div className="taskTiger__navbar-menu_container-links">
              {" "}
              <Menu />
              <div className="taskTiger__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

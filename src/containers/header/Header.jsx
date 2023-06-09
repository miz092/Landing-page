import React from "react";
import "./Header.css";
import Email from "../../components/email/Email";
import People from "../../assets/people.png";
import Tiger from "../../assets/tiger2.png";
function Header() {
  return (
    <div id="home" className="taskTiger__header section__padding">
      <div className="taskTiger__header-content">
        <h1 className="gradient__text">
          Everyday life made easier. When life gets busy, you don’t have to
          tackle it alone.
        </h1>
        <p>
          TaskTiger is all about providing an efficient and reliable solution
          for people looking to outsource their tasks. By connecting clients
          with skilled taskers, We aim to take the stress out of daily chores
          and help people optimize their time and productivity.{" "}
        </p>
        <Email />
        <div className="taskTiger__header-content__people">
          <img src={People} alt="people" />
          <p>1600+ people are tasking already!</p>
        </div>
      </div>
      <div className="taskTiger__header-image">
        <img src={Tiger} alt="tiger" />
      </div>
    </div>
  );
}

export default Header;

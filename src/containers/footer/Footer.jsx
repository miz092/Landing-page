import React from "react";
import "./Footer.css";
import Tiger from "../../assets/tiger2.png";

function Footer() {
  return (
    <div className="taskTiger__footer section__padding" id="contact">
      <div className="taskTiger__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others?
        </h1>
      </div>

      <div className="taskTiger__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="taskTiger__footer-links">
        <div className="taskTiger__footer-links_logo">
          <img src={Tiger} alt="tigerlogo" />
          <p>
            Budapest 1000 Tigris u. 1 <br /> All Rights Reserved
          </p>
        </div>
        <div className="taskTiger__footer-links_div">
          <h4>Links</h4>
          <p>Partners</p>
          <p>Social Media</p>
          <p>Opportunities</p>
          <p>Contact</p>
        </div>
        <div className="taskTiger__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="taskTiger__footer-links_div">
          <h4>Get in touch</h4>
          <p>Budapest 1000 Tigris u. 1</p>
          <p>0036-12345678</p>
          <p>info@taskTiger.net</p>
        </div>
      </div>

      <div className="taskTiger__footer-copyright">
        <p>@2023 TaskTiger. inc. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;

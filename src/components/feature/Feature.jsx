import React from "react";
import "./Feature.css";

function Feature({ title, text }) {
  return (
    <div className="taskTiger__features-container__feature">
      <div className="taskTiger__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="taskTiger__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Feature;

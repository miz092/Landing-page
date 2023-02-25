import React from "react";
import "./Brand.css";
import { foodpanda, ikea, obi, doordash, taskrabbit } from "./imports";

function Brand() {
  return (
    <>
      {" "}
      <div className="taskTiger__brand-title">
        {" "}
        <h2 className="gradient__text">Our partners</h2>
      </div>
      <div className="taskTiger__brand section__padding">
        <div>
          <img src={foodpanda} />
        </div>
        <div>
          <img src={ikea} />
        </div>
        <div>
          <img src={obi} />
        </div>
        <div>
          <img src={doordash} />
        </div>
        <div>
          <img src={taskrabbit} />
        </div>
      </div>
    </>
  );
}

export default Brand;

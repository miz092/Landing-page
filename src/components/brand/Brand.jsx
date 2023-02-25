import React from "react";
import "./Brand.css";
import {
  Ikea,
  Foodpanda,
  Doordash,
  Obi,
  Taskrabbit,
  Ubereats,
} from "./import.js";

function Brand() {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={Ikea} />
      </div>
      <div>
        <img src={Foodpanda} />
      </div>
      <div>
        <img src={Doordash} />
      </div>
      <div>
        <img src={Obi} />
      </div>
      <div>
        <img src={Taskrabbit} />
      </div>
      <div>
        <img src={Ubereats} />
      </div>
    </div>
  );
}

export default Brand;

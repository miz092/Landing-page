import React from "react";
import Feature from "../../components/feature/Feature.jsx";
import "./WhatIs.css";

function WhatIs() {
  return (
    <div className="taskTiger__whatis section__margin" id="whatis">
      <div className="taskTiger__whatis-feature">
        <Feature
          title="What is TaskTiger?"
          text="TaskTiger is a service that connects people who need help with tasks to skilled taskers who can provide the necessary assistance. Whether it's cleaning, handyman work, event planning, or errands, TaskTiger makes it easy to find reliable and affordable help for any task."
        />
      </div>
      <div className="taskTiger__whatis-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
      </div>
      <div className="taskTiger__whatis-container">
        <Feature
          title="Get tasks done quickly and efficiently"
          text="TaskTiger connects you with skilled taskers who can help you complete a wide range of tasks, from home repairs and cleaning to event planning and errands."
        />

        <Feature
          title="Flexible scheduling and pricing"
          text="With TaskTiger, you can set your own schedule and pay rates, and choose taskers based on their experience and reviews from other users."
        />

        <Feature
          title="Safe and secure platform"
          text="TaskTiger provides a secure platform for users and taskers, with features like background checks and insurance coverage for select tasks."
        />

        <Feature
          title="24/7 customer support"
          text="Our customer support team is available around the clock to help you with any questions or issues you may have while using TaskTiger."
        />
      </div>
    </div>
  );
}
export default WhatIs;

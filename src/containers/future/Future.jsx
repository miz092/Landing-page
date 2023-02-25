import React from "react";
import "./Future.css";
import HappyPeople from "../../assets/future.png";
function Future() {
  return (
    <div className="taskTiger__future section__padding" id="future">
      <div className="taskTiger__future-image">
        <img src={HappyPeople} alt="possibility" />
      </div>
      <div className="taskTiger__future-content">
        <h1 className="gradient__text">
          The possibilities are <br /> beyond your imagination
        </h1>
        <p>
          As we move into the future, TaskTiger will continue to play a vital
          role in how people get things done. With our user-friendly platform
          and trusted taskers, TaskTiger will be the go-to solution for people
          seeking reliable and affordable help with any task. We'll continue to
          innovate and enhance our services, so that we can make even more tasks
          possible for our users. With TaskTiger, the future is bright and full
          of possibilities, and we can't wait to see what our community of
          taskers and task-seekers will accomplish together.
        </p>
      </div>
    </div>
  );
}

export default Future;

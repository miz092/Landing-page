import React from "react";
import "./Features.css";
import Feature from "../../components/feature/Feature";
const featureReviews = [
  {
    title: "Name: Lisa Brown Age: 29",

    text: "'TaskTiger is amazing! I love how easy it is to find skilled taskers for all kinds of jobs, from cleaning to handyman work. The flexible scheduling and pricing options make it really convenient to use, and the customer support is top-notch. I've recommended TaskTiger to all my friends!'",
  },
  {
    title: "Name: Mark Johnson Age: 39",
    text: "'I'm really impressed with the chatbot feature on TaskTiger. It's so helpful to be able to communicate with taskers in real-time and get updates on the status of my tasks. Plus, the knowledge base is a great resource for finding tips and tricks for all kinds of tasks. Highly recommend!'",
  },
  {
    title: "Name: David Kim Age: 41",
    text: "'I was really impressed with the security features on TaskTiger. It was great to know that all taskers are background-checked and that insurance coverage is provided for select tasks. It gave me peace of mind knowing that I was using a safe and reliable platform. I'll definitely be using TaskTiger for all my future tasks!'",
  },
  {
    title: "Name: Rachel Smith Age: 32",
    text: "'TaskTiger is my go-to app for all my errands and small tasks. The 24/7 customer support is really helpful if I ever have any questions or issues, and the payment options are easy and convenient. I also love the education section of the app - I've learned so much about home repairs and DIY projects. Thanks, TaskTiger!'",
  },
];

function Features() {
  return (
    <div className="taskTiger__features section__padding" id="features">
      <div className="taskTiger__features-heading">
        <h1 className="gradient__text">
          Step into the future with TaskTiger today and easily connect with
          skilled taskers to get help with any task. Whether it's home repairs,
          cleaning, event planning, or errands, TaskTiger has you covered. Make
          your life easier, more productive, and more enjoyable by trying
          TaskTiger now.
        </h1>
        <p>Get help or become a tasker today!</p>
      </div>
      <div className="taskTiger__features-container">
        {featureReviews.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
}
export default Features;

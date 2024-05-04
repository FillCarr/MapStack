import React from "react";
import Conversation from "../Assets/conversation-image.png";
import Teamup from "../Assets/teamup-image.jpg";
import Delivery from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: Conversation,
      title: "1.) Share What You Need",
      text: "Submit an assignment, let's discuss your goals!"
    },
    {
      image: Teamup,
      title: "2.) Decide If We Can Help",
      text: "Let's discuss further if we really want to make this happen!"
    },
    {
      image: Delivery,
      title: "3.) Product Delivery",
      text: "Based on our discussion we can establish what the when and what the deliverable should be!"
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How to Work With Us?</h1>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info">
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

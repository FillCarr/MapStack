import React from "react";
import AboutBackground from "../Assets/about-background.png"; // Check the path
import AboutBackgroundImage from "../Assets/about-background-image.png"; // Check the path
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt=""/>
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
        KEEP DEVELOPMENT COSTS LOW!
        </h1>
        <p className="primary-text">
          We can set up interactive databases accessessible on web enabled devices using open source tools!
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill/>
          </button>
          </div>
          </div>
    </div>
  );
};

export default About; // Export the About component as default

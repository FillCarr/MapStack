import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import { AiFillStar } from 'react-icons/ai'


export const Testimonial = () => {
    return (
      <div className="work-section-wrapper">
        <div className="work-section-top">
          <p className="primary-subheading">Testimonial</p>  
          <h1 className="primary-heading">What They Are Saying</h1>
          <p className="primary-text">
           We are passionate about GIS. With 3 years of experience in every industry we can garantee successful tools to help your business grow!
          </p>                     
        </div>    
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="Profile" />
          <p>
            I started this company to share the importance of perspective! I Hope to continue helping people understand!
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Philip Carr</h2>     
        </div>
      </div>
    );
  };

  export default Testimonial;
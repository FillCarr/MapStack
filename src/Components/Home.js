import React, { useState } from 'react';
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import PopupForm from './PopupForm'; 

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div className="home-container">
        <Navbar/>
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
<div className="home-text-section">
  <h1 className="primary-heading">
CUSTOM WEB APPLICATIONS TO VIEW YOUR DATA.
  </h1>
  <p className="primary-text">
  Empower your business with tailor-made GIS applications from Map Stack, enhancing your decision-making capabilities!
  </p>
  <button className="secondary-button" onClick={toggleForm}>
        Submit Assignment <FiArrowRight />
      </button>
      {showForm && <PopupForm onClose={toggleForm} />}
    </div>
<div className="home-image-container">
  <img src={BannerImage} alt="" />
</div>
        </div>
    </div>
  );
};

export default Home;

import React from 'react'
import Logo from "../Assets/Logo.png";
import { BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return ( <div className="footer-wrapper" >
    <div className="footer-section-one">
        <div className="footer-logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
            <BsTwitter />
            <SiLinkedin />
            <BsYoutube />
            <FaFacebookF />
        </div>
        </div>
        <div className="footer-section-two">
            <div className="footer-section-columns">
                <span>Quality</span>
                <span>Help</span>
                <span>share</span>
                <span>Careers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
                <span>860-770-5497</span>
                <span>gismapstack@gmail.com</span>
            </div>
        </div>
        </div>  
    );
};

export default Footer;
import React from "react"
import Logo from "../Assets/Logo.svg";
import {BsTwitter} from "react-icons/bs";
import {SiLinkedin} from "react-icons/si";
import {BsYoutube} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";

const Footer = () => {
  return <div className="footer-wrapper">
            <div className="footer-section-one">
                <div className="footer-logo-container">
                    Q-Buster
                </div>
                <div className="footer-icons">
                    <a href="https://en.wikipedia.org/wiki/Twitter"><BsTwitter /></a>
                    <a href="https://en.wikipedia.org/wiki/LinkedIn"><SiLinkedin/></a>
                    <a href=" "><BsYoutube /></a>
                    <a href="https://github.com/KhyatiSatija/Q-Buster-Order-Food-Online"><FaGithub/></a>
                    
                    
                </div>
            </div>
            <div className="footer-section-two">
                <div className="footer-section-columns">
                    <span>Quality</span>
                    <span>Help</span>
                    <span>Share</span>
                    <span>Carrers</span>
                    <span>Testimonials</span>
                    <span>Work</span>
                </div>
                <div className="footer-section-columns">
                    <span>800-543-3982</span>
                    <span>hello@qbuster.com</span>
                    <span>press@qbuster.com</span>
                    <span>contact@qbuster.com</span>
                </div>
                <div className="footer-section-columns">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
            </div>
  </div>;  
};

export default Footer
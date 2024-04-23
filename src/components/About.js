import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import {BsFillPlayCircleFill} from "react-icons/bs";

const About = () => {
  return <div className="about-section-container" id="about-section-container">
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="Backgorund"/>
            </div>
            <div className="about-section-image-container">
                <img src={AboutBackgroundImage} alt="About Food Bowl"/>
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading" >
                Q-Buster: Skip the Queue, Manage Your Meals
                </h1>
                <p className="primary-text">
                Tired of waiting in long lines for food?  With Q-Buster, you can skip the queue and get notified on your phone when your order is ready for pickup!  This innovative system not only saves you time, but it can also help you manage your money and stick to your budget.
                </p>
                <p className="primary-text">
                With Q-Buster, you can:

Avoid long lines and get your food faster
Focus on your studies or other activities while you wait
Manage your budget by tracking your food spending
                </p>
                <div className="about-buttons-container">
                    <a className="secondary-button" href="https://youtu.be/wSofV2HQ9x0" target="blank" rel="noopener noreferrer"><BsFillPlayCircleFill/>Watch Video</a>
                     
                    
                    
                     
                </div>
            </div>
  </div>;
};

export default About;
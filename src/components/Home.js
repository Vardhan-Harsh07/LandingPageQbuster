import React from "react"
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import {FiArrowRight} from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar/>
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="Banner Image" />
          </div>
          <div className="home-text-section">
              <h1 className="primary-heading">
              One stop, Many routes
              </h1>
               
              <p className="primary-text">
              Order food from your favorite campus stores and Skip the wait, get your plate
              No more standing around for ages, wondering when you'll finally get your food.
              </p>
              <button className="secondary-button">
                Order Now <FiArrowRight />
              </button>
          </div>
          <div className="home-image-container"></div>
            <img src={BannerImage} alt="Food Bowl" />
        </div>
    </div>
  );
}

export default Home;
import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMeals from "../Assets/foodbag.png"
import Bellnoti from "../Assets/bell noti.png.png"
import moneyman from "../Assets/moneyman.png"
import login from "../Assets/login.png"
 



const Work = () => {
    const workInfoData = [
        {
            image: login,
            title: "Sign Up",
            text: "Head to the Q-Buster web app and log in to start your queue-busting journey!",
        },
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Signed up? Now browse delicious options and pick your perfect campus meal! ",
        },
        {
            image: ChooseMeals,
            title: "Order Now",
            text: "Ready to eat? Order your pre-chosen meal and Q-Buster will make it a grab-and-go affair!",
        },
        {
            image: Bellnoti,
            title: "Notifications",
            text: "No more line-watching! We'll buzz your phone when your order's ready for pickup. ",

        },
        {
            image: DeliveryMeals,
            title: "Order Pickup",
            text: "Phone buzzed? Food's ready! Grab your hot and delicious meal - fast! ",
        },
        {
            image: moneyman,
            title: "Budget",
            text: "Stay on top of your spending! Track past orders and manage your campus food budget seamlessly",
        },
    ];




  return <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How It Works</h1>
                <p className="primary-text">
                Want to skip the lines and grab your food faster? Here's how! Follow these steps to use the Q-Buster app seamlessly:
                </p>
            </div>
            <div className="work-section-bottom" >
                {
                    workInfoData.map((data) => (
                       <div className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt="Card Images"/>
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                       </div>
                    ) )
                }

            </div>
  </div>
}

export default Work;
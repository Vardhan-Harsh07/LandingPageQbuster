import React from "react";
import ProfilePic from "../Assets/sid1.png";
import {AiFillStar} from "react-icons/ai";


const Testimonial = () => {
  return <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="profile picture" />
                <p>
                Q-Buster is a total lifesaver!  Before, lunch lines meant I was always rushing to class.  Now, I just order through the app and grab my food when it's ready. Plus, it's helped me track my spending – no more mystery charges on my meal plan!  Seriously, every student needs this app
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Siddharth Shaji Vethody</h2>
            </div>
  
};

export default Testimonial;
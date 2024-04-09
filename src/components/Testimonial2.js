import React from "react";
import ProfilePic from "../Assets/abhay2.png";
import {AiFillStar} from "react-icons/ai";


const Testimonial2 = () => {
  return <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="profile picture" />
                <p>
                Forget the hangry struggle!  Q-Buster notifications are a game-changer. I used to miss class because I couldn't decide what to eat or get stuck in a long line.  Now, I can browse menus, order in advance, and avoid the whole waiting drama. My stomach and my grades are thanking me
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Abhay Pratap Singh Baliyan</h2>
            </div>
  
};

export default Testimonial2;
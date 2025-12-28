import React from "react";
import headshot from "./images/headshot.jpg";
import "./AboutMe.css";

export const AboutMe: React.FC = () => {
   return (
      <div className="aboutMe">
         <img className="headshot" alt="Headshot" src={headshot} />

         <div className="title">Joshua Oki</div>

         <p className="description">
            Hi! I’m Joshua, a Computer Science and Engineering student who is a
            third year at MIT!
            <br />
            I’m interested in a wide array of topics including mobile &amp; desktop
            development, full-stack development, and machine learning!
         </p>
      </div>
   );
};

import React from "react";
import headshot from "./images/headshot.jpg";
import "./AboutMe.css";

export const AboutMe: React.FC = () => {
   return (
      <div className="aboutMe">
         <img className="headshot" alt="Headshot" src={headshot} />

         <div className="title">Joshua Oki</div>

         <p className="description">
            Hi! I’m Joshua, a Computer Science and Engineering student who is currently a
            third year at MIT!
            <br />
            I’m interested in a wide array of topics including low-level and backend development, full-stack development, computer vision, and mobile &amp; desktop
            development! I'm primarily looking for an internship for Summer of 2025 to gain more software engineering experience and contribute to exciting projects!
            <br />
            In my free time, I like learning languages (learning Japanese and German), playing video games (especially RPGs), and listening to music (from K-Pop and Pop to Rap/Hip-Hop)!
         </p>
      </div>
   );
};

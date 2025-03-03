import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Project from "./Project";
import CantonaImage from "./images/Cantona.png";
import SmoothieImage from "./images/New Smoothie.png";
import DSImage from "./images/3ds.jpeg";
import NYT from "./images/NYT.png";
import WebsiteImage from "./images/Website.png";

function App() {
  return (
    <div className="App">
      <head>
        <title>Joshua Oki's Projects</title>
      </head>
      <header>
        <h1>Joshua Oki's Projects</h1>
      </header>
      <Project
        image={SmoothieImage}
        title="Smoothlie"
        date_string="Jan 2024"
        link="https://github.com/TheOkster/Smoothlie"
        body="An app created as part of a team of 3 for MIT’s web.lab class/competition. This app suggests a schedule for users based off the tasks they have to do and their existing commitments. This wass created using React, Javascript, and MongoDB. I worked on both the front-end and back-end, specifically implementing most of the pages and the MongoDB database."
      />
      <Project
        image={CantonaImage}
        title="Cantona"
        date_string="Mar 2025"
        link="https://github.com/TheOkster/Cantona"
        body="An Android music app created using Jetpack Compose and Kotlin. Still a work-in-progress but the core functionality is working. "
      />
      <Project
        image={DSImage}
        title="3DS Game Time Parser"
        date_string="Jan 2024"
        link="https://github.com/TheOkster/3DSActivityLogParser/blob/main/main.py"
        body="Created a project to help analyze Nintendo 3DS activity log (game time) data from hex files in Python. The difficult part of this project was more figuring out which hex values correlated to game times as this was not officially documented anywhere."
      />
      <Project
        image=""
        title="GameCube & Wii GOG Galaxy Plugin"
        date_string="2020"
        link="https://github.com/JTNDev/galaxy-integration-gc"
        body="Imports GameCube and Wii Games into the program GOG Galaxy. Allows users to see which GameCube and Wii games they have in their library. This was created using Python."
      />
      <Project
        image=""
        title="Image Comparison"
        date_string="2021"
        body="A project used to help me compare two images and pick one I found was better without knowing which one was which. This was made using C#."
      />
      <Project
        image={WebsiteImage}
        title="This Website!"
        date_string="Mar 2, 2024"
        body="Very small project of course but this website was created using very simple React code. Plan to make it prettier soon!"
      />
      <Project
        image={NYT}
        title="NYT Article Analyzer"
        date_string="Summer 2024"
        body="A very small project, but was used to help assist me classify articles as living wage related for a work project. This was made using Swift."
      />
    </div>
  );
}

export default App;

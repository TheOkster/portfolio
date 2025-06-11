import React from "react";
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
      {/* 
      The goal is to display the about me and projects in two halves of the screen.
      The about me is constant, while the projects can scroll.
      */}
      <div className="outerColumns">
        <div
          className="aboutMe"
          style={{
            flex: "0 0 30%",
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "5rem",
          }}
        >
          <h1>Joshua Oki</h1>
          <h2>Student</h2>
          <p className="desc">
            Hi! I’m Joshua, a Computer Science and Engineering student, who just
            finished their second year at MIT!
          </p>
          <p className="desc">
            I’m interested in a wide array of topics including mobile & desktop
            development, full-stack development, and machine learning!
          </p>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/**
             * TODO
             * Consider automatically populating this from a file or the like.
             */}
            <Project
              image={SmoothieImage}
              title="Smoothlie"
              date_string="Jan 2024"
              href="https://github.com/TheOkster/Smoothlie"
              body="An app created as part of a team of 3 for MIT’s web.lab class/competition. This app suggests a schedule for users based on the tasks they have to do and their existing commitments. This was created using React, JavaScript, and MongoDB. I worked on both the front-end and back-end, specifically implementing most of the pages and the MongoDB database. isfiewjfiewjfeijiwjfeijewifjewifjiewjfiewjfiejiwfjiewjfeiwjfiewjfijeiwfjewiejfiwejfiwfjw"
            />
            <Project
              image={CantonaImage}
              title="Cantona"
              date_string="Mar 2025"
              href="https://github.com/TheOkster/Cantona"
              body="An Android music app created using Jetpack Compose and Kotlin. Still a work-in-progress but the core functionality is working. "
            />
            <Project
              image={DSImage}
              title="3DS Game Time Parser"
              date_string="Jan 2024"
              href="https://github.com/TheOkster/3DSActivityLogParser/blob/main/main.py"
              body="Created a project to help analyze Nintendo 3DS activity log (game time) data from hex files in Python. The difficult part of this project was figuring out which hex values correlated to game times as this was not officially documented anywhere."
            />
            <Project
              title="GameCube & Wii GOG Galaxy Plugin"
              date_string="2019-2021"
              href="https://github.com/JTNDev/galaxy-integration-gc"
              body="This imports GameCube and Wii Games into the program GOG Galaxy and allows users to see which GameCube and Wii games they have in their library. This was created using Python."
            />
            <Project
              title="Image Picker"
              href="https://github.com/TheOkster/ImagePicker"
              date_string="2021"
              body="A project used to help me compare two images and pick one I found was better without knowing which one was which. This was made using C#."
            />
            <Project
              image={WebsiteImage}
              title="This Website!"
              href="https://github.com/TheOkster/portfolio"
              date_string="Mar 2, 2024"
              body="Very small project of course but this website was created using very simple React code. Plan to make it prettier soon!"
            />
            <Project
              image={NYT}
              title="NYT Article Analyzer"
              date_string="Summer 2024"
              body="This is a very small project, but was used to help assist me classify articles as living wage related for a work project. This was made using Swift."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Project from "./Project";
import CantonaImage from "./images/Cantona.png";
import SSImage from "./images/FFVII_from_model.png";
import SmoothieImage from "./images/New Smoothie.png";
import DSImage from "./images/3ds.jpeg";
import NYT from "./images/NYT.png";
import WebsiteImage from "./images/Website.png";
import DonkeyKong from "./images/Donkey Kong.png";
import { AboutMe } from "./AboutMe";
import Donuts from "./images/Donuts.png"
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

      <AboutMe />
      <header className="projectsHeader">
        <div className="projectsTitle">Projects</div>
        <div className="projectsDrop"></div>
      </header>
      <div className="outerColumns">
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            overflowY: "scroll",
            alignItems: "center",
          }}
        >
          {/**
             * TODO
             * Consider automatically populating this from a file or the like.
             */}
          <Project
            image={DonkeyKong}
            title="NES Emulator"
            date_string="Oct 2025 - Dec 2025"
            body="As part of MIT's 6.205 Digital Systems Laboratory class, I created an NES emulator with 2 other people on a Xilinx FPGA with SystemVerilog. The part I was responsible for, the PPU, is able to generate a working frame with background rendering if given the correct memory in simulation! As part of the project, I created numerous test cases to test timing, memory systems, image generation, and much more with cocotb. I had to study lots of documentation from the NESDev wiki to learn how the NES worked and how to implement elements of it myself. The image above shows a frame captured of Donkey Kong in game from my module!"
            github="https://github.com/TheOkster/NES-Emulator"
          />
          <Project
            title="FUSE File Server"
            date_string="Dec 2025 - Present"
            body="Designing a custom C++ FUSE filesystem with an internal REST API and SQL-based metadata. Implementing core filesystem components (read/write, directory operations, syncing) and developing synchronization logic to keep local and remote states consistent. Creating a Linux CLI and a cross-platform GUI client for inter acting with the system."
          />
          <Project
            image={SSImage}
            title="Game Supersampling Project"
            date_string="Apr 2025 - May 2025"
            body="Developed a C++ game supersampler program as part of MIT's Intro to Computer Vision class that supersamples games by 2× using a custom convolutional neural network trained in PyTorch and deployed with TensorRT for low-latency inference. The dataset was trained on in-game screenshots from IGDB that I heavily curated to produce good results. I integrated the system with the Direct3D Capture API for real-time integration and plan to integrate deeper DirectX rendering modules in the future."
          />
          <Project
            image={CantonaImage}
            title="Cantona"
            date_string="Mar 2025"
            github="https://github.com/TheOkster/Cantona"
            body="Designed and implemented an Android music player with Jetpack Compose and Kotlin with album browsing, full playback support, and Android Media API integration for background playback and status bar media control. The core components are functional, but I plan to improve the UI and add more advanced features in the future."
          />
          <Project
            image={SmoothieImage}
            title="Smoothlie"
            date_string="Jan 2024"
            github="https://github.com/TheOkster/Smoothlie"
            body="An app created as part of a team of three for MIT’s web.lab competition/class. The app generates daily schedules based on task urgency and existing commitments and was built with React, JavaScript, and MongoDB. I implemented most of the front-end pages, designed and built the REST API, and integrated the scheduling logic with a MongoDB database and the React UI.
"
          />
          <Project
            image={Donuts}
            title="Pokemon Legends Z-A Donut Calculator"
            date_string="Dec 2025"
            other_links="https://theokster.github.io/Pokemon-Donut-Calculator/"
            github="https://github.com/TheOkster/Pokemon-Donut-Calculator"
            body="I built a React website that computes the optimal combination of resources needed to create donuts in the video game Pokémon Legends: Z-A. I implemented a backtracking algorithm that made use of combinatorics to explore valid combinations, then heavily optimized it to be performant even in cases with a large search space."
          />
          <Project
            image={DSImage}
            title="3DS Game Time Parser"
            date_string="Dec 2023"
            github="https://github.com/TheOkster/3DSActivityLogParser/blob/main/main.py"
            body="Designed and built a Python tool that converts undocumented Nintendo 3DS Activity Log binary data into accurate per-game playtime metrics. Spent significant time reverse-engineering raw hex file formats without any official documentation to map low-level binary values to game IDs, gameplay durations, and dates, then packaged the results to be used externally as a CSV and JSON.
"
          />
          <Project
            title="GameCube & Wii GOG Galaxy Plugin"
            date_string="2019-2021"
            github="https://github.com/JTNDev/galaxy-integration-gc"
            other_links="https://github.com/JTNDev/galaxy-integration-wii"
            body="I created a custom GOG Galaxy plugin in Python that integrates GameCube and Wii game libraries into GOG Galaxy. It enables users to see their Nintendo games within a single launcher. I implemented an asynchronous structure to ensure responsive loading. The project reached over 5,000 downloads and obtained contributions from random developers across the world."
          />
          <Project
            title="Image Picker"
            github="https://github.com/TheOkster/ImagePicker"
            date_string="2021"
            body="A C# UWP desktop application that shows two images side-by-side and allows users to pick a preferred image without bias."
          />
          <Project
            image={WebsiteImage}
            title="This Website!"
            github="https://github.com/TheOkster/portfolio"
            date_string="Mar 2024 - Present"
            body="I created this very website using React code and TypeScript! I designed the layout and components myself and implemented responsive design principles to ensure it looks good on both mobile and desktop."
          />
          <Project
            image={NYT}
            title="NYT Article Analyzer"
            date_string="June - Aug 2024"
            body="Created a small SwiftUI GUI app to compare and analyze New York Times articles to classify whether they are related to living wages."
          />
        </div>
      </div>
    </div>
  );
}

export default App;

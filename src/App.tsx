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
import { Box } from "./Box";
import { AboutMe } from "./AboutMe";
import projectsDrop from "./images/projects_drop.svg"
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
            body="Designing a custom C++ FUSE filesystem that exposes a remote storage service as a native Linux filesystem, backed by a REST API and SQL-based metadata layer. Implementing core filesystem components (read/write, directory operations, syncing) and developing synchronization logic to keep local and remote states consistent. Creating a Linux CLI and a cross-platform GUI client for interacting with the system."
          />
          <Project
            image={SSImage}
            title="Game Supersampling Project"
            date_string="Apr 2025 - May 2025"
            body="Developed a C++ game supersampler program as part of MIT's Intro to Computer Vision class that performs 2× super-resolution using a custom convolutional neural network trained in PyTorch and deployed with TensorRT for low-latency inference. The dataset was curated and trained on high-quality in-game screenshots from IGDB to produce appealing results. I integrated the system with the Direct3D Capture API for real-time integration and plan to integrate DirectX rendering modules."
          />
          <Project
            image={CantonaImage}
            title="Cantona"
            date_string="Mar 2025"
            github="https://github.com/TheOkster/Cantona"
            body="Designed and implemented an Android music player with Jetpack Compose and Kotlin with album browsing, full playback support, and Android Media API integration for background playback and system media controls. The core architecture is fully functional with work improving the UI and adding more advanced features planned for the future."
          />
          <Project
            image={SmoothieImage}
            title="Smoothlie"
            date_string="Jan 2024"
            github="https://github.com/TheOkster/Smoothlie"
            body="An app created as part of a team of 3 for MIT’s web.lab class/competition. This app suggests a schedule for users based on the tasks they have to do and their existing commitments. This was created using React, JavaScript, and MongoDB. I worked on both the front-end and back-end, specifically implementing most of the pages and the MongoDB database."
          />
          <Project
            image={DSImage}
            title="3DS Game Time Parser"
            date_string="Dec 2023"
            github="https://github.com/TheOkster/3DSActivityLogParser/blob/main/main.py"
            body="Designed and built a Python tool that converts undocumented Nintendo 3DS Activity Log binary data into accurate per-game playtime metrics. Spent significant time reverse-engineering raw hex file formats without no official documentation to  and map low-level binary values to game IDs, gameplay durations, and dates, then packaged the results to be used externally as a CSV and JSON.
"
          />
          <Project
            title="GameCube & Wii GOG Galaxy Plugin"
            date_string="2019-2021"
            github="https://github.com/JTNDev/galaxy-integration-gc"
            body="This imports GameCube and Wii Games into the program GOG Galaxy and allows users to see which GameCube and Wii games they have in their library. This was created using Python."
          />
          <Project
            title="Image Picker"
            github="https://github.com/TheOkster/ImagePicker"
            date_string="2021"
            body="A project used to help me compare two images and pick one I found was better without knowing which one was which. This was made using C# and UWP."
          />
          <Project
            image={WebsiteImage}
            title="This Website!"
            github="https://github.com/TheOkster/portfolio"
            date_string="Mar 2, 2024"
            body="This a very small project but this website was created using React code."
          />
          <Project
            image={NYT}
            title="NYT Article Analyzer"
            date_string="Summer 2024"
            body="This is a very small project, but was used to help assist me classify articles as living wage related for a work project. This was made using Swift and AppKit."
          />
        </div>
      </div>
    </div>
  );
}

export default App;

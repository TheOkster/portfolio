import React, { JSX } from "react";
import download1 from "./download-1.png";
import hyperlink1 from "./hyperlink-1.png";
import "./Box.css";
import vector from "./vector.svg";

export const Box = (): JSX.Element => {
   return (
      <div className="box">
         <div className="group">
            <div className="rectangle" />

            <div className="div">
               <p className="as-part-of-MIT-s">
                  As part of MIT&#39;s 6.205 Digital Systems Laboratory class, I
                  created an NES emulator with 2 other people on a Xilinx FPGA with
                  SystemVerilog. The part I was responsible for, the PPU, is able to
                  generate a working frame with background rendering if given the
                  correct memory in simulation! As part of the project, I created
                  numerous test cases to test timing, memory systems, image
                  generation, and much more and had to study lots of documentation
                  from the NESDev wiki to learn how the NES worked and how to
                  implement elements of it myself. The image above shows a frame
                  captured of Donkey Kong in game from my module!
               </p>

               <div className="group-2">
                  <img className="vector" alt="Vector" src={vector} />

                  <img className="hyperlink" alt="Hyperlink" src={hyperlink1} />
               </div>
            </div>

            <div className="group-3">
               <img className="download" alt="Download" src={download1} />

               <p className="oct-dec">Oct 2025 - Dec 2025</p>
            </div>
         </div>
      </div>
   );
};
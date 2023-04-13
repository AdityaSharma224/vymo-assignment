import React from "react";
import "./Intro.css";
import Frame1 from "../../img/Frame 1.png";
import Frame2 from "../../img/Frame 2.png";
import Frame3 from "../../img/Frame 3.png";
import Frame4 from "../../img/Frame 4.png";
function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <p>
            This is<span class="name"> Aditya</span>
          </p>
          <span>
            FullStack Developer with a good level of experience in web designing
          </span>

          <div className="emailBox complete_box">
            <div className="complete_box">
            <input type="search" placeholder="Enter Email ID" />
            <button type="button i-button" className="button n-button">
              Search
            </button>
            </div>
            
          </div>

          
        </div>
          <div className="i-icons">
            <img src={Frame1} alt="" />
            <img src={Frame3} alt="" />
            <img src={Frame2} alt="" />
            <img src={Frame4} alt="" />
          </div>
      </div>

      <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      <div
        className="blur"
        style={{
          background: "#C1F5FF",
          top: "17rem",
          width: "21rem",
          height: "11rem",
        }}
      ></div>
    </div>
  );
}

export default Intro;

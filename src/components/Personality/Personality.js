import React from "react";
import "./personality.css";
import person1 from "../../img/Img-left.png";
import person2 from "../../img/img-right.png";
function Personality() {
  return (
    
      <div className="main_box">
        <div className="i-mid">
          <div className="i-name">
            <div className="imgs">
              <img src={person1} alt="" />
              <img src={person2} alt="" />
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Personality;

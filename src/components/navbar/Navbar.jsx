import React from "react";
import "./navbar.css";
import NavLogo from "../../img/Group 7.png";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          <a>
            <img src={NavLogo} alt="" />
          </a>
        </div>
        <div className="searchbar">
          <form className="mix-button">
            <button type="submit">Search</button>
            <input className="searchbarButton" type="search" placeholder="Search for anything" />
          </form>
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li className="randomList">Random</li>
            <li className="randomList">Random</li>
            <li><button className="button n-button">Login</button></li>
          </ul>
        </div>
        
      </div>
    </div>
  );
}

export default Navbar;

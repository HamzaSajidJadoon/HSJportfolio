import React, { useEffect, useState } from "react";
import "./Aside.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Aside() {
  const [hidden, showdrive] = useState(true);
  const handleToggle = () => {
    showdrive(!hidden);
  };
  return (
    <div>
      <div className="aside " id={hidden ? "aside-bar" : "aside-bar-open"}>
        <div className="logo">
          <a href="#">
            <span>H</span>amza 
          </a>
        </div>
        <div className="nav-toggler" onClick={handleToggle}>
          <span></span>
        </div>
        <ul className="nav">
          <li>
            <NavLink to="/HomePage" className="">
              <i className="fa fa-home"></i>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/AboutPage">
              <i className="fa fa-user"></i>About
            </NavLink>
          </li>
          <li>
            <NavLink to="/PortfolioPage">
              <i className="fa fa-briefcase"></i>Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/ContactPage">
              <i className="fa fa-comments"></i>Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* <div class="style-switcher">
        <div class="day-night s-icon">
          <i class="fas fa-moon"></i>
        </div>
      </div> */}
    </div>
  );
}

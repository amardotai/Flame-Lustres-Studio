import React, { useState } from "react";
import headerLogo from "../assets/Logos/logo.png";
import navBtn from "../assets/Icons/menu.png";
import $ from "jquery";
import { use } from "react";

function Header() {
  const [blockClass, setBlockClass] = useState("block");
  const [menuClass, setMenuClass] = useState("menu-list");

  function clickFunction() {
    if (blockClass === "block") {
      setBlockClass("block-active");
      setMenuClass("menu-list-active");
    } else {
      setBlockClass("block");
      setMenuClass("menu-list");
    }
  }

  return (
    <header>
      <div className="header-show">
        <div className="logo-container">
          <img src={headerLogo} alt="Logo" />
        </div>
        <div className="menu-btn" onClick={clickFunction}>
          <img src={navBtn} alt="Menu" className="nav-btn" />
        </div>
      </div>

      <div className="header-menu">
        <div className="menu-overlay">
          <div className={`b1 ${blockClass}`}></div>
          <div className={`b2 ${blockClass}`}></div>
          <div className={`b3 ${blockClass}`}></div>
          <div className={`b4 ${blockClass}`}></div>
        </div>
        <div className="strips">
          <div className="strip one"></div>
          <div className="strip two"></div>
          <div className="strip three"></div>
        </div>
        <div className="menu">
          <ul className={menuClass}>
            <li className="menu-list-items">Pricing</li>
            <li className="menu-list-items">Work</li>
            <li className="menu-list-items">About</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;

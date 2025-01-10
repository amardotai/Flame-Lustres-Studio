import React, { useState } from "react";
import headerLogo from "../../public/logo.png";
import navBtn from "../../public/menu.png";

function Header() {
  const [blockClass, setBlockClass] = useState("block");
  const [menuClass, setMenuClass] = useState("menu-list");
  const [z, setZ] = useState(0);

  function clickFunction() {
    if (blockClass === "block") {
      setBlockClass("block-active");
      setMenuClass("menu-list-active");
      setZ(2);
    } else {
      setBlockClass("block");
      setMenuClass("menu-list");
      setZ(0);
    }
  }
  return (
    <header style={{ zIndex: z }}>
      <div className="header-show">
        <div className="logo-container">
          <img src={headerLogo} alt="Logo" />
        </div>
        <div className="menu-btn" onClick={clickFunction}>
          <img src={navBtn} alt="Burger" />
        </div>
      </div>
      <div className="header-menu">
        <div className="menu-overlay">
          <div className={`b1 ${blockClass}`}></div>
          <div className={`b2 ${blockClass}`}></div>
          <div className={`b3 ${blockClass}`}></div>
          <div className={`b4 ${blockClass}`}></div>
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

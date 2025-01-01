import React from "react";
import headerLogo from "../assets/logo.png";
function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={headerLogo} alt="Logo" />
      </div>
      <div className="nav-container">
        <a href="#">Pricing</a>
        <a href="#">Work</a>
        <a href="#">About</a>
      </div>
    </header>
  );
}

export default Header;

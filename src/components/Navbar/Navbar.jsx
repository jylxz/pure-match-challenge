import React from "react";
import Logo from "../../assets/logo.jpg";
import "./Navbar.css";
import CoinsIcon from "../../assets/coins.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={Logo} alt="pure-match-logo" />
        </div>
        <div className="navbar-items">
          <div className="navbar-item">Home</div>
          <div className="navbar-item">About</div>
          <div className="navbar-item">Blog</div>
          <div className="navbar-item donate-btn">
            <img src={CoinsIcon}></img>
            Donate
          </div>
          <button className="pure-match-btn">Get PureMatch</button>
        </div>
      </div>
    </nav>
  );
}

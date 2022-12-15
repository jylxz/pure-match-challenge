import React from "react";
import Container from "../Container";
import "./Footer.css";
import Logo from "../../assets/logo.jpg";
import FacebookIcon from "../../assets/Facebook.png";
import TwitterIcon from "../../assets/Twitter.png";
import InstaIcon from "../../assets/Instagram.png";
import LinkedIcon from "../../assets/LinkedIn.png";

export default function Footer() {
  return (
    <footer>
      <div className="footer-info">
        <div>
          <img src={Logo} className="footer-logo" />
        </div>
        <div>&#169; 2022 Pure Match</div>
        <div className="footer-socials">
          <button>
            <img src={FacebookIcon} alt="" />
          </button>
          <button>
            <img src={TwitterIcon} alt="" />
          </button>
          <button>
            <img src={InstaIcon} alt="" />
          </button>
          <button>
            <img src={LinkedIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="footer-content">
        <div>
          <h4 className="footer-content-heading">About</h4>
          <p className="footer-content-p">
            Pure Match is a free networking app for like-minded followers of
            Christ to connect, date, and socialize.
          </p>
        </div>
        <div>
          <h4 className="footer-content-heading">Our Mission</h4>
          <p className="footer-content-p">
            We’re on a mission to bring true followers of Christ together in a
            safe, fun, and innovative new networking app! And to transform
            single-hood into the exciting, enriching, and <b>FUN</b> season it
            was meant to be.
          </p>
        </div>
      </div>
      <nav className="footer-nav">
        <h4 className="footer-nav-heading">Navigation</h4>
        <div className="footer-nav-item">Home</div>
        <div className="footer-nav-item">About</div>
        <div className="footer-nav-item">Blog</div>
        <div className="footer-nav-item">Contact</div>
        <div className="footer-nav-item">Donate</div>
      </nav>
    </footer>
  );
}

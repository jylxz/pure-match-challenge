import React from "react";
import Container from "../Container";
import SuccessImage from "../../assets/SuccessImage.png";
import CarouselIcons from "../../assets/CarouselIcons.png";
import "./Success.css";

export default function Success() {
  return (
    <Container className="success-section">
      <div className="success-section-header">
        <h3 className="success-section-heading">SUCCESS STORIES</h3>
        <div className="success-section-btns">
          <button>←</button>
          <button>→</button>
        </div>
      </div>
      <div className="success-section-main">
        <div className="success-section-quote">
          <p style={{ fontSize: "4rem", margin: 0, fontWeight: 600 }}>"</p>
          <p className="success-quote">
            He started a conversation with me and our friendship grew so fast!
            Now we’re dating, which is wild to me because I got the app just to
            get to know people. I had no idea that God would bless me with such
            a cool boyfriend! Super thankful for this app and definitely
            encourage people to try it out because you never know how God could
            surprise you!
          </p>
          <p className="success-quote-author">- Chloe and George</p>
        </div>
        <div>
          <img src={SuccessImage} />
        </div>
      </div>
      <img src={CarouselIcons} />
    </Container>
  );
}

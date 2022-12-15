import React, { useEffect, useState } from "react";
import Container from "../Container";
import AppStoreLogo from "../../assets/AppStore.png";
import GooglePlayLogo from "../../assets/GooglePlay.png";
import IntroImage1 from "../../assets/IntroImage1.png";
import IntroImage2 from "../../assets/IntroImage2.png";
import "./Intro.css";

export default function Intro() {
  const [introImg, setIntroImg] = useState(IntroImage1);

  useEffect(() => {
    const autoplay = setTimeout(() => {
      if (introImg === IntroImage1) {
        setIntroImg(IntroImage2);
      } else {
        setIntroImg(IntroImage1);
      }
    }, 5000);

    return () => {
      clearTimeout(autoplay);
    };
  }, [introImg]);

  return (
    <Container>
      <div className="intro-section">
        <div className="intro-section-main">
          <h1 className="intro-section-heading">
            Connect, Date, and Socialize.
          </h1>
          <p className="intro-section-p">
            <b>Pure Match</b> is on a mission to bring like-minded followers of
            Christ together in a safe, innovative, and <b>FREE</b> networking
            app! Join us as we transform singlehood into the exciting,
            enriching, <b>FUN</b> season it was meant to be.
          </p>
          <button className="intro-support-btn">Support the app</button>
          <div className="app-store-btns">
            <button className="app-btn">
              <img src={AppStoreLogo} alt="App Store logo" />
            </button>
            <button className="app-btn">
              <img src={GooglePlayLogo} alt="Google Play logo" />
            </button>
          </div>
        </div>
        <div className="intro-section-image">
          <img src={introImg} key={introImg} className="intro-image" />
        </div>
      </div>
    </Container>
  );
}

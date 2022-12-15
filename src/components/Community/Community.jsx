import React from "react";
import Container from "../Container";
import CommunityImage from "../../assets/CommunityImage1.png";
import "./Community.css"

export default function Community() {
  return (
    <Container>
      <div className="community-section">
        <div>
          <img src={CommunityImage} alt="" srcset="" className="community-section-image"/>
        </div>
        <div className="community-section-main">
          <h2 className="community-section-heading">Connect as a community</h2>
          <p>
            Dating and marriage may not be the sole focus of discipleship, but
            we all need connection. As Christians, it’s important to have deep
            relationships with like-minded believers we trust and respect; our
            app facilities that.
          </p>
        </div>
      </div>
    </Container>
  );
}

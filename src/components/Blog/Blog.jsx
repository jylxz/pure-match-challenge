import React from "react";
import Container from "../Container";
import "./Blog.css";
import BlogItem from "./BlogItem";
import BlogImage1 from "../../assets/BlogImage1.png";
import BlogImage2 from "../../assets/BlogImage2.png";
import BlogImage3 from "../../assets/BlogImage3.png";

export default function Blog() {
  return (
    <Container>
      <div className="blog-section-header">
        <h1 className="blog-section-heading">Read our blog</h1>
        <p>
          Join our growing community of Pure Matchers and keep posted on
          development updates.
        </p>
      </div>
      <div className="blog-section-main">
        <BlogItem
          img={BlogImage2}
          tag="DEVELOPMENT"
          title="Updates and Rewards for Patience!"
          author="Shaela"
          date="Oct 29, 2021"
        />
        <BlogItem
          img={BlogImage3}
          tag="DEVELOPMENT"
          title="GOOD NEWS! (Server is up! Matches are happening!)"
          author="Pure Match Team"
          date="June 6, 2021"
        />
        <BlogItem
          img={BlogImage1}
          tag="COMMUNITY"
          title="Problem-Solving & Moving Forward"
          author="Pure Match Team"
          date="May 20, 2021"
        />
      </div>
      <div className="blog-btn-container">
        <button className="blog-btn">Load more stories</button>
      </div>
    </Container>
  );
}

import React from "react";
import "./BlogItem.css";

export default function BlogItem({ img, tag, title, author, date }) {
  return (
    <div className="blog-item">
      <img src={img}  className="blog-item-img"/>
      <div className="blog-item-content">
        <div className="blog-item-tag">{tag}</div>
        <h4 className="blog-item-title">{title}</h4>
        <div className="blog-item-details">
          <span className="blog-item-author">{author}</span>
          <span className="blog-item-separator">&#183;</span>
          <span className="blog-item-date">{date}</span>
        </div>
      </div>
    </div>
  );
}

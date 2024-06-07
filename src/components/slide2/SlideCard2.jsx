import React from "react";
import { Link } from "react-router-dom";
import "./SlideCar2.css";

function SlideCard2({ item }) {
  return (
    <Link to="/card">
     

      <div className="slide2-container">
        <div className="slide2-video">
          <video controls className="video-element">
            <source src={item.video}  />
          </video>
        </div>
        <div className="slide2-text">
          <div className="slide2-header">
            <p className="slide2-name">{item.title}</p>
            <div className="vertical-line"></div>
            <img src={item.logo} className="company-logo" />
          </div>
          <p className="slide2-quote">{item.desc}</p>
        </div>
      </div>
    </Link>
  );
}

export default SlideCard2;

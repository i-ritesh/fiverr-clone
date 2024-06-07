import React from "react";
import { Link } from "react-router-dom";
import "./SlideCar.css"

function SlideCard({ item }) {
  return (
    <Link to="/card">
      <div className="slide-card">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}

export default SlideCard;

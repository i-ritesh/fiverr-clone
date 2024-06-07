import React from "react";
import "./FeatureVideo.css";
import check from "./check.png";

function FeatureVideo() {
  return (
    <>
      <div className="feature-video">
        <div className="feature-video-container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="feature-video-title">
              <img src={check} alt="" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="feature-video-title">
              <img src={check} alt="" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="feature-video-title">
              <img src={check} alt="" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="feature-video-title">
              <img src={check} alt="" />
              Stick to your budget
            </div>
            <p>
              Find the right service for every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video
              src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
              controls
            ></video>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default FeatureVideo;

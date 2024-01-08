import React from "react";
import "./FearturesCard.css";
const FearturesCard = ({ feature }) => {
  const { title, description, icon } = feature;
  return (
    <div className="col-lg-3 col-sm-6 col-md-6">
      <div className="feature_box">
        <div className="feature_icon">
          <img src={icon} alt="icon" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="/" className="learn-more-btn">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default FearturesCard;

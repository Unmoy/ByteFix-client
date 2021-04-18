import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
  return (
    <div className="col-md-3 text-center review-card">
      <img
        style={{ height: "100px", marginBottom: "10px" }}
        src={`data:image/png;base64,${review.image.img}`}
        alt=""
      />

      <h4>{review.name}</h4>
      <br />
      <p>{review.comment}</p>
    </div>
  );
};

export default ReviewCard;

import React, { useEffect, useState } from "react";

import ReviewCard from "./ReviewsCard/ReviewCard";

const Reviews = () => {
  const [reviewDetails, setReviewDetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/showreviews")
      .then((res) => res.json())
      .then((data) => setReviewDetails(data));
  }, []);
  return (
    <section style={{ height: "500px" }}>
      <div className="text-center pt-5">
        <h1
          style={{
            color: "#00A4CCFF",
            fontFamily: "Montserrat",
            fontWeight: "600",
          }}
        >
          <strong>What People Say</strong>
        </h1>
      </div>
      <div className="d-flex ">
        <div className="row justify-content-center">
          {reviewDetails.map((review) => (
            <ReviewCard review={review}></ReviewCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

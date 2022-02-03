import React, { useEffect, useState } from "react";
import "./Reviews.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReviewCard from "./ReviewsCard/ReviewCard";

const Reviews = () => {
  const [reviewDetails, setReviewDetails] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  console.log(reviewDetails);
  useEffect(() => {
    fetch("https://cryptic-shelf-29443.herokuapp.com/showreviews")
      .then((res) => res.json())
      .then((data) => setReviewDetails(data));
  }, []);

  return (
    <section className="testimonial_wrapper ">
      <div className="testimonial_header">
        <h3>Our Clients Feedback</h3>
        <div className="bar"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="testimonial" style={{ width: "50%" }}>
          <Slider {...settings}>
            {reviewDetails.map((review) => {
              return <ReviewCard review={review} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

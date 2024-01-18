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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://byte-fix-server.vercel.app/showreviews"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setReviewDetails(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="testimonial_wrapper" id="testimonial">
      <div className="testimonial_header">
        <h3>Our Clients Feedback</h3>
        <div className="bar"></div>
        <p>
          Unlocking Insights: Navigating Client Perspectives for Continuous
          Improvement
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
            {reviewDetails?.map((review, index) => {
              return <ReviewCard key={index} review={review} />;
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

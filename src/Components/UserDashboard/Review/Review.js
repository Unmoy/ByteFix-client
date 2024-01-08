import React, { useState } from "react";
import "./Review.css";
import axios from "axios";
const Review = () => {
  const [reviews, setReviews] = useState("");
  const [image, setImage] = useState(null);
  // console.log(reviews);
  const handleBlur = (e) => {
    const userEvaluation = { ...reviews };
    userEvaluation[e.target.name] = e.target.value;
    setReviews(userEvaluation);
  };
  const handleImageUpload = (event) => {
    const uploadImage = new FormData();
    uploadImage.set("key", "7142aa65148ce83ee1a45db6c5c39cea");
    uploadImage.append("image", event.target.files[0]);
    axios.post("https://api.imgbb.com/1/upload", uploadImage).then((res) => {
      setImage(res.data.data.display_url);
      // console.log(res.data.data.display_url);
    });
  };
  const handleSubmit = (e) => {
    console.log(image, reviews.name, reviews.comment);
    const reviewDetails = {
      name: reviews.name,
      comment: reviews.comment,
      imageUrl: image,
    };
    fetch("https://byte-fix-server.vercel.app/addReviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    e.preventDefault();
  };

  return (
    <div className="container review_container">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <h2>We value your feedback!</h2>
          <form onSubmit={handleSubmit} className="review_form">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Name
              </label>
              <input
                onBlur={handleBlur}
                type="text"
                className="form-control"
                name="name"
                id="exampleFormControlInput1"
                placeholder="Type your name"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Comments
              </label>
              <textarea
                onBlur={handleBlur}
                className="form-control"
                name="comment"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type your Comment"
              ></textarea>
            </div>

            <div className="mb-3">
              <label for="formFileSm" className="form-label">
                Upload your image
              </label>
              <input
                onChange={handleImageUpload}
                className="form-control form-control-sm"
                type="file"
              />
            </div>
            <button
              type="submit"
              className={
                image ? "review_submit_btn" : "review_submit_btn btn disabled"
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;

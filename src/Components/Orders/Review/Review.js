import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Review.css";

const Review = () => {
  const [reviews, setReviews] = useState("");
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const userEvaluation = { ...reviews };
    userEvaluation[e.target.name] = e.target.value;
    setReviews(userEvaluation);
  };
  const handleChange = (e) => {
    const consumerImage = e.target.files[0];
    setFile(consumerImage);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", reviews.name);
    formData.append("comment", reviews.comment);

    fetch("https://cryptic-shelf-29443.herokuapp.com/addReviews", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="row ">
      <div className="col-md-2 ">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8  mt-3 mx-auto review-container p-3">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <h2 style={{ fontFamily: "railway", textAlign: "center" }}>
              TAKE A FEW MINUTES TO REVIEW US
            </h2>
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              onBlur={handleBlur}
              type="text"
              class="form-control"
              name="name"
              id="exampleFormControlInput1"
              placeholder="Type your name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Comment
            </label>
            <textarea
              onBlur={handleBlur}
              class="form-control"
              name="comment"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="formFileSm" class="form-label">
              Upload your image
            </label>
            <input
              onChange={handleChange}
              name="file"
              class="form-control form-control-sm"
              id="formFileSm"
              type="file"
            />
          </div>
          <button type="submit" class="btn btn-outline-warning">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;

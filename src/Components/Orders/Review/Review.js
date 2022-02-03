import React, { useState } from "react";
import "./Review.css";
import axios from "axios";
const Review = () => {
  const [reviews, setReviews] = useState("");
  const [image, setImage] = useState(null);
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
      console.log(res.data.data.display_url);
    });
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("imageUrl", image);
    formData.append("name", reviews.name);
    formData.append("comment", reviews.comment);
    fetch("http://localhost:5000/addReviews", {
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
    <div className="row ml-5">
      <div className="col-md-8 mt-3 mx-auto review-container p-3 ">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <h2 style={{ fontFamily: "railway", textAlign: "center" }}>
              TAKE A FEW MINUTES TO REVIEW US
            </h2>
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
              Comment
            </label>
            <textarea
              onBlur={handleBlur}
              className="form-control"
              name="comment"
              id="exampleFormControlTextarea1"
              rows="3"
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
          <button type="submit" className="btn btn-outline-warning">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;

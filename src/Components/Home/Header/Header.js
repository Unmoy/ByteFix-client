import React from "react";
import "./Header.css";
import bannerPic from "../../../images/headerImages/banner-pic.png";
const Header = () => {
  return (
    <div>
      <section className="container-fluid home">
        <div className="row d-flex align-items-center">
          <div className="content col-md-12 col-lg-6">
            <h1>World’s Leading AI & Machine Learning Company</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              ducimus quis tenetur sed accusantium quos est enim autem saepe
              eveniet!
            </p>
            <a href="/" className="discover_btn">
              discover more
            </a>
          </div>

          <div className="image col-md-12 col-lg-6">
            <img src={bannerPic} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

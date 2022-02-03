import React from "react";
import "./Header.css";
import bannerPic from "../../../images/headerImages/banner-pic.png";
const Header = () => {
  return (
    <div>
      <section className="container-fluid home">
        <div className="row align-items-center">
          <div class="content col-md-12 col-lg-6">
            <h1>World’s Leading AI & Machine Learning Company</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              ducimus quis tenetur sed accusantium quos est enim autem saepe
              eveniet!
            </p>
            <a href="/" class="discover_btn">
              discover more
            </a>
          </div>

          <div class="image col-md-12 col-lg-6">
            <img src={bannerPic} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

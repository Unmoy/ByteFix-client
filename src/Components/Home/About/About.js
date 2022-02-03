import React from "react";
import "./About.css";
import aboutImage from "../../../images/About/about-pic.png";
const About = () => {
  return (
    <div>
      <section className="container-fluid about_wrapper">
        <div className="row align-items-center">
          <div class="image col-md-12 col-lg-6">
            <img src={aboutImage} alt="" />
          </div>
          <div class="col-md-12 col-lg-6 about_content">
            <span>About Us</span>
            <h2>Engaging New Audiences Through Smart Approach</h2>
            <div className="bar2"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Nullam quis ante. Etiam sit amet orci eget eros faucibus
              tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
              sodales sagittis magna. Sed consequat, leo eget bibendum sodales,
              augue velit cursus nunc.Donec vitae sapien ut libero venenatis
              faucibus tempus.
            </p>
            <a href="/" class="discover_btn">
              discover more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

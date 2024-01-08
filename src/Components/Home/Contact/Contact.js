import React from "react";
import "./Contact.css";
import image from "../../../images/newsletter/newsletter.png";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container-fluid newsletter">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="newsletter_image">
              <img src={image} alt="newsletter_image" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="newsletter_content">
              <h2>Start your free trial</h2>
              <form className="newsletter_form">
                <input
                  type="text"
                  className="newsletter_input"
                  placeholder="Enter your business email here"
                />
                <button> Sign Up free</button>
              </form>
              <p>
                Test out the Machine Learning features for 14 days, no credit
                card required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

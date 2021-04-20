import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="exclusive-bg">
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5">
          <p
            style={{
              color: "white",
              textAlign: "center",
              fontFamily: "railway",
              fontSize: "35px",
            }}
          >
            SIGN UP FOR EXCLUSIVE UPDATES AND
            <br />
            OFFERS FROM THE BYTEFIX TEAM
          </p>
          <form class="input-group mb-3 text-center">
            <input
              type="text"
              class="form-control bg-transparent border-success text "
              placeholder="Enter your email here*"
            />
            <button
              class="btn btn-outline-warning btn"
              type="button"
              id="button-addon2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

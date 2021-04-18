import React from "react";
import "./ServiceDetails.css";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import Services from "../Services/Services";

const ServiceDetails = ({ service }) => {
  return (
    <div className="col-md-4 text-center card-design">
      <div>
        <img
          style={{ height: "60px" }}
          className="mb-3"
          src={`data:image/png;base64,${service.image.img}`}
        />
        <h5 style={{ fontFamily: "Railway", fontWeight: "bold" }}>
          {service.name}
        </h5>
        <p className="text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, fuga.
        </p>
        <Link to={"/service/" + service._id}>
          <button className="link-btn"> Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;

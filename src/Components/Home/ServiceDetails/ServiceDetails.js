import React from "react";
import "./ServiceDetails.css";
import { Link } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  // const { name, imageUrl, description, _id } = service;
  return (
    <div className="col-lg-4 col-sm-6 col-md-6 d-flex justify-content-center">
      <div className="service_box">
        <div className="service_icon">
          <img src={service?.imageUrl} alt="icon" />
        </div>
        <h2>{service?.name}</h2>
        <p className="text-secondary">
          {service?.description.substring(0, 90)}...
        </p>
        <Link className="text-decoration-none" to={"service/" + service?._id}>
          <p className="book_now_btn">Book Now</p>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;

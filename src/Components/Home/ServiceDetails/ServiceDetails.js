import React from "react";
import "./ServiceDetails.css";
import { Link } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  return (
    <div className="col-md-4">
      <div className="text-center card-design">
        <div>
          <img
            style={{ height: "60px" }}
            className="mb-3 service-icon"
            src={`data:image/png;base64,${service.image.img}`}
          />
          <h5 style={{ fontFamily: "Railway", fontWeight: "bold" }}>
            {service.name}
          </h5>
          <p className="text-secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
            fuga.
          </p>
          <Link className="text-decoration-none" to={"/service/" + service._id}>
            <div className="btn_div">
              <button className="link-btn">Book Now</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;

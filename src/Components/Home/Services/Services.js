import React from "react";
import "./Services.css";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import { useEffect } from "react";
import { useState } from "react";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-shelf-29443.herokuapp.com/showservice")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);
  return (
    <section className="bg-image" id="services">
      <div className="text-center pt-5">
        <h2 style={{ color: "yellow", fontFamily: "Railway" }}>
          <strong>SERVICES</strong>
        </h2>
        <h4 style={{ color: "#00A4CCFF", fontFamily: "Railway" }}>
          We offer a full range of repair services provided by an experienced
          and specialized team
        </h4>
      </div>

      <div className="container d-flex justify-content-center ">
        <div className="row w-100">
          {servicesData.map((service) => (
            <ServiceDetails service={service}></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

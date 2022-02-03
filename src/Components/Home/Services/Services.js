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
    <section className="services_wrapper" id="services">
      <div className="text-center pt-5">
        <h2>SERVICES</h2>
        <h4>
          We offer a full range of repair services provided by an experienced
          and specialized team
        </h4>
      </div>
      <div className="container">
        <div className="row">
          {servicesData.map((service) => (
            <ServiceDetails service={service}></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

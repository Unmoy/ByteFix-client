import React from "react";
import "./Services.css";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import { useEffect } from "react";
import { useState } from "react";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    fetch("https://byte-fix-server.vercel.app/showservice")
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);
  return (
    <section className="services_wrapper" id="services">
      <div className="text-center pt-5">
        <h2>SERVICES</h2>
        <p>
          We offer a full range of repair services provided by an experienced
          and specialized team
        </p>
      </div>
      <div className="container">
        <div className="row">
          {servicesData.map((service, index) => (
            <ServiceDetails key={index} service={service}></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react";
import "./Services.css";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import { useEffect } from "react";
import { useState } from "react";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://byte-fix-server.vercel.app/showallservice"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setServicesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
          {servicesData?.map((service, index) => (
            <ServiceDetails key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

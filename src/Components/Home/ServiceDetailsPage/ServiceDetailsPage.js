import React, { useEffect, useState } from "react";
import "./ServiceDetailsPage.css";
import { useParams, useNavigate } from "react-router-dom";
import image1 from "../../../images/serviceDetails/img1.png";
import image2 from "../../../images/serviceDetails/img2.png";
import image3 from "../../../images/serviceDetails/img3.png";
import image4 from "../../../images/serviceDetails/img4.png";

const ServiceDetailsPage = () => {
  const [serviceType, setServiceType] = useState({});
  const navigate = useNavigate();
  const {
    name,
    description,
    price,
    subHeading1,
    subDescription1,
    subHeading2,
    subDescription2,
    subHeading3,
    subDescription3,
  } = serviceType;
  const { id } = useParams();
  // console.log(serviceType);
  useEffect(() => {
    window.scroll(0, 0);
    fetch(`https://byte-fix-server.vercel.app/getservice/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceType(data));
  }, [id]);
  const toComponentB = () => {
    navigate("/bookservice", { state: { id: id } });
  };
  return (
    <div>
      <div className="service_details_header">
        <h2>Services Details</h2>
      </div>

      <div className="container ">
        <div className="row align-items-center service_details_wrapper">
          <div className="col-lg-6">
            <div className="service_details_description">
              <span>Cost: ${price}.00</span>
              <h3>{name}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="col-lg-6 service_details_image">
            <img src={image1} alt="service_deatils_image" />
          </div>
        </div>
        <div className="row align-items-center service_details_wrapper">
          <div className="col-lg-6 service_details_image">
            <img src={image2} alt="service_deatils_image" />
          </div>
          <div className="col-lg-6">
            <div className="service_details_description">
              <h3>{subHeading1}</h3>
              <p>{subDescription1}</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center service_details_wrapper">
          <div className="col-lg-6">
            <div className="service_details_description">
              <h3>{subHeading2}</h3>
              <p>{subDescription2}</p>
            </div>
          </div>
          <div className="col-lg-6 service_details_image">
            <img src={image3} alt="service_deatils_image" />
          </div>
        </div>
        <div className="row align-items-center service_details_wrapper">
          <div className="col-lg-6 service_details_image">
            <img src={image4} alt="service_deatils_image" />
          </div>
          <div className="col-lg-6">
            <div className="service_details_description pb-5">
              <h3>{subHeading3}</h3>
              <p>{subDescription3}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="service_details_book_now_btn">
        <button
          className="link"
          onClick={() => {
            toComponentB();
          }}
        >
          Place your order now
        </button>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;

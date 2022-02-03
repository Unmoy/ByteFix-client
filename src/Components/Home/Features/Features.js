import React from "react";
import "./Features.css";
import FearturesCard from "./FearturesCard";
import icon1 from "../../../images/featuresicon/icon1.png";
import icon2 from "../../../images/featuresicon/icon2.png";
import icon3 from "../../../images/featuresicon/icon3.png";
import icon4 from "../../../images/featuresicon/icon4.png";
const featuresinfo = [
  {
    title: "Robotic Automation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae fugiat cumque aperiam molestias ",
    icon: icon1,
  },
  {
    title: "Cognitive Automation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae fugiat cumque aperiam molestias ",
    icon: icon2,
  },
  {
    title: "Cognitive Engagement",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae fugiat cumque aperiam molestias ",
    icon: icon3,
  },
  {
    title: "Security & Surveillance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae fugiat cumque aperiam molestias ",
    icon: icon4,
  },
];
const Features = () => {
  return (
    <div className="">
      <div className="feature_header">
        <span>What We Offer</span>
        <h2>Our Featured Solutions</h2>
        <div className="bar"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="row w-100">
          {featuresinfo.map((feature, index) => (
            <FearturesCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;

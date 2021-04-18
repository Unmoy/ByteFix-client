import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faClock,
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer-top ">
      <div className="container d-flex justify-content-center">
        <div className="row align-items-center mt-5 pt-5">
          <div className="col-md-4 text-white ">
            <h1 className="footer-logo">ByteFix</h1>
            <p
              style={{
                fontFamily: "Railway",
                fontSize: "20px",
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et,
              officiis repellendus libero omnis labore sunt iure voluptatum odit
              vel consequuntur
            </p>
            <p>Our team</p>
          </div>
          <div className="col-md-5 text-white contact">
            <h3 style={{ color: "#ffeb00", fontFamily: "Railway" }}>Contact</h3>
            <p>
              <FontAwesomeIcon
                style={{ color: "#0066FF", marginRight: "10px" }}
                icon={faMapMarkedAlt}
              />
              5604 Willow Crossing Ct, Clifton, VA, 20124
            </p>
            <p>
              <FontAwesomeIcon
                style={{ color: "#0066FF", marginRight: "10px" }}
                icon={faPhone}
              />
              +1-800-1234567
            </p>
            <p>
              <FontAwesomeIcon
                style={{ color: "#0066FF", marginRight: "10px" }}
                icon={faEnvelope}
              />
              noreply@unmoy.com
            </p>
            <p>
              <FontAwesomeIcon
                style={{ color: "#0066FF", marginRight: "10px" }}
                icon={faClock}
              />
              Mon-Fri: 7:00am-7:00pm
              <br />
              Sat-Sun: 10:00am-5:00pm
            </p>
          </div>
          <div className="col-md-3">
            <h3 style={{ color: "#ffeb00", fontFamily: "Railway" }}>
              Follow Us
            </h3>
            <FontAwesomeIcon className="social" icon={faFacebookF} />
            <FontAwesomeIcon className="social" icon={faInstagram} />
            <FontAwesomeIcon className="social" icon={faGooglePlusG} />
          </div>
        </div>
      </div>
      <div
        style={{ color: "#ffeb00", fontFamily: "Railway", fontSize: "15px" }}
        className="text-center"
      >
        <p>Copyright {new Date().getFullYear()} All Rights Reserved by Unmoy</p>
      </div>
    </footer>
  );
};

export default Footer;

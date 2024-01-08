import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer_wrapper">
      <div className="line">
        <div className="chain">
          <h1 className="footer-logo">ByteFix</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vero
            sit, impedit vitae neque iste doloribus blanditiis alias. Quo,
            ducimus!
          </p>
        </div>
        <div className="chain">
          <h3>
            Office
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>Lorem, ipsum</p>
          <p>Lorem ipsum dolor sit</p>
          <p className="email_id">byteFix221@outlook.com</p>
          <p>+91 - 925852136</p>
        </div>
        <div className="chain">
          <h3>
            Links
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>
        <div className="chain">
          <h3>
            Newsletter
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form>
            <FontAwesomeIcon icon={faEnvelope} className="icon1" />
            <input type="text" placeholder="Enter you email" />
            <button>
              <FontAwesomeIcon icon={faArrowRight} className="icon2" />
            </button>
          </form>
          <div className="social_icons_wrapper">
            <FontAwesomeIcon icon={faFacebookF} className="social_icon" />
            <FontAwesomeIcon icon={faInstagram} className="social_icon" />
            <FontAwesomeIcon icon={faGooglePlusG} className="social_icon" />
            <FontAwesomeIcon icon={faWhatsapp} className="social_icon" />
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Copyright @2021 ByteFix. All Rights Reserved by Unmoy
      </p>
    </footer>
  );
};

export default Footer;

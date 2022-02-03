import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "./HappyUsers.css";
import banner from "../../../images/countbanner.png";
const DreamHome = () => {
  const [focus, setFocus] = useState(false);

  return (
    <div className="counter_wrapper">
      <div className="counter_title">
        <h1>We Always Try To Understand Users Expectation</h1>
        <div className="bar"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
          obcaecati.
        </p>
      </div>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-6 col-sm-6 col-md-3 count_container">
            <CountUp
              start={focus ? 0 : null}
              end={180}
              duration={1}
              redraw={true}
              suffix="K"
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span className="count_number" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="count_text">Downloads</span>
          </div>
          <div className="col-6 col-sm-6 col-md-3 count_container">
            <CountUp
              start={focus ? 0 : null}
              end={20}
              duration={1}
              redraw={true}
              suffix="K"
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span className="count_number" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="count_text">Feedback</span>
          </div>
          <div className="col-6 col-sm-6 col-md-3 count_container">
            <CountUp
              start={focus ? 0 : null}
              end={500}
              duration={1}
              redraw={true}
              suffix="+"
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span className="count_number" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="count_text">Workers</span>
          </div>
          <div className="col-6 col-sm-6 col-md-3 count_container">
            <CountUp
              start={focus ? 0 : null}
              end={70}
              duration={1}
              redraw={true}
              suffix="+"
            >
              {({ countUpRef }) => (
                <VisibilitySensor
                  onChange={(isVisible) => {
                    if (isVisible) {
                      setFocus(true);
                    }
                  }}
                >
                  <span className="count_number" ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
            <br />
            <span className="count_text">Contributers</span>
          </div>
        </div>
      </div>
      <div className="count_bg_img">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default DreamHome;

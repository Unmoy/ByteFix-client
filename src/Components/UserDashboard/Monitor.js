import React from "react";
import "./monitor.css";
import Analytics from "./Analytics.jsx";
import Profile from "./Profile";
const Monitor = () => {
  return (
    <div className="monitor">
      <div className="grid">
        <div className="row__one">
          <Analytics />
        </div>
        <div className="row__two">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Monitor;

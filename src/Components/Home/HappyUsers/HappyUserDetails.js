import React from "react";
import "./HappyUserDetails.css";

const HappyUserDetails = ({ user }) => {
  return (
    <div className="col-md-3 text-center">
      <div className="back-design">
        <h4> {user.name}</h4>
        <br />
        <h2> {user.number}</h2>
      </div>
    </div>
  );
};

export default HappyUserDetails;

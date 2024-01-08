import React, { useEffect, useState } from "react";
import EditService from "../../Admin/EditService/EditService";
import "./ManageServices.css";
const ManageServices = () => {
  const [allservices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("https://byte-fix-server.vercel.app/showservice")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div className="container manageservices">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <h2
            style={{
              textAlign: "center",
              fontSize: "36px",
              margin: "20px",
            }}
          >
            Manage/Delete Services
          </h2>
          <EditService allservices={allservices}></EditService>
        </div>
      </div>
    </div>
  );
};

export default ManageServices;

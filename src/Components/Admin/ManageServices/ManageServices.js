import React, { useEffect, useState } from "react";

import EditService from "../../Admin/EditService/EditService";
import Sidebar from "../../Orders/Sidebar/Sidebar";

const ManageServices = () => {
  const [allservices, setAllServices] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-shelf-29443.herokuapp.com/showservice")
      .then((res) => res.json())
      .then((data) => setAllServices(data));
  }, []);
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8">
        <EditService allservices={allservices}></EditService>
      </div>
    </div>
  );
};

export default ManageServices;

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import Sidebar from "../../Sidebar/Sidebar";
import ServiceListDetails from "../ServiceListDetails/ServiceListDetails";

const ServiceList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-shelf-29443.herokuapp.com/showOrderedService", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setServiceList(data));
  }, []);
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-6">
        <ServiceListDetails services={serviceList}></ServiceListDetails>
      </div>
    </div>
  );
};

export default ServiceList;

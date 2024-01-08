import React, { useEffect, useState } from "react";
import ServiceListDetails from "../ServiceListDetails/ServiceListDetails";
import { useAuth } from "../../../contexts/AuthContext";
import "./ServiceList.css";
const ServiceList = () => {
  const [serviceList, setServiceList] = useState([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    fetch("https://byte-fix-server.vercel.app/showOrderedService", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: currentUser.user_email }),
    })
      .then((res) => res.json())
      .then((data) => setServiceList(data));
  }, [currentUser.user_email]);

  return (
    <div className="container services_list_user">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <h2>My Services Status</h2>
          <ServiceListDetails services={serviceList}></ServiceListDetails>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;

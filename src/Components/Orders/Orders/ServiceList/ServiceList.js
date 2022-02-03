import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import Sidebar from "../../Sidebar/Sidebar";
import ServiceListDetails from "../ServiceListDetails/ServiceListDetails";

const ServiceList = () => {
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const [serviceList, setServiceList] = useState([]);

  // useEffect(() => {
  //   fetch("https://cryptic-shelf-29443.herokuapp.com/showOrderedService", {
  //     method: "POST",
  //     headers: { "content-type": "application/json" },
  //     body: JSON.stringify({ email: loggedInUser.email }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setServiceList(data));
  // }, []);
  return (
    <div className="row ml-5 pl-5">
    
      <div className="col-md-6 mx-auto">
        {/* <ServiceListDetails services={serviceList}></ServiceListDetails> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "100px",
          }}
        >
          Services
        </div>
      </div>
    </div>
  );
};

export default ServiceList;

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import Sidebar from "../../Sidebar/Sidebar";
import ServiceListDetails from "../ServiceListDetails/ServiceListDetails";

const ServiceList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [serviceList, setServiceList] = useState([]);
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((data) => setServiceList(data));
  }, []);
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-6">
        Functionality needs to be added
        {/* {serviceList.map((sevicestatus) => (
          <ServiceListDetails sevicestatus={sevicestatus}></ServiceListDetails>
        ))} */}
      </div>
    </div>
  );
};

export default ServiceList;

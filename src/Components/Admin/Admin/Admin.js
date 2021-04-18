import React, { useEffect, useState } from "react";
import Sidebar from "../../Orders/Sidebar/Sidebar";
import BookedOrder from "../BookedOrder/BookedOrder";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/showorders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="row">
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-8">
        <BookedOrder orders={orders}></BookedOrder>
      </div>
    </div>
  );
};

export default Admin;

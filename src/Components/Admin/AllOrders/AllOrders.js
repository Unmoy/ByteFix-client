import React, { useEffect, useState } from "react";
import BookedOrder from "../BookedOrder/BookedOrder";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://byte-fix-server.vercel.app/showorders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <h2
            style={{
              fontFamily: "Poppins",
              textAlign: "center",
              fontSize: "36px",
              margin: "20px",
            }}
          >
            Update Status
          </h2>
          <BookedOrder orders={orders}></BookedOrder>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import "./BookService.css";

import { useForm } from "react-hook-form";
import Payment from "../Payment/Payment";

const BookService = () => {
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [serviceType, setServiceType] = useState({});
  const { register, handleSubmit } = useForm();
  const [shipping, setShipping] = useState({});

  const onSubmit = (data) => {
    setShipping(data);
    console.log(data);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/getservice/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceType(data));
  }, [id]);

  const handlePaymentSuccess = (paymentId) => {
    const orderDetails = {
      ...loggedInUser,
      servicetype: {
        name: serviceType.name,
        price: serviceType.price,
        email: loggedInUser.email,
        address: shipping.address,
        phone: shipping.phone,
      },
      paymentId,
      OrderTime: new Date(),
    };
    console.log(orderDetails);
    fetch("http://localhost:5000/addorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Order placed Successfully");
      });
  };

  return (
    <section>
      <div className=" row">
        <div className="col-md-2 ">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-10 mt-3  d-flex order-container pb-3 pt-3  ">
          <div className="col-md-5 mx-auto">
            <label>Service-Type:</label>
            <input
              disabled
              className="form-control mb-3"
              defaultValue={serviceType.name}
            />
            <label>Total Cost:</label>
            <input
              disabled
              className="form-control mb-3"
              defaultValue={serviceType.price}
            />
            <label>Email:</label>
            <input
              disabled
              className="form-control mb-3"
              defaultValue={loggedInUser.email}
            />
            <form onBlur={handleSubmit(onSubmit)}>
              <label>Address:</label>
              <input
                className="form-control mb-3"
                {...register("address", { required: true })}
              />
              <label>Phone:</label>
              <input
                className="form-control mb-3"
                {...register("phone", { required: true })}
              />

              {/* <button type="submit" class="btn btn-outline-warning">
                Submit
              </button> */}
            </form>
          </div>
          <div className="col-md-5 mx-auto ">
            <Payment handlePayment={handlePaymentSuccess}></Payment>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookService;

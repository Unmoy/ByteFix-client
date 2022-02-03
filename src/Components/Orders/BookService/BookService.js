import React, { useEffect, useState } from "react";
import "./BookService.css";
import { useForm } from "react-hook-form";
import Payment from "../Payment/Payment";
import { useAuth } from "../../contexts/AuthContext";
import { useLocation } from "react-router-dom";
import creditCardImage from "../../../images/creditcard.png";
const BookService = () => {
  const [serviceType, setServiceType] = useState({});
  const { register, handleSubmit } = useForm();
  const [shipping, setShipping] = useState({});
  const { currentUser } = useAuth();
  const onSubmit = (data) => {
    setShipping(data);
  };
  const location = useLocation();

  useEffect(() => {
    console.log(location.state.id);
    fetch(
      `https://cryptic-shelf-29443.herokuapp.com/getservice/${location.state.id}`
    )
      .then((res) => res.json())
      .then((data) => setServiceType(data));
  }, [location.state.id]);

  const handlePaymentSuccess = (paymentId) => {
    const orderDetails = {
      ...currentUser,
      servicetype: {
        name: serviceType.name,
        price: serviceType.price,
        email: currentUser.user_email,
        address: shipping.address,
        phone: shipping.phone,
      },
      paymentId,
      OrderTime: new Date(),
    };

    fetch("https://cryptic-shelf-29443.herokuapp.com/addorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Submitted");
      });
  };

  return (
    <section className="book d-flex align-items-center justify-content-around">
      <div className="row book_order_wrapper d-flex align-items-center justify-content-around">
        <div className="col-md-5 order_recap">
          <div className="creditCardImage">
            <img src={creditCardImage} alt="creditCardImage" />
          </div>
          <h3>Order Recap</h3>
          <hr />
          <label>Service-Type:</label>
          <span>{serviceType.name}</span>
          <label>Total Cost:</label>
          <span>${serviceType.price}.00</span>
          <label>Email:</label>
          <span>{currentUser.user_email}</span>
        </div>
        <div className="col-md-7">
          <h3>Billing Address</h3>
          <hr />
          <form onBlur={handleSubmit(onSubmit)} className="billing">
            <div className="billings_card">
              <label>State/Province:</label>
              <input
                className="form-control"
                {...register("state", { required: true })}
              />
              <label>Mobile No:</label>
              <input
                className="form-control"
                {...register("phone", { required: true })}
              />
              <span>Please enter a valid number incase of emergency</span>
            </div>
            <div className="billings_card">
              <label>Street Address:</label>
              <input
                className="form-control"
                {...register("address", { required: true })}
              />
              <label>City:</label>
              <input
                className="form-control"
                {...register("city", { required: true })}
              />
              <span>Not available outside Asia/Pacific</span>
            </div>
          </form>
          <div className="">
            <h3>Card Details</h3>
            <hr />
            <Payment handlePayment={handlePaymentSuccess}></Payment>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookService;

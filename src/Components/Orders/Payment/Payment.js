import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCard from "./PaymentCard/PaymentCard";

const stripePromise = loadStripe(
  "pk_test_51IeEm3SFRxaovTZjqESsgEmjQ4tNRFsHQo2yyz2NfaHQlTepebIinVM3SUrZTHbtBUnGCK8vrUq90DQl6nYNB7GB00BhinNabx"
);

const Payment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentCard handlePayment={handlePayment}></PaymentCard>
    </Elements>
  );
};

export default Payment;

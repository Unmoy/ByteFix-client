import React from "react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import "./SplitCard.css";
const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: "16px",
          color: "#000",
          letterSpacing: "0.025em",
          "::placeholder": {
            color: "grey",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const SplitCard = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod.id);
    }
  };

  return (
    <div className="split_card">
      <form onSubmit={handleSubmit}>
        <label>
          Card number
          <CardNumberElement options={options} />
        </label>
        <label>
          Expiration date
          <CardExpiryElement options={options} />
        </label>
        <br />
        <div className="labelcvc">
          <label>
            CVC
            <CardCvcElement options={options} />
          </label>
        </div>
        <div>
          {paymentError && (
            <div class="alert alert-danger" role="alert">
              {paymentError}
            </div>
          )}
          {paymentSuccess && (
            <div class="alert alert-success" role="alert">
              Your payment was Successful. Headover to
              <Link to="/dashboard">Dashboard</Link> for all details.
            </div>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default SplitCard;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

import { formatPrice } from "../../Utils/helpers";

import { useCartContext } from "../../Context/cart_context";
import { useUserContext } from "../../Context/user_context";

// ::: Load Stripe from ENV Variable (KEY) :::
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
// ::: Test Card -> 4242 4242 4242 4242 (Default US - No Authentication) - CVC: any 3 digits :::

const CheckoutForm = () => {
  const history = useHistory();
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const { myUser } = useUserContext();

  // ::: Stripe Stuff :::
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };
  const createPaymentIntent = async () => {
    try {
      // Mandamos DATA a Serverless Function (Conecta a Stripe)
      const { data } = await axios.post(
        "/.netlify/functions/create-payment-intent",
        JSON.stringify({ cart, shipping_fee, total_amount })
      );
      // Recibimos:
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    createPaymentIntent();
    // eslint-disable-next-line
  }, []);

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      setTimeout(() => {
        clearCart();
        history.push("/");
      }, 10000);
    }
  };

  // ::::::::::::::::::::
  //    Payment Form
  // ::::::::::::::::::::
  return (
    <div>
      {succeeded ? (
        <article className="article-success">
          <h4>Thank you,</h4>
          <h4>
            Your payment was <span>successful!</span>{" "}
          </h4>
          <h4>Redirecting to homepage in 10 seconds...</h4>
        </article>
      ) : (
        <article className="article-pre-payment">
          <h4>Hello, {myUser && myUser.name}</h4>
          <h3>
            Your Total is{" "}
            <span>{formatPrice(shipping_fee + total_amount)}</span>
          </h3>
          <p>
            Test Card Number: 4242 4242 4242 4242 (Default US) <br /> CVC: Any 3
            digits{" "}
          </p>
        </article>
      )}
      <form onSubmit={handleSubmit} id="payment-form">
        <CardElement
          id="card-element"
          onChange={handleChange}
          options={cardStyle}
        ></CardElement>
        <button disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>

        {/* Show ERROR when PROCESSING Payment */}
        {error && (
          <div className="card-error" role="alert">
            Payment Error: <br /> <span>{error}</span>
          </div>
        )}

        {/* Show SUCCESS when COMPLETED Payment */}
        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Payment Succeeded!
        </p>
      </form>
    </div>
  );
};
// ::: Main Export :::
const StripeCheckout = () => {
  return (
    <Wrapper>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 96vw;
  margin: 0 auto;
  form {
    width: 90vw;
    margin: 0 auto;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 2.1rem;
  }
  input {
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }
  .article-pre-payment {
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-family: var(--FontWork);
    margin-bottom: 1rem;
    color: var(--ColorBlack-85);
    h4 {
      letter-spacing: 1.2px;
      font-weight: 300;
      font-size: 1.3rem;
    }
    h3 {
      letter-spacing: 1px;
      font-weight: 300;
      font-size: 1.3rem;
      span {
        color: var(--ColorSemiCrimson);
        font-size: 1.6rem;
      }
    }
    p {
      width: 90%;
      font-size: 0.9rem;
      font-weight: 300;
      color: var(--ColorBlack-7);
      letter-spacing: 0.55px;
      margin-bottom: -0.5rem;
    }
  }
  .article-success {
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    font-family: var(--FontWork);
    margin-bottom: 1rem;
    color: var(--ColorBlack-85);
    h4 {
      font-size: 1.2rem;
      letter-spacing: 1px;
      font-weight: 300;
      span {
        color: var(--ColorSemiCrimson);
        font-weight: 400;
      }
    }
  }
  .hidden {
    display: none;
  }
  .result-message {
    font-family: var(--FontWork);
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 0.7px;
    margin-top: 1rem;
    color: green;
  }
  .card-error {
    font-family: var(--FontWork);
    color: var(--ColorBlack-85);
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 0.5px;
    margin-top: 1rem;
    span {
      font-size: 0.85rem;
      color: var(--ColorSemiCrimson);
    }
  }

  #card-element {
    border-radius: 4px 4px 0 0;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }

  #payment-request-button {
    margin-bottom: 2rem;
  }
  /* Buttons and links */
  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }
  button:hover {
    filter: contrast(115%);
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }
  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }
  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }
  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }
  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
    }
  }
`;

export default StripeCheckout;

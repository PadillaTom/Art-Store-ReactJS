require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

// Access:
// .netlify/functions/create-payment-intent

// Function:
exports.handler = async function (event, context) {
  // IF Existe DATA en la Function (Enviada por el StripeCheckout - cartContext):
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);

    // Totals:
    const calculateOrderAmount = () => {
      return shipping_fee + total_amount;
    };

    // Connect to Stripe:
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: calculateOrderAmount(),
        currency: "usd",
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: error.message }),
      };
    }
  }
  // IF NO DATA received:
  return {
    statusCode: 200,
    body: "Create Payment Intent -  No Data in event.body",
  };
};

// ::: Netlify Functions :::
// Connect to the Netlify Server and run this Function
// We will use this to Send Data from Client - Netlify - Stripe - Netlify - Client.
// The safest way with only a Frontend (Serverless Functions)

// ::: How to Access :::
//  DOMAIN_NAME/.netlify/functions/FUNCTION_NAME

// :::::::::::::::::::::::::::
// :::: Usage with Stripe ::::
// :::::::::::::::::::::::::::

// 1) When Component mounts (StripeCheckout - CheckoutForm)
//    Send DATA to Stripe (useCartContext Data)
// 2) Create that function (create-payment-intent.js)
// 3) Inside StripeCheckout use AXIOS to POST given DATA (cartContext)

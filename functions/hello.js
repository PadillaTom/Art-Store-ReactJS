// ::: Netlify Functions :::
// Connect to the Netlify Server and run this Function
// We will use this to Send Data from Client - Netlify - Stripe - Netlify - Client.
// The safest way with only a Frontend (Serverless Functions)

// ::: How to Access :::
//  domain/.netlify/functions/hello

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "Hello",
  };
};

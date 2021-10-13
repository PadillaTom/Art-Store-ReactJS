// Netlify Functions: Connect to the Netlify Server
// Send Data from Client - Netlify - Stripe - Netlify - Client (Safest way)

// Access
//  domain/.netlify/functions/hello

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "Hello",
  };
};

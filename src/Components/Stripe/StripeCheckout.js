import React from "react";
import styled from "styled-components";

//  ::: Checkout Form :::
const CheckoutForm = () => {
  return <h2>Hello from StripeCheckout</h2>;
};

//  ::: Checkout Form :::

// ::: Main Export :::
const StripeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm></CheckoutForm>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default StripeCheckout;

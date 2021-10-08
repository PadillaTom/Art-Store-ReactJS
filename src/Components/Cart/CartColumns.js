import React from "react";
import styled from "styled-components";

const CartColumns = () => {
  return (
    <Wrapper>
      <div className="content">
        <h5>Item</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
        <h5>Subtotal</h5>
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    padding-top: 3rem;
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--ColorBlack-85);
        font-family: var(--FontWork);
        font-size: 1rem;
        font-weight: 400;
        letter-spacing: 0.9px;
      }
    }
    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
  @media (min-width: 980px) {
    padding-top: 11rem;
    .content h5 {
      font-size: 1.2rem;
    }
    hr {
      margin-top: 1.4rem;
      margin-bottom: 3.3rem;
    }
  }
`;

export default CartColumns;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useCartContext } from "../Context/cart_context";
import { CartContent } from "../Components/Cart";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper>
        <div className="empty">
          <h2>Your Cart is Empty.</h2>
          <Link to="/products" className="btn-fill">
            Shop Now
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <CartContent></CartContent>
    </Wrapper>
  );
};

// Nav and Footer Heights:
// Mobile: 10rem;
// 768px: 11.3rem
// 980px: 11.5rem;

const Wrapper = styled.main`
  display: grid;
  place-items: center;
  text-align: center;
  height: calc(100vh - 10rem);
  .empty {
    h2 {
      margin-bottom: 3rem;
      font-family: var(--FontWork);
      color: var(--ColorBlack-85);
      font-size: 1.7rem;
      font-weight: 300;
      letter-spacing: 1.1px;
    }
  }

  @media (min-width: 768px) {
    height: calc(100vh - 11.3rem);
  }
  @media (min-width: 980px) {
    margin-top: 5.5rem;
    height: calc(100vh - 11.5rem);
  }
`;

export default CartPage;

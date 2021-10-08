import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CartColumns, CartItem, CartTotals } from "./";
import { useCartContext } from "../../Context/cart_context";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className="section-center">
      <CartColumns />
      {cart.map((cartItem) => {
        return <CartItem key={cartItem.id} {...cartItem}></CartItem>;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="continue-btn">
          Continue Shopping
        </Link>
        <button type="button" className="empty-btn" onClick={clearCart}>
          Empty Cart
        </button>
      </div>
      <CartTotals></CartTotals>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  min-height: calc(100vh - 10rem);
  .link-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    margin-top: 2rem;
  }
  .link-container > * {
    padding: 0.7rem 1rem;
    letter-spacing: 0.6px;
  }
  .continue-btn {
    font-family: var(--FontWork);
    font-size: 0.92rem;
    text-align: center;
    font-weight: 300;
    background: var(--ColorPiel);
    color: var(--ColorWhite);
    box-shadow: var(--ShadowLight);
    transition: var(--MainTransition);
  }
  .empty-btn {
    font-weight: 300;
    font-family: var(--FontWork);
    font-size: 0.92rem;
    background: var(--ColorWhite);
    color: var(--ColorBlack);
    border: 1px solid var(--ColorBlack);
    transition: var(--MainTransition);
    cursor: pointer;
  }
  .continue-btn:hover {
    box-shadow: var(--ShadowDark);
  }
  .empty-btn:hover {
    box-shadow: var(--ShadowLight);
  }

  hr {
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    min-height: calc(100vh - 11.3rem);
    .link-container {
      width: 80%;
    }
  }
  @media (min-width: 950px) {
    .link-container > * {
      font-size: 1.1rem;
    }
  }
  @media (min-width: 980px) {
    min-height: calc(100vh - 11.5rem);
  }
`;
export default CartContent;

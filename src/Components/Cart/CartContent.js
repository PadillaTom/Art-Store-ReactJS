import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CartColumns, CartItem, CartTotals } from "./";
import { useCartContext } from "../../Context/cart_context";

import { OpXWhenVisible, OpYWhenVisible } from "../../Animations";

const CartContent = () => {
  const { cart, clearCart, total_items } = useCartContext();
  return (
    <Wrapper>
      <OpYWhenVisible setDelay={0.2} setDuration={0.4}>
        <h3>You have {total_items} items on your Cart</h3>
      </OpYWhenVisible>
      <CartColumns />
      {cart.map((cartItem) => {
        return (
          <OpXWhenVisible setDuration={0.15} setDelay={0.1} setXAxis={"-5%"}>
            <CartItem key={cartItem.id} {...cartItem}></CartItem>
          </OpXWhenVisible>
        );
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
  width: 95%;
  margin: 0 auto;
  padding-top: 2rem;
  min-height: calc(100vh - 10rem);
  h3 {
    width: 90%;
    margin: 0 auto;
    font-family: var(--FontWork);
    letter-spacing: 2px;
    font-size: 2rem;
    font-weight: 200;
    text-align: center;
    margin-bottom: 2.3rem;
  }
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
    padding-top: 2rem;
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
  @media (min-width: 964px) {
    padding-top: 10rem;
    h3 {
      font-size: 2.6rem;
      letter-spacing: 3px;
    }
  }
  @media (min-width: 980px) {
    min-height: calc(100vh - 11.5rem);
  }
`;
export default CartContent;

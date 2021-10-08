import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { CartColumns, CartItem, CartTotals } from "./";
import { useCartContext } from "../../Context/cart_context";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  console.log(cart);
  return (
    <Wrapper>
      <CartColumns />
      {cart.map((cartItem) => {
        return <CartItem key={cartItem.id} {...cartItem}></CartItem>;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          Continue Shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          Empty Cart
        </button>
      </div>
      <CartTotals></CartTotals>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
export default CartContent;

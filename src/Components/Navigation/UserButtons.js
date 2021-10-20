import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";

import { useProductsContext } from "../../Context/products_context";
import { useCartContext } from "../../Context/cart_context";
import { useUserContext } from "../../Context/user_context";

const UserButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items, clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <UserBtns className="userBtnsContainer">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart></FaShoppingCart>
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>
      {myUser ? (
        <button
          className="auth-btn"
          type="button"
          onClick={() => {
            clearCart();
            logout({ returnTo: window.location.origin });
          }}
          style={{ color: "crimson" }}
        >
          Logout <FaUserMinus></FaUserMinus>
        </button>
      ) : (
        <button
          className="auth-btn"
          type="button"
          onClick={loginWithRedirect}
          style={{ color: "black" }}
        >
          Login <FaUserPlus></FaUserPlus>
        </button>
      )}
    </UserBtns>
  );
};

const UserBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  width: 14rem;
  .cart-btn {
    color: var(--FontColorGrey);
    font-family: var(--FontWork);
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    transition: var(--TransitionFast);
    &:hover {
      color: var(--ColorBlack);
      .cart-value {
        background: var(--ColorSemiCrimson);
        color: white;
      }
    }
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      font-size: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--ColorSemiCrimson);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.7rem;
    color: var(--ColorWhite);
    padding: 12px;
    font-weight: 600;
    transition: var(--TransitionFast);
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    color: var(--FontColorGrey);
    font-family: var(--FontWork);
    font-size: 1.3rem;
    svg {
      margin-left: 7px;
      font-size: 1.6rem;
    }
    transition: var(--TransitionFast);
    &:hover {
      color: var(--ColorBlack);
    }
  }
  @media (min-width: 720px) {
    padding-top: 4rem;
    width: 25rem;
    .cart-btn {
      font-size: 2rem;
    }
    .cart-container {
      svg {
        font-size: 2.5rem;
      }
    }
    .cart-value {
      width: 1.9rem;
      height: 1.9rem;
      font-size: 0.97rem;
    }
    .auth-btn {
      font-size: 2.1rem;
      svg {
        font-size: 2.5rem;
      }
    }
  }
  @media (min-width: 980px) {
    padding-top: 0;
    width: 15rem;
    .cart-btn {
      font-size: 1.1rem;
    }
    .cart-container {
      svg {
        font-size: 1.5rem;
      }
    }
    .cart-value {
      width: 1rem;
      height: 1rem;
      font-size: 0.75rem;
    }
    .auth-btn {
      font-size: 1.2rem;
      svg {
        font-size: 1.5rem;
      }
    }
  }
`;
export default UserButtons;

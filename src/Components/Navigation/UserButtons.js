import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";

import { useProductsContext } from "../../Context/products_context";

const UserButtons = () => {
  const { closeSidebar } = useProductsContext();
  return (
    <UserBtns className="userBtnsContainer">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart></FaShoppingCart>
          <span className="cart-value">12</span>
        </span>
      </Link>
      <button className="auth-btn" type="button">
        Login <FaUserPlus></FaUserPlus>
      </button>
    </UserBtns>
  );
};

const UserBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
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
`;
export default UserButtons;
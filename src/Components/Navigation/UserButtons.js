import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserButtons = () => {
  return (
    <UserBtns className="userBtnsContainer">
      <Link to="/cart" className="cart-btn">
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
    color: var(--ColorWhite);
    font-family: var(--FontWork);
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    transition: var(--TransitionFast);
    &:hover {
      color: crimson;
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
    background: var(--ColorWhite);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.7rem;
    color: var(--ColorBlack);
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
    color: var(--ColorWhite);
    font-family: var(--FontWork);
    font-size: 1.3rem;
    svg {
      margin-left: 7px;
      font-size: 1.6rem;
    }
    transition: var(--TransitionFast);
    &:hover {
      color: var(--ColorSemiCrimson);
    }
  }
`;
export default UserButtons;

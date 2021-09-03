import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { AmountButtons } from "./";

const AddToCart = ({ product }) => {
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increaseAmount = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decreaseAmount = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  // Return:
  return (
    <AddToCartContainer>
      <div className="colors">
        <span>Colors:</span>
        <div>
          {colors.map((color, index) => {
            return (
              <button
                key={index}
                style={{ background: color }}
                className={`${
                  mainColor === color ? "color-btn active" : "color-btn"
                }`}
                onClick={() => {
                  setMainColor(color);
                }}
              >
                {mainColor === color ? <FaCheck></FaCheck> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increase={increaseAmount}
          decrease={decreaseAmount}
        ></AmountButtons>
        <Link to="/cart" className="btn btn-fill">
          Add To Cart
        </Link>
      </div>
    </AddToCartContainer>
  );
};

const AddToCartContainer = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 8rem 1fr;
    align-items: center;
    margin-bottom: 0.6rem;
    span {
      font-family: var(--FontWork);
      letter-spacing: 0.5px;
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--FontColorDark);
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.65;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--ColorWhite);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0rem;
  }
  @media (min-width: 768px) {
    .colors span {
      font-size: 1.4rem;
    }
    .color-btn {
      width: 1.7rem;
      height: 1.7rem;
    }
  }
  @media (min-width: 1150px) {
    margin-top: 1rem;
    .btn-container {
      padding-top: 0rem;
    }
  }
`;
export default AddToCart;

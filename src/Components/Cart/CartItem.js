import React from "react";
import { FaTrash } from "react-icons/fa";
import styled from "styled-components";

import { AmountButtons } from "../SingleProduct";

import { formatPrice } from "../../Utils/helpers";
import { useCartContext } from "../../Context/cart_context";

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeFromCart, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <p className="color">
            Color: <span style={{ background: color }}></span>
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons
        className="amount-btns"
        amount={amount}
        increase={increase}
        decrease={decrease}
      ></AmountButtons>
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => {
          removeFromCart(id);
        }}
      >
        <FaTrash></FaTrash>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  height: 6rem;
  display: grid;
  grid-template-columns: 200px auto auto;
  justify-items: center;
  align-items: center;
  margin-bottom: 2.5rem;
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  .title {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: 6rem;
    object-fit: cover;
  }
  h5 {
    font-family: var(--FontWork);
    font-weight: 300;
    font-size: 0.95rem;
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .name {
    letter-spacing: 1px;
    color: var(--ColorBlack);
    font-weight: 400;
  }
  .color {
    padding: 0.2rem 0rem;
    color: var(--ColorBlack-85);
    font-family: var(--FontWork);
    font-weight: 300;
    font-size: 0.95rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.45rem;
      height: 0.45rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: 50%;
    }
  }
  .price-small {
    color: var(--ColorSemiCrimson);
    font-family: var(--FontWork);
    letter-spacing: 1px;
    font-weight: 400;
    font-size: 0.8rem;
  }
  .amount-btns {
    width: auto;
    button {
      width: 1.5rem;
      height: 1rem;
      font-size: 0.7rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
  .remove-btn {
    color: var(--ColorBlack-85);
    background: transparent;
    border: transparent;
    width: auto;
    height: 4rem;
    font-size: 0.85rem;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    grid-template-columns: 316px 1fr 1fr 1fr 3rem;
    height: 10rem;
    .price-small {
      display: none;
    }
    .subtotal {
      display: block;
      color: var(--ColorSemiCrimson);
      font-family: var(--FontWork);
      letter-spacing: 1px;
      font-weight: 400;
      font-size: 1rem;
    }
    .price {
      display: block;
      color: var(--ColorBlack-85);
      font-family: var(--FontWork);
      letter-spacing: 1px;
      font-weight: 400;
      font-size: 0.9rem;
    }
    .name {
      font-size: 1.5rem;
      font-weight: 300;
    }
    .color {
      font-size: 1.2rem;
      letter-spacing: 0.7px;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }

    img {
      height: 10rem;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
  @media (min-width: 980px) {
    height: 12rem;
    .title {
      grid-template-columns: 160px auto;
      gap: 1.5rem;
    }
    img {
      width: 100%;
      height: 12rem;
    }
    .price {
      font-size: 1.2rem;
    }
    .subtotal {
      font-size: 1.2rem;
    }
    .remove-btn {
      font-size: 1.3rem;
    }
  }
`;

export default CartItem;

import React from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ amount, increase, decrease }) => {
  return (
    <AmountBtnsContainer className="amount-btns">
      <button
        className="amount-btn"
        type="button"
        onClick={() => {
          decrease();
        }}
      >
        <FaMinus></FaMinus>
      </button>
      <h2 className="amount">{amount}</h2>
      <button
        className="amount-btn"
        type="button"
        onClick={() => {
          increase();
        }}
      >
        <FaPlus></FaPlus>
      </button>
    </AmountBtnsContainer>
  );
};

const AmountBtnsContainer = styled.div`
  display: grid;
  width: 10rem;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  padding: 0.3rem;
  background: var(--ColorPielLight-7);
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .amount {
    font-family: var(--FontWork);
    font-weight: 500;
    font-size: 0.7rem;
  }
`;

export default AmountButtons;

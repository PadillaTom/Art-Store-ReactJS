import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { formatPrice } from "../../Utils/helpers";

const ListCard = ({ product }) => {
  const { id, image, name, price, description } = product;
  return (
    <Wrapper key={id}>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h5>{formatPrice(price)}</h5>
        <p>{description.substring(0, 140)}...</p>
        <Link to={`/products/${id}`} className="listCard-btn">
          Details
        </Link>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.article`
  img {
    width: 100%;
    height: 12rem;
    display: block;
    object-fit: cover;
    margin-bottom: 0.6rem;
  }
  h4 {
    font-family: var(--FontWork);
    font-size: 1.7rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: capitalize;
    color: var(--ColorBlack-85);
  }
  h5 {
    font-family: var(--FontLora);
    font-weight: 300;
    font-size: 1rem;
    color: var(--ColorBlack-7);
    letter-spacing: 1.2px;
  }
  p {
    padding-top: 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--FontColorDark);
    font-family: var(--FontWork);
    font-size: 1rem;
    letter-spacing: 0.7px;
    font-weight: 300;
  }
  .listCard-btn {
    cursor: pointer;
    font-family: var(--FontWork);
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: 400;
    text-transform: uppercase;
    color: var(--ColorSemiCrimson);
    transition: var(--MainTransition);
  }
  .listCard-btn:hover {
    color: red;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.3rem;
    img {
      height: 15rem;
    }
  }
  @media (min-width: 1150px) {
    img {
      height: 18rem;
    }
    h4 {
      font-size: 2.2rem;
    }
    h5 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1.3rem;
    }
    .listCard-btn {
      font-size: 1.3rem;
    }
  }
  @media (min-width: 1300px) {
    h5 {
      font-size: 1.6rem;
    }
    p {
      font-size: 1.5rem;
    }
    .listCard-btn {
      font-size: 1.4rem;
    }
  }
`;
export default ListCard;

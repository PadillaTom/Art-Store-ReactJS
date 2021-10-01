import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { formatPrice } from "../../Utils/helpers";

const GridCard = ({ product }) => {
  const { image, name, id, price } = product;
  return (
    <ProductContainer>
      <div className="container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="link">
          Details
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </ProductContainer>
  );
};
const ProductContainer = styled.article`
  width: 95%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  .container {
    position: relative;
    transition: var(--MainTransition);
  }
  img {
    width: 100%;
    height: 20rem !important;
    display: block;
    object-fit: cover;
    transition: var(--MainTransition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--MainTransition);
    opacity: 0;
    cursor: pointer;
    font-family: var(--FontWork);
    font-size: 1rem;
    letter-spacing: 0.7px;
    font-weight: 300;
    text-transform: uppercase;
    color: var(--ColorBlack);
  }
  .container:hover img {
    opacity: 0.25;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    width: 95%;
    margin: 0 auto;
    margin-top: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  footer h5 {
    font-family: var(--FontWork);
    font-size: 1.8rem;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: capitalize;
    color: var(--ColorBlack-85);
    margin-bottom: 0.5rem;
  }
  footer p {
    font-family: var(--FontLora);
    font-weight: 300;
    font-size: 1rem;
    letter-spacing: 2px;
    color: var(--ColorBlack-7);
    letter-spacing: 1.2px;
  }

  @media (min-width: 768px) {
    width: 100%;
    img {
      height: 24rem !important;
    }
    .link {
      font-size: 1.5rem;
      letter-spacing: 3.5px;
    }
    footer {
      margin-top: 1.5rem;
      h5 {
        font-size: 2rem;
      }
      p {
        font-size: 1.3rem;
      }
    }
  }
  @media (min-width: 980px) {
    img {
      height: 27rem !important;
    }
    footer h5 {
      font-size: 2.2rem;
    }
    footer p {
      font-size: 1.5rem;
    }
  }
`;

export default GridCard;

import React from "react";
import styled from "styled-components";

import { formatPrice } from "../../Utils/helpers";
import { useCartContext } from "../../Context/cart_context";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  return (
    <Wrapper>
      <article>
        <h5>
          Subtotal: <span>{formatPrice(total_amount)}</span>
        </h5>
        <p>
          Shipping Fee: <span>{formatPrice(shipping_fee)}</span>
        </p>
        <hr />
        <h4>
          Order Total: <span>{formatPrice(total_amount + shipping_fee)}</span>
        </h4>
      </article>
      <Link to="/checkout" className="checkout-btn">
        Checkout
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 3rem 0rem;
  display: grid;
  place-items: center;
  article {
    border: 1px solid var(--ColorBlack-35);
    padding: 2rem 3rem;
    margin-bottom: 2rem;
  }
  h4,
  h5,
  p {
    font-family: var(--FontWork);
    display: grid;
    grid-template-columns: 175px 1fr;
  }
  h5 {
    font-size: 0.95rem;
    letter-spacing: 0.7px;
    font-weight: 600;
  }
  p {
    margin: 0.7rem 0rem;
    text-transform: capitalize;
    font-weight: 400;
  }
  h4 {
    margin-top: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.9px;
  }
  .checkout-btn {
    background: var(--ColorBlack);
    color: var(--ColorWhite);
    font-weight: 300;
    font-family: var(--FontWork);
    font-size: 1rem;
    letter-spacing: 1px;
    padding: 0.5rem 0.7rem;
    transition: var(--MainTransition);
    border: 1px solid var(--ColorWhite);
  }
  .checkout-btn:hover {
    color: var(--ColorBlack);
    background: var(--ColorWhite);
    border: 1px solid var(--ColorBlack);
  }
  @media (min-width: 768px) {
    justify-content: flex-end;
    article {
      padding: 2.5rem 4rem;
      margin-bottom: 2.4rem;
    }
    h5 {
      font-size: 1.3rem;
      font-weight: 500;
    }
    p {
      font-size: 1.2rem;
      font-weight: 300;
    }
    h4 {
      font-size: 1.4rem;
      font-weight: 600;
    }
    .checkout-btn {
      font-size: 1.2rem;
      padding: 1rem 1.7rem;
      letter-spacing: 1.2px;
    }
  }
`;

export default CartTotals;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <ErrorContainer className="page-height100-mobile">
      <section>
        <h1>404</h1>
        <h3>Page not found</h3>
        <Link className="btn" to="/">
          Home
        </Link>
      </section>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.main`
  background: var(--ColorPiel);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
    color: var(--ColorWhite);
  }
  h3 {
    text-transform: capitalize;
    font-family: var(--FontWork);
    font-size: 1.3rem;
    letter-spacing: 0.5px;
    color: var(--ColorWhite);
    font-weight: 300;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;

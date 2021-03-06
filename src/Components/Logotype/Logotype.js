import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logotype = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <h1>
          Art <span>&</span> Store
        </h1>
      </Link>
    </LogoContainer>
  );
};
const LogoContainer = styled.nav`
  h1 {
    font-size: 1.7rem;
    letter-spacing: 1px;
    font-family: var(--FontWork);
    font-weight: 200;
    span {
      font-size: 2.2rem;
      margin: 0rem -0.3rem;
      color: crimson;
      font-family: var(--FontLora);
    }
  }
  @media (min-width: 720px) {
    h1 {
      font-size: 2.4rem;
    }
  }
  @media (min-width: 980px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
export default Logotype;

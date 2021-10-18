import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer className="section-center">Loading...</LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  width: 90%;
  height: calc(100vh - 10rem);
  display: grid;
  place-items: center;
  font-family: var(--FontWork);
  color: var(--ColorBlack-85);
  font-size: 3.2rem;
  font-weight: 300;
  letter-spacing: 1.1px;
  @media (min-width: 768px) {
    height: calc(100vh - 11.3rem);
  }
  @media (min-width: 980px) {
    margin-top: 5.5rem;
    height: calc(100vh - 11.5rem);
  }
`;

export default Loading;

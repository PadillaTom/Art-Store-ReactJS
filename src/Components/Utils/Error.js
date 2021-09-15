import React from "react";
import styled from "styled-components";

const Error = () => {
  return (
    <ErrorContainer className="section-center">
      There was an Error
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  width: 90%;
  height: 20vh;
  display: grid;
  place-items: center;
  font-family: var(--FontWork);
  color: var(--ColorBlack-85);
  font-size: 3.2rem;
  font-weight: 300;
  letter-spacing: 1.1px;
`;

export default Error;

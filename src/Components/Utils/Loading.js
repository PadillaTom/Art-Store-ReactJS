import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer className="section-center">Loading...</LoadingContainer>
  );
};

const LoadingContainer = styled.div`
  padding: 2rem 0rem;
  font-family: var(--FontWork);
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.9px;
`;

export default Loading;

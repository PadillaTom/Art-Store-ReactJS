import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return <Wrapper>Loading ...</Wrapper>;
  }
  if (error) {
    return <Wrapper>{error.message}</Wrapper>;
  }
  return <>{children}</>;
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: var(--FontWork);
  color: var(--ColorBlack-85);
  font-size: 3.2rem;
  font-weight: 300;
  letter-spacing: 1.1px;
`;

export default AuthWrapper;

import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <h5>
        &copy; {new Date().getFullYear()} Website by:
        <a
          href="https://www.padillatomas.com/"
          target="_blank"
          rel="noreferrer"
        >
          Tomas Padilla
        </a>
        .
      </h5>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--ColorWhite);
  text-align: center;
  font-family: var(--FontWork);
  letter-spacing: 0.7px;
  border-top: 1px solid var(--ColorFooterGrey);
  a {
    font-family: var(--FontLato);
    color: var(--ColorBlack);
    letter-spacing: 1.5px;
    font-weight: 500;
    margin-left: 0.7rem;
  }
  h5 {
    color: var(--ColorBlack-7);
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`;

export default Footer;

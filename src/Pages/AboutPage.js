import React, { useState, useEffect } from "react";
import styled from "styled-components";

import aboutUs from "../Assets/aboutUs.jpeg";

const AboutPage = () => {
  // Window Width:
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const { width, height } = windowDimensions;
  let isDesk = false;
  if (width >= 1150) {
    isDesk = true;
  }
  return (
    <AboutContainer
      className={isDesk ? "page-height100-desk" : ".page-height100-mobile"}
    >
      <div className="description">
        <h1>About Us</h1>
        <h2>
          Style <br />&<br /> Design
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque non
          debitis aliquam inventore repellat quisquam. Non voluptas molestiae
          accusamus vitae!
        </p>
      </div>
      <img src={aboutUs} alt="About Us"></img>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  width: 87%;
  margin: 0 auto;
  display: grid;
  gap: 4rem;
  text-align: center;
  padding-bottom: 3rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  .description {
    h1 {
      padding: 2.5rem 0rem;
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      font-weight: 100;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 1.15rem;
      color: var(--FontColorGrey);
    }
    h2 {
      font-family: var(--FontLora);
      font-size: 3rem;
      letter-spacing: 1.3px;
      font-weight: 100;
      color: var(--ColorBlack);
    }
    p {
      padding: 2rem 0rem;
      color: var(--FontColorDark);
      font-family: var(--FontWork);
      font-size: 1.3rem;
      letter-spacing: 0.7px;
      font-weight: 300;
      width: 85%;
      margin: 0 auto;
    }
  }

  @media (min-width: 1150px) {
    grid-template-columns: 1fr 1fr;
    place-items: center;
    .description {
      h1 {
        padding: 1.2rem 0rem;
      }
    }
  }
`;
export default AboutPage;

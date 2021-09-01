import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import homeBg3 from "../../Assets/homeBg3.jpg";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="img-container">
        <div className="bgimage-overlay"></div>
        <img src={homeBg3} alt="Art and Store" className="bgimage"></img>
      </div>
      <div className="hero-info-container">
        <h2>Art & Store</h2>
        <h1>Transform your spaces</h1>
        <Link to="/products" className="btn-fill">
          Explore
        </Link>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  width: 100%;
  height: 95vh;
  position: relative;
  .img-container {
    width: 100%;
    height: 100%;
  }
  .bgimage-overlay {
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }
  .bgimage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .hero-info-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: var(--ColorWhite);
    z-index: 200;
    h2 {
      font-family: var(--FontLora);
      font-size: 1rem;
      font-weight: 100;
    }
    h1 {
      font-family: var(--FontWork);
      font-size: 3.5rem;
      letter-spacing: 1px;
      font-weight: 200;
      margin-top: -0.5rem;
      margin-bottom: 2.5rem;
    }
  }

  @media (min-width: 768px) {
    height: 80vh;
    .hero-info-container {
      h2 {
        font-size: 1.5rem;
      }
      h1 {
        font-size: 6rem;
        margin-bottom: 5rem;
      }
    }
    .btn-fill {
      padding: 2rem 4rem;
      font-size: 2.5rem;
    }
  }
`;

export default Hero;

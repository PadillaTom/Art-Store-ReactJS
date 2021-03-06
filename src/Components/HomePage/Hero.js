import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import homeBg3 from "../../Assets/homeBg3.jpg";
import { transitions, varsHomeText } from "../../Animations/animations";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="img-container">
        <div className="bgimage-overlay"></div>
        <img src={homeBg3} alt="Art and Store" className="bgimage"></img>
      </div>
      <motion.div
        className="hero-info-container"
        initial="from"
        animate="to"
        variants={varsHomeText}
        transition={transitions.homeText}
      >
        <h2>Art & Store</h2>
        <h1>Transform your spaces</h1>
        <Link to="/products" className="btn-fill">
          Explore
        </Link>
      </motion.div>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  width: 100%;
  height: calc(100vh - 5rem);
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
    height: calc(100vh - 12rem);
    .hero-info-container {
      h2 {
        font-size: 1.4rem;
      }
      h1 {
        font-size: 5rem;
        margin-bottom: 5rem;
      }
    }
    .btn-fill {
      padding: 1.2rem 3rem;
      font-size: 1.8rem;
    }
  }
  @media (min-width: 980px) {
    // Fixed Navbar:
    padding-top: 5rem;
    height: calc(100vh - 2rem);
    .hero-info-container {
      padding-top: 3.7%;
      h2 {
        font-size: 1.5rem;
      }
      h1 {
        font-size: 6rem;
        letter-spacing: 4px;
        margin-bottom: 4rem;
      }
    }
    .btn-fill {
      padding: 1.2rem 3rem;
      font-size: 2rem;
    }
  }
  @media (min-width: 1150px) {
    .hero-info-container {
      h1 {
        padding-top: 2rem;
      }
    }
  }
`;

export default Hero;

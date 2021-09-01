import React from "react";
import styled from "styled-components";

import { services } from "../../Utils/constants";

const Services = () => {
  return (
    <ServicesContainer>
      <div className="section-center">
        <article className="header">
          <h3>Custom Furniture</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            officia iure, nemo quae laboriosam, vel amet delectus pariatur modi
            sit repudiandae, cum eveniet iste accusamus optio a nam temporibus
            eos.
          </p>
        </article>
        <div className="services-center">
          {services.map((singleService) => {
            const { id, icon, title, text } = singleService;
            return (
              <article className="service" key={id}>
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  padding: 5rem 0;
  background: var(--ColorPielLight);
  h3,
  h4 {
    color: var(--ColorBlack-85);
  }
  .header {
    text-align: center;
  }
  .header h3 {
    margin-bottom: 2rem;
    font-size: 2.1rem;
    font-family: var(--FontLora);
    letter-spacing: 1px;
    font-weight: 300;
  }
  .header p {
    width: 95%;
    line-height: 1.5;
    color: var(--ColorBlack-7);
    font-family: var(--FontWork);
    font-weight: 300;
    margin: 0 auto;
  }
  .services-center {
    margin-top: 3rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--ColorPielService);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: 1.5rem;
    box-shadow: var(--ShadowLighter);
    h4 {
      text-transform: uppercase;
      font-family: var(--FontWork);
      letter-spacing: 0.8px;
      color: var(--ColorBlack-1);
      opacity: 0.8;
    }
    p {
      color: var(--ColorBlack-5);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--ColorPielLight);
    color: var(--ColorPiel);
    box-shadow: var(--ShadowLight);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      z-index: 100;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;

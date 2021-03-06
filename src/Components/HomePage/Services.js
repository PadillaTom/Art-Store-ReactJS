import React from "react";
import styled from "styled-components";

import { services } from "../../Utils/constants";
import { OpYWhenVisible, OpacityOneWhenVisible } from "../../Animations";

const Services = () => {
  return (
    <ServicesContainer>
      <div className="section-center">
        <OpacityOneWhenVisible>
          <article className="header">
            <h3>Custom Furniture</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo officia iure, nemo quae laboriosam, vel amet delectus
              pariatur modi sit repudiandae, cum eveniet iste accusamus optio a
              nam temporibus eos.
            </p>
          </article>
        </OpacityOneWhenVisible>
        <div className="services-center">
          {services.map((singleService) => {
            const { id, icon, title, text } = singleService;
            return (
              <OpYWhenVisible key={id} setDuration={0.5}>
                <article className="service">
                  <span className="icon">{icon}</span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </article>
              </OpYWhenVisible>
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
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media screen and (min-width: 768px) {
    .services-center {
      grid-template-columns: repeat(2, 1fr);
      .service {
        width: 95%;
        h4 {
          padding: 0.5rem 0rem;
        }
      }
    }
  }
  @media (min-width: 980px) {
    .header h3 {
      font-size: 2.6rem;
    }
    .header p {
      font-size: 1.2rem;
    }
    .service {
      span {
        width: 5rem;
        height: 5rem;
      }
      h4 {
        font-size: 1.2rem;
      }
      p {
        font-size: 1.15rem;
      }
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      z-index: 100;
    }
  }

  @media (min-width: 1150px) {
    padding: 0;
    .header {
      padding: 3.5rem 0rem;
      h3 {
        font-size: 3rem;
      }
      p {
        font-size: 1.4rem;
      }
    }
    .services-center {
      grid-template-columns: repeat(3, 1fr);
    }
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;

import React from "react";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <ContactContainer>
      <div className="section-center">
        <h3>Join Our Newsletter</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aut
            quod placeat fugit excepturi libero molestiae aperiam, fuga debitis
            in porro eos voluptatum hic numquam et nisi maxime beatae illum.
            Corrupti quisquam molestiae quae dolores!
          </p>
          <form className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="enter e-mail"
            />
            <button className="submit-btn" type="submit">
              Suscribe
            </button>
          </form>
        </div>
      </div>
    </ContactContainer>
  );
};
const ContactContainer = styled.section`
  padding: 5rem 0;
  text-align: center;
  h3 {
    text-transform: none;
    font-size: 2.1rem;
    letter-spacing: 1px;
    font-weight: 300;
  }
  p {
    padding-top: 1rem;
    line-height: 2;
    max-width: 45em;
    font-family: var(--FontWork);
    font-weight: 300;
    color: var(--ColorBlack-7);
    margin: 0.5rem 0rem;
  }
  .contact-form {
    margin-top: 1rem;
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 1.8px solid var(--ColorBlack);
  }
  .form-input {
    border-right: none;
    color: var(--ColorBlack);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--ColorBlack-35);
    letter-spacing: 0.5px;
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--ColorBlack);
    text-transform: capitalize;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: var(--MainTransition);
    color: var(--ColorWhite);
  }
  .submit-btn:hover {
    color: var(--ColorBlack);
    background: var(--ColorWhite);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Newsletter;

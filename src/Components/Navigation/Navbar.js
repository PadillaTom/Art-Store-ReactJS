import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import { links } from "../../Utils/constants";
import { UserButtons } from "../Navigation";

const Nav = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h1>
              Art <span>&</span> Store
            </h1>
          </Link>
          <button className="nav-toggle" type="button">
            <AiOutlineMenu></AiOutlineMenu>
          </button>
        </div>
        <ul className="nav-links">
          {links.map((singleLink) => {
            const { id, name, url } = singleLink;
            return (
              <li key={id}>
                <Link to={url}>{name}</Link>
              </li>
            );
          })}
        </ul>
        <UserButtons></UserButtons>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--ColorBlack);
  color: var(--ColorWhite);
  .nav-center {
    width: 87%;
    margin: 0 auto;
    max-width: var(--WidthMax);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 2rem;
      letter-spacing: 1px;
      font-family: var(--FontWork);
      font-weight: 200;
      span {
        font-size: 2.5rem;
        margin: 0rem -0.3rem;
        color: crimson;
        font-family: var(--FontLora);
      }
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--ColorWhite);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .userBtnsContainer {
    display: none;
  }
  @media (min-width: 1150px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--ColorSocialIcons);
        font-family: var(--FontWork);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: 0.5px;
        padding: 0.5rem;
        border-bottom: 1px solid transparent;
        transition: var(--MainTransition);
        opacity: 0.7;
        &:hover {
          border-bottom: 1px solid var(--ColorWhite);
          color: var(--ColorWhite);
          opacity: 1;
        }
      }
    }
    .userBtnsContainer {
      display: grid;
    }
  }
`;

export default Nav;

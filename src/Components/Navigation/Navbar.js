import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

import { links } from "../../Utils/constants";
import { UserButtons } from "../Navigation";
import { Logotype } from "../Logotype";

import { useProductsContext } from "../../Context/products_context";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Logotype></Logotype>
          <button className="nav-toggle" type="button" onClick={openSidebar}>
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
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--ColorWhite);
  color: var(--ColorBlack);
  .nav-center {
    width: 87%;
    margin: 0 auto;
    max-width: var(--WidthMax);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--ColorBlack);
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
    height: 10rem;
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
        color: var(--ColorBlack-85);
        font-family: var(--FontWork);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: 0.5px;
        padding: 0.5rem;
        border-bottom: 1px solid transparent;
        transition: var(--MainTransition);
        opacity: 0.7;
        &:hover {
          border-bottom: 1px solid var(--ColorBlack);
          color: var(--ColorBlack);
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

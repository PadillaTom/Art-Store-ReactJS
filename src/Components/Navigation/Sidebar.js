import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import { Logotype } from "../Logotype";
import { UserButtons } from "../Navigation";
import { links } from "../../Utils/constants";

import { useProductsContext } from "../../Context/products_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  return (
    <SidebarContainer>
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <Logotype></Logotype>
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes></FaTimes>
          </button>
        </div>
        <ul className="links">
          {links.map((singleLink) => {
            const { id, name, url } = singleLink;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {name}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout" onClick={closeSidebar}>
              checkout
            </Link>
          </li>
        </ul>
        <UserButtons></UserButtons>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  text-align: center;
  /* display: none; */
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 87%;
    margin: 0 auto;
    height: 6rem;
  }
  .close-btn {
    font-size: 1.7rem;
    background: transparent;
    border-color: transparent;
    color: var(--ColorFooterDivider) !important;
    transition: var(--TransitionFast);
    cursor: pointer;
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--ColorSemiCrimson) !important;
  }
  .links {
    margin-bottom: 2.5rem;
  }
  .links a {
    display: block;
    text-align: left;
    font-family: var(--FontWork);
    font-size: 1.1rem;
    text-transform: capitalize;
    padding: 1rem 2.5rem;
    color: var(--FontColorGrey);
    transition: var(--MainTransition);
    letter-spacing: 0.4px;
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 3rem;
    background: var(--ColorBlack);
    color: var(--ColorWhite);
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--ColorWhite);
    transition: var(--MainTransition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .userBtnsContainer {
    margin: 2rem auto;
  }
  @media screen and (min-width: 720px) {
    .sidebar-header {
      height: 8rem;
    }
    .links a {
      padding-left: 3.5rem;
    }
  }
  @media screen and (min-width: 1150px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;

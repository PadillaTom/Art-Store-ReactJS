import React from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";

import { useFilterContext } from "../../Context/filter_context";

const Sort = () => {
  const {
    filtered_products: products,
    isGrid,
    setGridView,
    setListView,
    sortType,
    updateSortType,
  } = useFilterContext();
  return (
    <Wrapper>
      <div className="btn-container">
        <button
          type="button"
          className={`${isGrid && "active"}`}
          onClick={setGridView}
        >
          <BsFillGridFill></BsFillGridFill>
        </button>
        <button
          type="button"
          className={`${!isGrid && "active"}`}
          onClick={setListView}
        >
          <BsList></BsList>
        </button>
      </div>
      <p>{products.length} Products Found</p>
      <hr />
      <form>
        <label htmlFor="sort" className="sort-text">
          Sort By:
        </label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sortType}
          onChange={updateSortType}
        >
          <option value="price-asc">price (Ascending)</option>
          <option value="price-desc">price (Descending)</option>
          <option value="name-a">name (A-Z)</option>
          <option value="name-z">name (Z-A)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--ColorBlack-1);
      color: var(--ColorBlack-1);
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--ColorBlack-1);
      color: var(--ColorWhite);
    }
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
    color: var(--ColorFooterDivider);
  }
  .sort-text {
    color: var(--ColorFooterDivider);
  }
  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    margin-left: 0.4rem;
    color: var(--ColorFooterDivider);
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
`;

export default Sort;

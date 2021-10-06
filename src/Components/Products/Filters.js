import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

import { useFilterContext } from "../../Context/filter_context";
import { formatPrice, getUniqueValues } from "../../Utils/helpers";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      max_price,
      shipping,
      price,
    },
    updateFilters,
    cleanFilters,
    all_products,
  } = useFilterContext();
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  return (
    <Wrapper>
      <div className="content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/* Search Input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* End Search Input */}

          {/* Categories */}
          <div className="form-control">
            <h5>Category:</h5>
            <div>
              {categories.map((cat, index) => {
                return (
                  <button
                    key={index}
                    name="category"
                    type="button"
                    onClick={updateFilters}
                    className={`${category === cat.toLowerCase() && "active"}`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
          {/* End Categories */}

          {/* Companies */}
          <div className="form-control">
            <h5>Company:</h5>
            <select
              name="company"
              value={company}
              onChange={updateFilters}
              className="company"
            >
              {companies.map((comp, index) => {
                return (
                  <option key={index} value={comp}>
                    {comp}
                  </option>
                );
              })}
            </select>
          </div>
          {/* End Companies */}

          {/* Colors */}
          <div className="form-control">
            <h5>Colors:</h5>
            <div className="colors">
              {colors.map((col, index) => {
                if (col === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`${
                        color === "all" ? "all-btn active" : "all-btn"
                      }`}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    onClick={updateFilters}
                    style={{ background: col }}
                    data-color={col}
                    className={`${
                      color === col ? "color-btn active" : "color-btn"
                    }`}
                  >
                    {color === col && <FaCheck />}
                  </button>
                );
              })}
            </div>
          </div>
          {/* End Colors */}

          {/* Price */}
          <div className="form-control">
            <h5>Price:</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* End Price */}

          {/* Shipping */}
          <div className="form-control shipping">
            <label htmlFor="shipping">Free Shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
          {/* End Shipping */}
        </form>
        <button type="button" className="clear-btn" onClick={cleanFilters}>
          Clear Filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.7rem;
    h5 {
      margin-bottom: 0.5rem;
      font-family: var(--FontWork);
      font-weight: 600;
      letter-spacing: 0.5px;
      font-size: 0.95rem;
      color: var(--ColorBlack);
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--ColorSearchInput);
    border-color: transparent;
    letter-spacing: 0.5px;
  }
  .search-input::placeholder {
    text-transform: capitalize;
    color: var(--ColorBlack-35);
  }
  // Category:
  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: 0.5px;
    color: var(--ColorBlack-85);
    cursor: pointer;
    transition: var(--MainTransition);
  }
  .active {
    border-color: var(--ColorSemiCrimson);
    color: var(--ColorSemiCrimson);
  }
  // Company:
  .company {
    background: var(--ColorSearchInput);
    color: var(--ColorBlack-7);
    border-color: transparent;
    padding: 0.25rem;
    text-transform: capitalize;
    letter-spacing: 0.4px;
  }
  // Colors:
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    color: inherit;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--MainTransition);
    svg {
      font-size: 0.5rem;
      color: var(--ColorWhite);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  // Price:
  .price {
    margin-bottom: 0.25rem;
    font-family: var(--FontWork);
    letter-spacing: 0.6px;
    font-weight: 300;
    color: var(--ColorBlack);
  }
  // Shipping:
  .shipping {
    letter-spacing: 0.5px;
    text-transform: capitalize;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  // Clean Filters:
  .clear-btn {
    background: var(--ColorWhite);
    color: var(--ColorBlack);
    font-weight: 300;
    font-family: var(--FontWork);
    font-size: 1rem;
    letter-spacing: 1px;
    padding: 0.5rem 0.7rem;
    transition: var(--MainTransition);
    border: 1px solid var(--ColorBlack);
  }
  .clear-btn:hover {
    color: var(--ColorWhite);
    background: var(--ColorBlack);
    border: 1px solid var(--ColorBlack);
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;

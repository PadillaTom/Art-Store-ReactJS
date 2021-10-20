import React from "react";
import styled from "styled-components";

import { GridCard } from "../SingleProduct";
import { OpYWhenVisible } from "../../Animations";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return (
            <OpYWhenVisible key={product.id} setDuration={0.35} setDelay={0.1}>
              <GridCard product={product}></GridCard>
            </OpYWhenVisible>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1150px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;

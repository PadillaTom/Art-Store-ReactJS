import React from "react";
import styled from "styled-components";

import { Filters, Sort, ProductList } from "../Components/Products";

const ProductsPage = () => {
  return (
    <Wrapper className="page">
      <div className="section-center products">
        <Filters></Filters>
        <div>
          <Sort></Sort>
          <ProductList></ProductList>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
  @media (min-width: 980px) {
    padding-top: 7rem;
  }
`;

export default ProductsPage;

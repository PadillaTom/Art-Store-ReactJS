import React from "react";
import styled from "styled-components";

import { Error, Loading } from "../Utils";
import { Product } from "../Products";

import { useProductsContext } from "../../Context/products_context";

const FeaturedProducts = () => {
  // *** Get Products ***
  const {
    products_loading: isLoading,
    products_error: error,
    featured_products: featuredProds,
  } = useProductsContext();

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <Error></Error>;
  }
  return (
    <FeaturedProductsContainer>
      <div className="fp-titleContainer">
        <h2>Featured Products</h2>
        <h1>Lifestyle</h1>
      </div>
      <div className="section-center featured">
        {featuredProds.map((featured) => {
          return <Product key={featured.id} {...featured}></Product>;
        })}
      </div>
    </FeaturedProductsContainer>
  );
};

const FeaturedProductsContainer = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;

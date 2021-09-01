import React from "react";
import styled from "styled-components";

import { Error, Loading } from "../Utils";
import { ProductCard } from "../Products";

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
        <h3>Featured Products</h3>
        <h1>Lifestyle</h1>
      </div>
      <div className="section-center featured">
        {featuredProds.map((featured) => {
          return <ProductCard key={featured.id} {...featured}></ProductCard>;
        })}
      </div>
    </FeaturedProductsContainer>
  );
};

const FeaturedProductsContainer = styled.section`
  padding: 3.5rem 0;
  width: 95%;
  margin: 0 auto;
  background: var(--clr-grey-10);
  text-align: center;
  padding-bottom: 0rem;
  .fp-titleContainer h3 {
    font-family: var(--FontWork);
    font-size: 1.1rem;
    font-weight: 200;
    letter-spacing: 2px;
  }
  .fp-titleContainer h1 {
    font-size: 2.8rem;
    font-family: var(--FontLora);
    letter-spacing: 1.7px;
    font-weight: 200;
  }
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

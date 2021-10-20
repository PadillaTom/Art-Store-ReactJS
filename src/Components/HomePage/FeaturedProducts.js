import React from "react";
import styled from "styled-components";

import { Error, Loading } from "../Utils";
import { ProductCard } from "../SingleProduct";

import { useProductsContext } from "../../Context/products_context";

import { OpacityOneWhenVisible, OpYWhenVisible } from "../../Animations";

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
      <OpYWhenVisible setDuration={0.45} setDelay={0.2}>
        <div className="fp-titleContainer">
          <h3>Featured Products</h3>
          <h1>Lifestyle</h1>
        </div>
      </OpYWhenVisible>

      <div className="section-center featured">
        {featuredProds.map((featured) => {
          return (
            <OpYWhenVisible
              setDuration={0.25}
              setDelay={0.05}
              key={featured.id}
            >
              <ProductCard {...featured}></ProductCard>
            </OpYWhenVisible>
          );
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
  @media (min-width: 980px) {
    .fp-titleContainer h3 {
      font-family: var(--FontWork);
      font-size: 1.4rem;
      font-weight: 200;
      letter-spacing: 2px;
    }
    .fp-titleContainer h1 {
      font-size: 3.3rem;
      font-family: var(--FontLora);
      letter-spacing: 1.7px;
      font-weight: 200;
    }
    .featured {
      gap: 2rem;
    }
  }
  @media (min-width: 1150px) {
    .fp-titleContainer {
      padding-top: 3.7rem;
      padding-bottom: 2rem;
      h3 {
        font-size: 1.7rem;
      }
      h1 {
        font-size: 3.6rem;
      }
    }
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      column-gap: 2.75rem;
      row-gap: 4rem;
    }
  }
`;

export default FeaturedProducts;

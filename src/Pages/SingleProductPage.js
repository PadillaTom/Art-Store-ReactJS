import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useParams, useHistory } from "react-router-dom";

import { single_product_url } from "../Utils/constants";
import { formatPrice } from "../Utils/helpers";

import { Loading, Error } from "../Components/Utils";
import { ProductImages, Stars, AddToCart } from "../Components/SingleProduct";

import { useProductsContext } from "../Context/products_context";

const SingleProductPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();
  // Fetch
  useEffect(() => {
    fetchSingleProduct(`${single_product_url}${id}`);
  }, [id]);

  // Redirect on Error
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  }, [error]);

  // RENDER:
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    return <Error></Error>;
  }
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;
  return (
    <SingleProductContainer>
      <div className="section section-center">
        <Link className="btn" to="/products">
          Back to Products
        </Link>
        <div className="product-center">
          <ProductImages images={images}></ProductImages>
          <section className="content">
            <h2>{name}</h2>
            <Stars></Stars>
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Available: </span>
              {stock > 0 ? "In Stock" : "Out Of Stock"}
              <span>SKU: </span>
              {sku}
              <span>Brand: </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart></AddToCart>}
          </section>
        </div>
      </div>
    </SingleProductContainer>
  );
};

const SingleProductContainer = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;

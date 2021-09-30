import React from "react";

import { GridView, ListView } from "./";

import { useFilterContext } from "../../Context/filter_context";

const ProductList = () => {
  const { filtered_products: products, isGrid } = useFilterContext();
  if (products.length < 1) {
    return <h5>No products matched your search...</h5>;
  }
  if (!isGrid) {
    return <ListView products={products}></ListView>;
  }
  return <GridView products={products}> Product List</GridView>;
};

export default ProductList;

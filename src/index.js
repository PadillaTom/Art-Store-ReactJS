import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App } from "./Components/App";
import { ProductsProvider } from "./Context/products_context";
import { FilterProvider } from "./Context/filter_context";
import { CartProvider } from "./Context/cart_context";

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById("root")
);

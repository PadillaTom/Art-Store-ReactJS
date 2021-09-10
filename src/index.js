import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App } from "./Components/App";
import { ProductsProvider } from "./Context/products_context";
import { FilterProvider } from "./Context/filter_context";

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App } from "./Components/App";
import { ProductsProvider } from "./Context/products_context";

ReactDOM.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>,
  document.getElementById("root")
);

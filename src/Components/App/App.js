import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Sidebar, Footer } from "../Navigation";
import {
  AboutPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  HomePage,
  ProductsPage,
  SingleProductPage,
  PrivateRoute,
  AuthWrapper,
} from "../../Pages";
import { ScrollToTop } from "../Utils";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <ScrollToTop />
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Switch>
          <Route path="/" exact>
            <HomePage></HomePage>
          </Route>
          <Route path="/about">
            <AboutPage></AboutPage>
          </Route>
          <Route path="/cart">
            <CartPage></CartPage>
          </Route>
          <Route path="/products" exact>
            <ProductsPage></ProductsPage>
          </Route>
          <Route path="/products/:id">
            <SingleProductPage></SingleProductPage>
          </Route>
          <PrivateRoute exact path="/checkout">
            <CheckoutPage></CheckoutPage>
          </PrivateRoute>
          <Route path="*">
            <ErrorPage></ErrorPage>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthWrapper>
  );
}

export default App;

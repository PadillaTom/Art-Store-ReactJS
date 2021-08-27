import React from "react";
import styled from "styled-components";

import {
  Hero,
  FeaturedProducts,
  Services,
  Newsletter,
} from "../Components/HomePage";

const HomePage = () => {
  return (
    <HomeContainer>
      <Hero></Hero>
      <FeaturedProducts></FeaturedProducts>
      <Services></Services>
      <Newsletter></Newsletter>
    </HomeContainer>
  );
};
const HomeContainer = styled.div``;

export default HomePage;

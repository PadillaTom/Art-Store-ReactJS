import React from "react";
import styled from "styled-components";

import { Hero, Services, Contact } from "../Components/Pages";

const HomePage = () => {
  return (
    <HomeContainer>
      <Hero></Hero>
      <Services></Services>
      <Contact></Contact>
    </HomeContainer>
  );
};
const HomeContainer = styled.div``;

export default HomePage;

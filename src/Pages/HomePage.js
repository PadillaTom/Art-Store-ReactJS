import React from "react";
import styled from "styled-components";

import homeBg from "../Assets/homeBg.jpeg";

const HomePage = () => {
  return (
    <HomeContainer>
      <div className="bg-overlay"></div>
      <img className="homeBg" src={homeBg} alt="interior design"></img>
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  width: 100%;
  height: 35vh;
  .homeBg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom left;
  }
`;

export default HomePage;

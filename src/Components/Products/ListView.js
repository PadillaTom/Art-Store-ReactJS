import React from "react";
import styled from "styled-components";
import { ListCard } from "../SingleProduct";

import { OpYWhenVisible } from "../../Animations";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        return (
          <OpYWhenVisible setDelay={0.17} setDuration={0.3} setYAxis={"1.5%"}>
            <ListCard key={product.id} product={product}></ListCard>
          </OpYWhenVisible>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
`;

export default ListView;

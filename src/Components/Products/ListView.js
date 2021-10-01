import React from "react";
import styled from "styled-components";

import { ListCard } from "../SingleProduct";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        return <ListCard key={product.id} product={product}></ListCard>;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
`;

export default ListView;

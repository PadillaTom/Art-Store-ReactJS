import React from "react";
import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    // Star = Index
    const halfStar = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill></BsStarFill>
        ) : stars >= halfStar ? (
          <BsStarHalf></BsStarHalf>
        ) : (
          <BsStar></BsStar>
        )}
      </span>
    );
  });

  return (
    <RatingsContainer>
      <div className="stars">{tempStars}</div>
      <p className="reviews">({reviews} Customer Reviews)</p>
    </RatingsContainer>
  );
};

const RatingsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  span {
    color: var(--ColorBlack-85);
    font-size: 1rem;
    margin-right: 0.25rem;
  }
  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
    font-size: 0.9rem;
  }
  margin-bottom: 0.5rem;
`;
export default Stars;

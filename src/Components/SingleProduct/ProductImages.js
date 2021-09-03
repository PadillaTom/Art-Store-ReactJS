import React, { useState } from "react";
import styled from "styled-components";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <ImagesDisplayContainer>
      <img src={mainImg.url} alt="Displayed" className="mainImg" />
      <div className="gallery">
        {images.map((img, index) => {
          return (
            <img
              src={img.url}
              alt={img.filename}
              key={index}
              onClick={() => {
                setMainImg(images[index]);
              }}
              className={`${img.url === mainImg.url ? "active" : null}`}
            />
          );
        })}
      </div>
    </ImagesDisplayContainer>
  );
};

const ImagesDisplayContainer = styled.section`
  .mainImg {
    height: 25rem;
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
  .gallery {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1rem;
    img {
      height: 100px;
      cursor: pointer;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--ColorBlack-5);
  }
  @media (max-width: 576px) {
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 980px) {
    .mainImg {
      height: 65vh;
    }
    .gallery {
      img {
        height: 6.7rem;
      }
    }
  }
  @media (min-width: 992px) {
    .gallery {
      img {
        height: 75px;
      }
    }
  }
  @media (min-width: 1150px) {
    .gallery {
      img {
        height: 110px;
      }
    }
  }
`;

export default ProductImages;

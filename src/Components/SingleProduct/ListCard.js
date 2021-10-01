import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../../Utils/helpers";

const ListCard = ({ product }) => {
  const { id, image, name, price, description } = product;
  return (
    <article key={id}>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <h5 className="price">{formatPrice(price)}</h5>
        <p>{description.substring(0, 140)}...</p>
        <Link to={`/products/${id}`} className="btn-fill">
          Details
        </Link>
      </div>
    </article>
  );
};

export default ListCard;

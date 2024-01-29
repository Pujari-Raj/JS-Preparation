import React from "react";

const ProductCard = ({props}) => {
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <span>Price: ${props.price}</span>
    </div>
  );
};

export default ProductCard;

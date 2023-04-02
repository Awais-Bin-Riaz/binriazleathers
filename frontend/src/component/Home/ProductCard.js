import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
    size: "small",
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} 
      onMouseOut={e => (e.currentTarget.src = product.images[0].url)} 
      onMouseOver={e => (e.currentTarget.src = product.images[1].url )} 
      alt={product.name} />
      
      <h3>{product.name}</h3>
      <div>
        <Rating {...options} />
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`Rs ${product.price}.00`}</span>
    </Link>
  );
};

export default ProductCard;

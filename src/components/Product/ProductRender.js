import React from "react";
import Product from "./Product";

const ProductRender = ({ products }) => {
  return products.map(product => (
    <Product
      key={product.id}
      name={product.name}
      image={product.image}
      amount={product.amount}
    />
  ));
};

export default ProductRender;

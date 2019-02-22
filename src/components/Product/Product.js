import React from 'react';
import ProductStyle from './ProductStyle';
import Img from './Img';
import Price from './Price';

const Product = ({ name, image, amount }) => {
   return (
      <ProductStyle>
         <Img url={image} description={name} />
         <Price>{amount}</Price>
         <h3>{name}</h3>
      </ProductStyle>
   );
};

export default Product;

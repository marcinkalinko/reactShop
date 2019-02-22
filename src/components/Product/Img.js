import React from 'react';
import ImgStyle from './ImgStyle';

const Img = ({ url, description }) => {
   return <ImgStyle src={url} alt={description} />;
};
export default Img;

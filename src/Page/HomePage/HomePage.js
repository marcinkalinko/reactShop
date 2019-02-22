import React from "react";
import Container from "../../components/Container/Container";
import Heading1 from "../../components/GlobalStyles/Heading1";
import Heading2 from "../../components/GlobalStyles/Heading2";
import Products from "../../components/Products/Products";
import ProductsService from "../../services/products.service";
import ProductRender from "../../components/Product/ProductRender";

const desktops = ProductsService.getProductsByCategory("desktop", true, 4);
const tablets = ProductsService.getProductsByCategory("tablet", true, 4);

const HomePage = () => (
  <Container>
    <Heading1>Welcome to our store</Heading1>
    <Heading2>Desktops</Heading2>
    <Products>
      <ProductRender products={desktops} />
    </Products>
    <Heading2>Tablets</Heading2>
    <Products>
      <ProductRender products={tablets} />
    </Products>
  </Container>
);

export default HomePage;

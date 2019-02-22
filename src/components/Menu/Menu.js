import React from "react";
import MenuContainer from "./MenuContainer";
import Container from "../Container/Container";

const Menu = () => (
  <MenuContainer.Navbar>
    <Container>
      <MenuContainer.Nav>
        <MenuContainer.NavLi>
          <MenuContainer.Link exact to="/">
            Home
          </MenuContainer.Link>
        </MenuContainer.NavLi>

        <MenuContainer.NavLi>
          <MenuContainer.Link to="/catalog">Catalog</MenuContainer.Link>
        </MenuContainer.NavLi>

        <MenuContainer.NavLi>
          <MenuContainer.Link to="/about">About</MenuContainer.Link>
        </MenuContainer.NavLi>
      </MenuContainer.Nav>
    </Container>
  </MenuContainer.Navbar>
);

export default Menu;

import React from "react";
import Container from "../../components/Container/Container";
import Heading1 from "../../components/GlobalStyles/Heading1";
import Catalog from "../../components/Catalog/CatalogStyle";
import ColumnLeft from "../../components/Catalog/ColumnLeft";
import ColumnRight from "../../components/Catalog/ColumnRight";
import Filter from "../../components/Catalog/Filter";
import FilterHeader from "../../components/Catalog/FilterHeader";
import Clear from "../../components/Catalog/Clear";
import ProductsService from "../../services/products.service";
import RadioRender from "../../components/Catalog/RadioRender";
import Products from "../../components/Products/Products";
import ProductRender from "../../components/Product/ProductRender";

class CatalogPage extends React.Component {
  constructor() {
    super();
    this.brandAll = "All";
  }

  state = {
    textSearch: "",
    radioManufacturer: "All"
  };

  handleClickClear = () => {
    this.setState({ textSearch: "", radioManufacturer: this.brandAll });
  };

  handleTextSearch = event => {
    this.setState({ textSearch: event.target.value });
  };

  handleOptionChange = event => {
    this.setState({ radioManufacturer: event.target.value });
  };

  render() {
    let brands = ProductsService.getManufactures();
    brands.push(this.brandAll);

    let products = ProductsService.getProductByName(this.state.textSearch);

    if (this.state.radioManufacturer !== this.brandAll) {
      products = ProductsService.getProductByManufactures(
        this.state.radioManufacturer
      );
    }

    return (
      <Container>
        <Heading1>Catalog</Heading1>
        <Catalog>
          <ColumnLeft>
            <Filter>
              <FilterHeader>
                <h4>Search</h4>
                <Clear onClick={this.handleClickClear} href="#">
                  Clear
                </Clear>
              </FilterHeader>

              <div>
                <input
                  type="text"
                  placeholder="search..."
                  value={this.state.textSearch}
                  onChange={this.handleTextSearch}
                />
              </div>
              <h4>Manufacturer</h4>
              <div>
                <RadioRender
                  manufactures={brands.sort()}
                  checked={this.state.radioManufacturer}
                  handleOptionChange={this.handleOptionChange}
                />
              </div>
            </Filter>
          </ColumnLeft>
          <Products>
            <ProductRender products={products} />
          </Products>
          <ColumnRight />
        </Catalog>
      </Container>
    );
  }
}

export default CatalogPage;

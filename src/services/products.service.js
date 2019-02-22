import products from "../products";

class ProductsService {
  static getProducts() {
    return products;
  }

  /**
   *
   * @param {string} category
   * @param {boolean} featured
   * @param {number} limit
   */
  static getProductsByCategory(category, featured, limit) {
    return products
      .filter(product =>
        product.category === category && featured ? product.featured : true
      )
      .slice(0, limit);
  }

  static getManufactures() {
    return [...new Set(products.map(product => product.manufacture))];
  }

  static getProductByName(name) {
    return products.filter(product => product.name.includes(name));
  }

  static getProductByManufactures(name) {
    return products.filter(product => product.manufacture.includes(name));
  }
}

export default ProductsService;

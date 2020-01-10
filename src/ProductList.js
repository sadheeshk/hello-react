import React from 'react';
import Product from './Product';
import './ProductList.css';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };

    fetch("products.json")
      .then(response => response.json())
      .then(json => {this.setState({products: json})})
      .catch(error => console.log(error));
  }

  render() {
    let productComponents = [];

    for (let product of this.props.products) {
      productComponents.push(<Product product={product}/>);
    }
    return <ul>{productComponents}</ul>;
  }
}
export default ProductList;

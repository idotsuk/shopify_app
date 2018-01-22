import React, { Component } from "react";
import Product from "../components/Product";

import ProductFavorite from "../components/ProductFavorite";
import { connect } from "react-redux";
class Explore extends Component {
  constructor() {
    super();
  }

  render() {
    let products = this.props.products.map((product, index) => {
      return <Product key={index} {...product} />;
    });

    return <div className="my-products-wrapper">{products}</div>;
  }
}
const mapStateToProps = state => {
  return {
    products: state.products.explore
  };
};
export default connect(mapStateToProps)(Explore);

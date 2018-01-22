import React, { Component } from "react";

import ProductFavorite from "../components/ProductFavorite";
import {connect} from 'react-redux'
class Favorites extends Component {
  constructor() {
    super();

  }
  

  render() {
    let products = this.props.products.map((product, index) => {
      return <ProductFavorite key={index} {...product} />;
    });

    return <div className="my-products-wrapper">{products}</div>;
  }
}

const mapStateToProps = (state) => {
    return {
        products : state.products.favorite
    }
}
export default connect(mapStateToProps)(Favorites)
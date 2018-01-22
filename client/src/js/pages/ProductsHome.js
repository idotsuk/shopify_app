import React, { Component } from "react";

import { connect } from "react-redux";
class ProductsHome extends Component {
  constructor() {
    super();
  }
  render() {

    return (
      <div className="my-products-wrapper">
        <h1>Overview</h1>
        <h2>{this.props.explore.length} items in explore</h2>
        <h2>{this.props.favorites.length} items in favorites</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.products.favorite,
    explore: state.products.explore,
    loggedIn: state.user.logged_in
  };
};
export default connect(mapStateToProps)(ProductsHome);

import React, { Component } from "react";
import Explore from "./Explore";
import Favorites from "./Favorites";
import ProductsHome from "./ProductsHome";
import { connect } from "react-redux";
import { Route, Link, Switch } from "react-router-dom";
import * as productActions from "../actions/ProductActions";
import { removeProductFromFavorites } from "../actions/ProductActions";

class Products extends Component {
  constructor() {
    super();
  }

  render() {
    let showproducts = () => {}
    return (
      <div>
        <div className="side-nav-bar">

          <Link to="/products/explore">
            <button className="navbutton navbutton-side navtext">
              Explore
            </button>
          </Link>

          <Link to="/products/favorites">
            <button className="navbutton navbutton-side navtext">
              Favorites
            </button>
          </Link>

        </div>

        <Switch>
          <Route exact path="/products" component={ProductsHome} />
          <Route path="/products/explore" component={Explore} />
          <Route path="/products/favorites" component={Favorites} />
        </Switch>
      </div>
    );
  }
}

export default Products;

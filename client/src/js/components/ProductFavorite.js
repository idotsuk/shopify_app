import React, { Component } from "react";
import $ from "jquery";
import * as productActions from "../actions/ProductActions";
export default class ProductFavorite extends Component {
  constructor() {
    super();
    this.state = {
      chosen: false
    };
  }

  addHandler(e) {
    if (this.state.chosen) this.removeProduct();
    else this.addProduct();
  }


  render() {
    var classes = "product-favorite" + (this.state.chosen ? " chosen" : "");

    return (
      <div className={classes} ref={this.props.id}>  
            <span className="imagediv">
          <img className="product-favorite-image" src={this.props.img} />
        </span>
        <span  className = "product-favorite-text">
          <div>
            <h3> {this.props.title} </h3>
            <p> {this.props.price} </p>
            <p> Supplied by: {this.props.supplier} </p>
          </div>
        </span>

      </div>
    );
  }
}

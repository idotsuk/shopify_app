import React, { Component } from "react";
import * as productActions from "../actions/ProductActions";
import { connect } from "react-redux";

class Product extends Component {
  constructor() {
    super();
  }


  addToFavoritesDB() {
    let url = "http://localhost:3000/api/";
    let data =  this.id
    fetch(url, {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(res => {
        console.log(res)
        return Promise.resolve();
      })
      .catch(error => {
        console.error("Error:", error);
        return Promise.reject();
      })
      .then(response => console.log("Success:", response));
  }


  
  addHandler(e) {
    if (!this.props.chosen) {

      this.addToFavoritesDB();
      this.props.addFavorite(this.props.id);
    } else {
      this.props.removeFavorite(this.props.id);
    }
  }

  render() {
    let classes = "product " + (this.props.chosen ? " chosen" : "");
    const iconClasses = () => {
      return ( "glyphicon " +
      (this.props.chosen ? " glyphicon-minus" : "glyphicon-plus"));
    }

    const addButton = () => {
    if (this.props.user.logged_in){
      return ( 
        <button type="button" className="add-product" onClick={this.addHandler.bind(this)}> <span className={iconClasses()} /> </button>
      )
    }
      else return
    
  }

    return (
      <div className={classes} ref={this.props.id}>
        <h3> {this.props.title} </h3>
        <p> {this.props.price} </p>
        <p> Supplied by: {this.props.supplier} </p>

        <span className="button-span">
          {addButton()}
        </span>
        <span className="imagediv">
          <img className="product-image" src={this.props.img} />
        </span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFavorite: id => {
      dispatch(productActions.addProductToFavorites(id));
    },
    removeFavorite: id => {
      dispatch(productActions.removeProductFromFavorites(id));
    }
  };
};

const mapStateToProps = (state) => {
  return {
      user : state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);

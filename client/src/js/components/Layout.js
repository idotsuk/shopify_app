import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Products from "../../js/pages/Products";
import Suppliers from "../../js/pages/Suppliers";
import Customers from "../../js/pages/Customers";
import { connect } from "react-redux";

import Home from "../../js/pages/Home";
import store from "../stores/Store";

class Layout extends Component {
  constructor() {
    super();
    this.state = { response: "Express not yet connected..." };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/ping");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div>
        <div className="nav-bar">
          <Link to="/">
            <button className="navbutton navicon">
              <span className="glyphicon glyphicon-home" />
            </button>
          </Link>
          <Link to="/products">
            <button className="navbutton navtext">Products</button>
          </Link>
          <Link to="/customers">
            <button className="navbutton navtext">Customers</button>
          </Link>
          <Link to="/suppliers">
            <button className="navbutton navtext">Suppliers</button>
          </Link>
          <span className="navbutton" id="user-status">
            User: {this.props.user.first_name} {this.props.user.last_name}{" "}
            {this.props.user.id}{" "}
          </span>
          <span className="navbutton" id="con-status">
            {this.state.response}{" "}
          </span>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />

          <Route path="/customers" component={Customers} />
          <Route path="/suppliers" component={Suppliers} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(Layout);

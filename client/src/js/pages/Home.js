import React, { Component } from "react";
import { connect } from "react-redux";
import Login from "../components/Login.js";
import Welcomer from "../components/Welcomer.js";

class Home extends Component {
  render() {
    return (
      <div className="products-wrapper">
        {this.props.user.logged_in ? <Welcomer /> : <Login />}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(Home);

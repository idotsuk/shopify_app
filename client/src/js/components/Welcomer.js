import React, { Component } from "react";
import { connect } from "react-redux";
import * as userActions from "../actions/UserActions";
class Welcomer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="welcome-wrapper">
        <h1>
          Hello {this.props.user.first_name}, <br />Welcome Back!
        </h1>
        <br />
        <br />
        <h2> You have {this.props.user_products.length} favorite items </h2>

        <br/>
        <br/>
        <span className="btn-logout">
            <button
              onClick={this.props.logOut.bind(this)}
              className="btn-default btn"
              id="submit-login"
            >
              Logout
            </button>
          </span>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logOut: () => {
      dispatch(userActions.logOut());
    }
  };
};
const mapStateToProps = state => {
  return {
    user: state.user,
    user_products: state.products.favorite
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Welcomer);

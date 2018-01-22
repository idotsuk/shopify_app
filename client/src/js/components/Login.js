import React, { Component } from "react";
import shopifyLogo from "../../img/shopify_logo.png";
import * as userActions from "../actions/UserActions";
import { connect } from "react-redux";
class Login extends Component {
  constructor() {
    super();
  }
  loginRequest(data) {
    return new Promise((resolve, reject) => {
      console.log("data sent is: " + JSON.stringify(data));
      let request = fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({ "Content-Type": "application/json" })
      });
      request.then(res =>
        res.json().then(
          res => {
            console.log(res);
            resolve(res);
          },
          err => {
            console.error("Error:", err);
            reject(err);
          }
        )
      );
    });
  }


 tryLogIn() {
    let data = {
      userName: document.getElementById("user-name").value,
      password: document.getElementById("password").value
    };
    this.loginRequest(data).then(
      res => {
        if (!(res.hasOwnProperty("failed") || res.hasOwnProperty("error")))
          this.props.logIn(res._id, res.first, res.last);
      },
      err => {
        console.log(err);
      }
    );
    //
  }

  render() {
    return (
      <div className="login-wrapper">
        <div>
          <img className="shopify-logo" src={shopifyLogo} />
         {/*  <span className="btn-login">
            <button onClick={this.props.connect} className="btn-default btn">
              Connect with Shopify
            </button>
          </span> */}
        </div>
        <div className="manual-login">
          <span className="field-login">
            <div>
              Username:{" "}
              <input className="field-input" id="user-name" type="text" />
            </div>
          </span>
          <span className="field-login">
            <div>
              Password:<input
                className="field-input"
                id="password"
                type="password"
              />
            </div>
          </span>
          <span className="btn-login">
            <button
              onClick={this.tryLogIn.bind(this)}
              className="btn-default btn"
              id="submit-login"
            >
              Login
            </button>
          </span>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logIn: (id, first_name, last_name) => {
      dispatch(userActions.logIn(id, first_name, last_name));
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);

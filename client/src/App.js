import React, { Component } from "react";
import { Provider, connect } from "react-redux";

import registerServiceWorker from "./js/registerServiceWorker";
//import {hashHistory } from "react-router-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Layout from "./js/components/Layout";

class App extends Component {
  state = {
    response: ""
  };

  render() {
    return (
      <Router>
        <Route path="/" component={Layout} />
      </Router>
    );
  }
}

export default App;

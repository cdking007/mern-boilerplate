import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Home from "./Home/Home";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

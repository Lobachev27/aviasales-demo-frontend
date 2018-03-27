import React, { Component } from "react";

import "./App.css";
import Header from "./Header";
import Directions from "./Directions";
import Prices from "./Prices";
import Partners from "./Partners";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Directions />
        <Prices />
        <Partners />
      </div>
    );
  }
}

export default App;

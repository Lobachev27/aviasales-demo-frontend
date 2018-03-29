import React, { Component } from "react";

import "./App.css";
import Header from "./Header";
import Directions from "./Directions";
import Prices from "./Prices";
import Partners from "./Partners";
import Subscribe from "./Subscribe";
import Offer from "./Offer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Directions />
        <Prices />
        <Partners />
		<Subscribe />
		<Offer />
      </div>
    );
  }
}

export default App;

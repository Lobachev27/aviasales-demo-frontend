import React, { Component } from "react";

import "./App.css";
import Header from "./Header";
import Directions from "./Directions";


class App extends Component {
  render() {
    return (
		<div>
		  <Header />
		  <Directions />

		</div>
    );
  };
}

export default App;

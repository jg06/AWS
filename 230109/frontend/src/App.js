import React, { Component } from "react";
import "./App.css";
import TempL from "./components/main-left/TempL";
import TempR from "./components/main-right/TempR";

class App extends Component {
  render() {
    return (
      <div className="temp">
        <TempL>App</TempL>
        <TempR></TempR>
      </div>
    );
  }
}

export default App;

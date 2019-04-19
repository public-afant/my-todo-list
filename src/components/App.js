import React, { Component } from "react";
import "../css/App.css";
import Sidebar from "./Sidebar";
import Content from "./Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;

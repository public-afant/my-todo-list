import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import { fakeData } from "./data/fakeData";

ReactDOM.render(<App data={fakeData} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

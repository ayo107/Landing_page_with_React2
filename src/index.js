//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "./styles/index.css";
//include bootstrap npm library into the bundle
import "bootstrap";

//import your own components
import Home from "./component/Home.jsx";

//render your react application
ReactDOM.render(<Home />, document.getElementById("app"));

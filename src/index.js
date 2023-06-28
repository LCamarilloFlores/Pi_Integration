import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
(function () {
  const fondo = document.getElementsByClassName("fondo");
  fondo.className = "fondo2";
})();

ReactDOM.render(<App />, document.getElementById("root"));

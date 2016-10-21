require("./assets/css/font-awesome.css");
require("./assets/css/notie.css");
// require("./assets/css/main.css");
require("./assets/sass/main.scss");

import React from "react";
import { render } from "react-dom";

import App from "./components/App";


render(
  <App />,
  document.getElementById("app")
);

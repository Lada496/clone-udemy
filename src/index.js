import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NavCategoryProvider from "./share/context/nav-category-context";

ReactDOM.render(
  <NavCategoryProvider>
    <App />
  </NavCategoryProvider>,
  document.getElementById("root")
);

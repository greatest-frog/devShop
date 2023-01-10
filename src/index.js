import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import goods from "./mock/mock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/shop">
      <App goods={goods} />
    </BrowserRouter>
  </React.StrictMode>
);

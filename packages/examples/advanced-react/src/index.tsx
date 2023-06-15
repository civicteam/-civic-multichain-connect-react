import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// eslint-disable-next-line require-extensions/require-extensions
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

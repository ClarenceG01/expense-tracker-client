import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Link to="/"></Link>
      <Link to="/login"></Link>
      <Link to="/register"></Link>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

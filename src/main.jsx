import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DashboardProvider } from "./context/DashboardContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DashboardProvider>
        <App />
      </DashboardProvider>
    </BrowserRouter>
  </React.StrictMode>
);

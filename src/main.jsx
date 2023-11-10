import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ContextTheme from "./components/ContextTheme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ContextTheme>
        <App />
      </ContextTheme>
    </Router>
  </React.StrictMode>
);

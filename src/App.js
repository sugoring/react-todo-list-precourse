// src/App.js
import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./main.jsx";

// Create main App component using React.createElement
const App = () => {
  return React.createElement(Main);
};

// Render the App component to the root div
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(React.createElement(App));

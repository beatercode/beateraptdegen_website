import React from "react";
import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

import "./mobile.css";

export default function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <AnimatedRoutes />
      </HashRouter>
    </React.StrictMode>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

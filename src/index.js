import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { GraduateContextProvider } from "./context/graduate-context";

ReactDOM.render(
  <React.StrictMode>
    <GraduateContextProvider>
      <App />
    </GraduateContextProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

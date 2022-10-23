import React from "react";
// v17
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";

// v17
// ReactDOM.render(<App />, document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

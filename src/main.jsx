import App from "./App.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="free-word-app">
    <App />
  </BrowserRouter>
);

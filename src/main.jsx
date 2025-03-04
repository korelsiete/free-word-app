import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WordProvider } from "./context/WordContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WordProvider>
      <App />
    </WordProvider>
  </StrictMode>
);

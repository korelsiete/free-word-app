import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WordProvider } from "./context/WordContext.jsx";
import { ToogleProvider } from "./context/ToogleContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WordProvider>
      <ToogleProvider>
        <App />
      </ToogleProvider>
    </WordProvider>
  </StrictMode>
);

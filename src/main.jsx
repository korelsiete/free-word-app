import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WordProvider } from "./context/WordContext.jsx";
import { ToogleProvider } from "./context/ToogleContext.jsx";
import { TimerProvider } from "./context/TimerContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToogleProvider>
      <WordProvider>
        <TimerProvider>
          <App />
        </TimerProvider>
      </WordProvider>
    </ToogleProvider>
  </StrictMode>
);

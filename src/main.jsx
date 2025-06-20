import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { WordProvider } from "./context/WordContext.jsx";
import { ToogleProvider } from "./context/ToogleContext.jsx";
import { TimerProvider } from "./context/TimerContext.jsx";
import { BrowserRouter } from "react-router";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="free-word-app">
    <StrictMode>
      <ToogleProvider>
        <WordProvider>
          <TimerProvider>
            <App />
          </TimerProvider>
        </WordProvider>
      </ToogleProvider>
    </StrictMode>
  </BrowserRouter>
);

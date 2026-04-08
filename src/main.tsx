import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-93.75 h-203 bg-white rounded-xl shadow-lg overflow-hidden">
        <App />
      </div>
    </div>
  </StrictMode>,
);

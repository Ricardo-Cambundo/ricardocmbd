import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingScreen from "./pages/loadingScreen.tsx";

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingScreen />}>
    <Router>
      <StrictMode>
        <App />
      </StrictMode>
    </Router>
  </Suspense>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import './styles/globals.scss'
import AppRoutes from "./routes/AppRoutes.jsx";
import { AccessibilityProvider } from "./context/AccessibilityContext.jsx";
import ColorBlindnessFilters from "./components/common/Accessibility/ColorBlindnessFilters.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AccessibilityProvider>
      <ColorBlindnessFilters />
      <AppRoutes />
    </AccessibilityProvider>
  </StrictMode>
);

import { createRoot } from "react-dom/client";
import "./styles/output.css"; // Importa el CSS compilado por Tailwind
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

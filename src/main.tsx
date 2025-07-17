import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/main.scss";
import App from "./App.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <QueryClientProvider client={new QueryClient()}>
        <App />
      </QueryClientProvider>
    </CookiesProvider>
  </StrictMode>
);

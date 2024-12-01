import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import ServiceProvider from "./Providers/ServiceProvider.jsx";

createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto bg-white">
    <StrictMode>
      <AuthProvider>
        <ServiceProvider>
          <RouterProvider router={router} />
        </ServiceProvider>
      </AuthProvider>
    </StrictMode>
  </div>
);

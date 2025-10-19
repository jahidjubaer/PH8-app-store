import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import { RouterProvider } from "react-router/dom";
import { router } from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* router import form diff file  */}
    <RouterProvider router={router} />
  </StrictMode>
);

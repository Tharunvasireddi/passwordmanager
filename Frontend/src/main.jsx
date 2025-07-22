import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "@tanstack/react-router";
import { createRouter} from "@tanstack/react-router";
import { routeTree } from "./routers/rootrouter";
const router = createRouter({ routeTree });
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

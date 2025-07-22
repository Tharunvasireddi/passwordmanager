import { createRoute } from "@tanstack/react-router";
import { rootRouter } from "./rootrouter";
import { RegisterPage } from "../pages/RegisterPage";

const registerRouter = createRoute({
  getParentRoute: () => rootRouter,
  path: "/register",
  component: RegisterPage,
});

export { registerRouter };

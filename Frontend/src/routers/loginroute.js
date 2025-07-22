import { createRoute } from "@tanstack/react-router";
import { rootRouter } from "./rootrouter";
import { LoginPage } from "../pages/LoginPage";

const loginRouter = createRoute({
  getParentRoute: () => rootRouter,
  path: "/login",
  component: LoginPage,
});

export {loginRouter}

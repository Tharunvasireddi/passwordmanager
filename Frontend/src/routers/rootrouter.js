import { createRootRoute } from "@tanstack/react-router";
import { App } from "../App";
import { homeRouter } from "./homeroute";
import { registerRouter } from "./registerRoute";
import { loginRouter } from "./loginroute";
import { dashboardRouter } from "./dashboardrouter";

export const rootRouter = createRootRoute({
  component: App,
});

export const routeTree = rootRouter.addChildren([
  homeRouter,
  registerRouter,
  loginRouter,
  dashboardRouter,
]);

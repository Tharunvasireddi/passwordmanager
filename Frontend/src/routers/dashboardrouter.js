import { createRoute } from "@tanstack/react-router";
import { rootRouter } from "./rootrouter";
import { DashBoardPage } from "../pages/DashBoardPage";

const dashboardRouter = createRoute({
  getParentRoute: () => rootRouter,
  path: "/dashboard",
  component: DashBoardPage,
});

export { dashboardRouter };

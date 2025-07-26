import { createRoute } from "@tanstack/react-router";
import { rootRouter } from "./rootrouter";
import { DashBoardPage } from "../pages/DashBoardPage";

const dashboardRouter = createRoute({
  getParentRoute: () => rootRouter,
  path: "/dashboard",
  component: DashBoardPage,
  beforeLoad : () => {
    const token = localStorage.getItem("token");
    console.log("token", token)
    if (!token) {
      return {
        redirectTo: "/login",
      };
    }
  }
});

export { dashboardRouter };

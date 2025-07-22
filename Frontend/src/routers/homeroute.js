import { createRoute } from "@tanstack/react-router";
import { rootRouter } from "./rootrouter";
import { HomePage } from "../pages/Homepage";

const homeRouter = createRoute({
  getParentRoute: () => rootRouter,
  path: "/",
  component: HomePage,
});

export { homeRouter };

import { createRoute } from "@tanstack/react-router";
import { rootRouter } from "./rootrouter";
import Passwordspage  from "../pages/Passwordspage";

const PaswordsRoute = createRoute({
    getParentRoute: () => rootRouter,
    path: "/passwords",
    component: Passwordspage,
})  

export {PaswordsRoute}

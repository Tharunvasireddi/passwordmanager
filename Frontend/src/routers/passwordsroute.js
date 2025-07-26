import { createRoute } from "@tanstack/react-router";
import { rootRouter } from "./rootrouter";
import Passwordspage  from "../pages/Passwordspage";

const PaswordsRoute = createRoute({
    getParentRoute: () => rootRouter,
    path: "/passwords",
    component: Passwordspage,
    beforeLoad : () => {
        const token = localStorage.getItem("token");
        console.log("token", token)
        if (!token) {
          return {
            redirectTo: "/login",
          };
        }
      }
})  

export {PaswordsRoute}

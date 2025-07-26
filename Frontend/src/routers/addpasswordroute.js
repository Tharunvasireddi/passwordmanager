import { createRoute } from "@tanstack/react-router";
import  {AddPasswordpage}  from "../pages/AddPasswordpage";
import { rootRouter } from "./rootrouter";


const addpasswordroute = createRoute({
    getParentRoute: () => rootRouter,
    path: '/add-password',
    component: AddPasswordpage,
});     

export { addpasswordroute };

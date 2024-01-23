import { Home, Projects } from "../pages";
import { AppRoutes } from "../utils/constants";

export const routes = [
    // app routes
    { path: AppRoutes.HOME, component: <Home /> },
    { path: AppRoutes.PROJECTS, component: <Projects /> },

    // error routes
    //   { path: AppRoutes._401, component: <NotAuthorized />, auth: false },
    //   { path: AppRoutes._404, component: <NotFound />, auth: false },
];
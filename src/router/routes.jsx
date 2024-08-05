import { Home, Projects } from "../pages";
import { ProjectInfo } from "../pages/ProjectInfo";
import { AppRoutes } from "../utils/constants";

export const routes = [
    // app routes
    { path: AppRoutes.HOME, component: <Home /> },
    { path: AppRoutes.PROJECTS, component: <Projects /> },
    { path: AppRoutes.PROJECT, component: <ProjectInfo /> },

];
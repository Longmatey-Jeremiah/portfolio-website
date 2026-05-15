import {
  About,
  Contact,
  Home,
  NotFound,
  ProjectDetail,
  Projects,
  Resume,
  Writing,
  WritingDetail,
} from "@/pages";

export const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/about",
    component: <About />,
  },
  {
    path: "/projects",
    component: <Projects />,
  },
  {
    path: "/projects/:slug",
    component: <ProjectDetail />,
  },
  {
    path: "/writing",
    component: <Writing />,
  },
  {
    path: "/writing/:slug",
    component: <WritingDetail />,
  },
  {
    path: "/contact",
    component: <Contact />,
  },
  {
    path: "/resume",
    component: <Resume />,
  },
  {
    path: "*",
    component: <NotFound />,
  },
];

import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "@/components/layout";
import { routes } from "./routes";

export default function Router() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        {routes.map(({ path, component }) => (
          <Route path={path} key={path} element={component} />
        ))}
      </Route>
    </Routes>
  );
}

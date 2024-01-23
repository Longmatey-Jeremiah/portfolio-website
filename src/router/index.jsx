/* eslint-disable */
// @ts-nocheck

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map(({ path, component }) => (
                    <Route
                        path={path}
                        key={path}
                        element={component}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}
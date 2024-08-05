import { Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./routes";
import { AnimatePresence } from 'framer-motion';
import PageWrapper from "../components/ui/PageWrapper";

export default function Router () {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {routes.map(({ path, component }) => (
                    <Route
                        path={path}
                        key={path}
                        element={<PageWrapper>{component}</PageWrapper>}
                    />
                ))}
            </Routes>
        </AnimatePresence>
    );
}

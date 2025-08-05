import { Home } from "./pages";
import { Navbar } from "./components";
import { ThemeProvider } from "./providers";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col items-center justify-center w-full dark:bg-black/25 dark:text-white">
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;

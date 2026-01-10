import { Home } from "./pages";
import { Navbar } from "./components";
import { ThemeProvider } from "./providers";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-svh flex-col items-center justify-center w-full dark:text-white font-sans">
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;

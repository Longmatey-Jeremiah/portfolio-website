import { ThemeProvider } from "@/providers";
import Router from "./routes";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="jl-theme">
      <Router />
    </ThemeProvider>
  );
}

export default App;

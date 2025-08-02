import { Home } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center w-full">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

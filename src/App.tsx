import { Button } from "@/components/ui/button";
import HeroSection from "./pages/Home";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center w-full">
      <HeroSection />
      <Button>Click me</Button>
    </div>
  );
}

export default App;

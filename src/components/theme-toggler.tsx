import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Moon className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />
      <Sun className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

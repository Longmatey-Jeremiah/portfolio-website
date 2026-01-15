import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right";
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  children,
  side = "right",
  className,
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 h-screen w-70 bg-gradient-to-br from-black/80 via-black/80 to-black/5 backdrop-blur-2xl dark:from-gray-800/80 dark:via-gray-800/45 dark:to-gray-800/50 z-50 md:hidden transition-transform duration-300 ease-in-out p-6",
          side === "left" ? "left-0" : "right-0",
          className
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="text-white hover:text-white/80 focus:outline-none transition-colors duration-200"
              aria-label="Close sidebar"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </aside>
    </>
  );
};

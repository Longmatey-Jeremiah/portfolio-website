import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Code, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggler";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
  { label: "About", href: "#about", icon: <User className="w-4 h-4" /> },
  {
    label: "Projects",
    href: "#projects",
    icon: <Briefcase className="w-4 h-4" />,
  },
  { label: "Skills", href: "#skills", icon: <Code className="w-4 h-4" /> },
  { label: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-4 z-50 w-auto transition-all duration-300 rounded-3xl ${
        isScrolled
          ? "bg-white/15 backdrop-blur-sm border-2 shadow-xs"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <h1 className="text-md font-medium">Jeremiah Longmatey</h1>
          </div> */}

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 ">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-1 p-2 rounded-md text-base hover:font-medium transition-all duration-200 hover:bg-white/10 hover:cursor-pointer"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-black/80 focus:outline-none focus:text-black/80 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/10 backdrop-blur-md border-t border-white/20">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-3 text-black/80 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-white/10 w-full text-left"
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

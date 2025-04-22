
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm py-4 dark:bg-gray-900/90 dark:text-white">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-xl font-bold text-tickyfy-black dark:text-white">
            Ticke<span className="text-tickyfy-green">Fy</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-tickyfy-green transition-colors">Home</a>
          <a href="#about" className="font-medium hover:text-tickyfy-green transition-colors">About</a>
          <a href="#features" className="font-medium hover:text-tickyfy-green transition-colors">Features</a>
          <a href="#team" className="font-medium hover:text-tickyfy-green transition-colors">Team</a>
          <a href="#contact" className="font-medium hover:text-tickyfy-green transition-colors">Contact</a>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation with Theme Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            className="ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden dark:bg-gray-800">
            <nav className="flex flex-col space-y-4 px-4">
              <a href="#home" className="font-medium hover:text-tickyfy-green transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="font-medium hover:text-tickyfy-green transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#features" className="font-medium hover:text-tickyfy-green transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#team" className="font-medium hover:text-tickyfy-green transition-colors" onClick={() => setIsMenuOpen(false)}>Team</a>
              <a href="#contact" className="font-medium hover:text-tickyfy-green transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

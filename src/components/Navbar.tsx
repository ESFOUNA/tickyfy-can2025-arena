
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/24bfd42d-216e-4e22-8c0b-80e200bff779.png" 
            alt="TickyFy Logo" 
            className="h-8"
          />
          <span className="text-xl font-bold text-tickyfy-black">
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
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden">
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

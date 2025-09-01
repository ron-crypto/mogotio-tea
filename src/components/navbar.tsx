import React from "react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Leaf, ShoppingCart } from "lucide-react";
import { cn } from "../lib/utils";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state } = useCart();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Leaf className="h-7 w-7 text-tea-DEFAULT" />
          <span className="font-serif text-xl font-bold text-tea-dark">motigo <span className="text-tea-gold">Tea</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-tea-dark hover:text-tea-DEFAULT transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-tea-DEFAULT hover:bg-tea-dark text-white">
            Shop Now
          </Button>
          <Link to="/cart" className="relative text-tea-dark hover:text-tea-DEFAULT transition-colors">
            <ShoppingCart className="h-6 w-6" />
            {state.items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-tea-gold text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {state.items.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-tea-dark p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-tea-dark hover:text-tea-DEFAULT transition-colors py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-tea-DEFAULT hover:bg-tea-dark text-white mt-2">
              Shop Now
            </Button>
            <Link
              to="/cart"
              className="text-tea-dark hover:text-tea-DEFAULT transition-colors py-2 border-b border-gray-100 flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ShoppingCart className="h-5 w-5" />
              Cart {state.items.length > 0 && `(${state.items.length})`}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

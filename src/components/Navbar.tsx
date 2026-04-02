import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartItemCount, onOpenCart }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Il Menù', href: '#menu' },
    { name: 'La Nostra Storia', href: '#storia' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-parchment/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex flex-col items-start group">
            <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-md'}`}>
              Bella 'Mbriana
            </span>
            <span className={`text-xs tracking-widest uppercase transition-colors ${isScrolled ? 'text-aglianico' : 'text-woodfire drop-shadow-md'}`}>
              di Mastrocinque Paolo
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-aglianico ${
                  isScrolled ? 'text-gray-700' : 'text-white drop-shadow-sm hover:text-woodfire'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#prenota"
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                isScrolled 
                  ? 'border-gray-300 text-gray-900 hover:border-aglianico hover:text-aglianico' 
                  : 'border-white/50 text-white hover:border-white hover:bg-white/10'
              }`}
            >
              Prenota
            </a>
            <button
              onClick={onOpenCart}
              className="bg-aglianico hover:bg-aglianico-dark text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              Ordina Ora
              {cartItemCount > 0 && (
                <span className="bg-white text-aglianico text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={onOpenCart}
              className={`relative p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/20'}`}
            >
              <ShoppingBag className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-aglianico text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-parchment">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/20'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-parchment border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-aglianico rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#prenota"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-aglianico rounded-md"
              >
                Prenota un Tavolo
              </a>
              <div className="pt-4 px-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenCart();
                  }}
                  className="w-full bg-aglianico text-white px-4 py-3 rounded-md font-medium text-center shadow-sm"
                >
                  Ordina Ora
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

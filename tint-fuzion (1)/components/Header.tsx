import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-cyan text-black py-2 px-4 text-xs md:text-sm font-bold tracking-wide hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="flex items-center gap-2">
            <MapPin size={14} /> Mobile Service in St. George, Utah
          </span>
          <span className="flex items-center gap-2">
            <Phone size={14} /> Call for a Free Estimate: {CONTACT_INFO.phone}
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-brand-cyan/20 py-2' : 'bg-transparent py-6'
        } ${!isScrolled && 'md:top-8'}`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 border-2 border-brand-cyan rounded-full flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,210,255,0.5)] transition-shadow">
              <div className="absolute inset-0 rounded-full border border-brand-cyan animate-ping opacity-20"></div>
              <span className="font-display font-bold text-brand-cyan text-xl">TF</span>
            </div>
            <div className="font-display font-bold text-2xl tracking-widest text-white group-hover:text-brand-cyan transition-colors">
              TINT<span className="text-brand-cyan">FUZION</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-brand-cyan transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-2xl font-display font-bold text-white hover:text-brand-cyan"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className="mt-8 text-brand-cyan font-bold text-xl flex items-center gap-2"
            >
              <Phone /> {CONTACT_INFO.phone}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
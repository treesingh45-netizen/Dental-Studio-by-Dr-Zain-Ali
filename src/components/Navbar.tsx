import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-white/60 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <a href="#home" onClick={(e) => handleScrollTo(e, '#home')} className="flex items-center gap-2.5 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg group-hover:shadow-dental/30 transition-all duration-300 group-hover:scale-105">
              <Logo className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-gray-900 font-playfair">Dental Studio</span>
              <span className="text-[11px] leading-tight font-medium text-dental-accent">by Dr Zain Ali</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 text-gray-600 hover:text-dental hover:bg-dental-light/30"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-dental transition-colors">
              <Phone size={16} />
              <span className="font-medium">{BUSINESS_INFO.phone}</span>
            </a>
            <a 
              href="#appointment"
              onClick={(e) => handleScrollTo(e, '#appointment')}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-dental to-dental-accent hover:from-dental-dark hover:to-dental text-white shadow-md shadow-dental/20 hover:shadow-lg hover:shadow-dental/30 transition-all duration-300 rounded-full px-6 py-2 h-9 font-semibold text-sm"
            >
              Book Appointment
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700 hover:bg-dental-light/30 p-2 rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="flex flex-col px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-gray-800 hover:text-dental hover:bg-dental-light/50 block px-4 py-3 rounded-xl text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-100 px-4">
                <a 
                  href="#appointment"
                  onClick={(e) => handleScrollTo(e, '#appointment')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-dental to-dental-accent text-white shadow-md rounded-full px-6 py-3 font-semibold"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

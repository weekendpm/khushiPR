import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Media & Wins', path: '/media' },
    { name: 'PR Diaries', path: '/pr-diaries' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-elegant' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <span className={`text-2xl lg:text-3xl font-black playfair tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}>
                  KHUSHI
                </span>
                <span className="text-2xl lg:text-3xl font-black playfair tracking-tight text-[#d4af37] ml-2 relative">
                  MISHRA
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-500"></span>
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`montserrat font-medium text-sm tracking-wide transition-colors duration-200 hover:text-[#d4af37] ${
                  location.pathname === link.path ? 'text-[#d4af37]' : 'text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 montserrat font-medium text-sm tracking-wide transition-colors duration-200 hover:text-[#d4af37] ${
                  location.pathname === link.path ? 'text-[#d4af37]' : 'text-black'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

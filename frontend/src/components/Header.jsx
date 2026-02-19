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
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 montserrat font-medium text-sm tracking-wide transition-all duration-300 rounded-lg group ${
                  location.pathname === link.path 
                    ? 'text-[#d4af37]' 
                    : isScrolled 
                      ? 'text-gray-700 hover:text-[#d4af37]' 
                      : 'text-white hover:text-[#d4af37]'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#d4af37] group-hover:w-3/4 transition-all duration-300 ${
                  location.pathname === link.path ? 'w-3/4' : ''
                }`}></span>
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
          <nav className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <Link to="/" className="group" onClick={() => setIsMobileMenuOpen(false)}>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <span className="text-2xl font-black playfair tracking-tight text-black">
                      KHUSHI
                    </span>
                    <span className="text-2xl font-black playfair tracking-tight text-[#d4af37] ml-2">
                      MISHRA
                    </span>
                  </div>
                </div>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black hover:text-[#d4af37]"
              >
                <X size={24} />
              </Button>
            </div>
            <div className="px-6 py-8 space-y-4 overflow-y-auto max-h-[calc(100vh-80px)]">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-4 rounded-lg montserrat font-medium text-base transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-[#d4af37] text-black'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-black playfair">
              <span className="text-white">KHUSHI</span>
              <span className="text-[#d4af37] ml-2">MISHRA</span>
            </h3>
            <p className="montserrat text-gray-400 text-sm leading-relaxed max-w-xs">
              Building visibility for brands, leaders, and stories that deserve attention.
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-[#d4af37] to-transparent rounded-full"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold playfair mb-6 text-[#d4af37]">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/about" className="block montserrat text-sm text-gray-400 hover:text-[#d4af37] transition-all duration-300 hover:translate-x-1 transform">
                About Me
              </Link>
              <Link to="/case-studies" className="block montserrat text-sm text-gray-400 hover:text-[#d4af37] transition-all duration-300 hover:translate-x-1 transform">
                Case Studies
              </Link>
              <Link to="/media" className="block montserrat text-sm text-gray-400 hover:text-[#d4af37] transition-all duration-300 hover:translate-x-1 transform">
                Media & Wins
              </Link>
              <Link to="/pr-diaries" className="block montserrat text-sm text-gray-400 hover:text-[#d4af37] transition-all duration-300 hover:translate-x-1 transform">
                PR Diaries
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold playfair mb-6 text-[#d4af37]">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <Mail size={18} className="text-[#d4af37] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:Khushianand007@gmail.com" className="montserrat text-sm text-gray-400 hover:text-[#d4af37] transition-colors duration-300 break-all">
                  Khushianand007@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone size={18} className="text-[#d4af37] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:+917976343276" className="montserrat text-sm text-gray-400 hover:text-[#d4af37] transition-colors duration-300">
                  +91 7976343276
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#d4af37] mt-1 flex-shrink-0" />
                <span className="montserrat text-sm text-gray-400">
                  Safdarjung Enclave, New Delhi
                </span>
              </div>
            </div>
            <div className="flex space-x-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:bg-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#d4af37] hover:bg-[#d4af37]/10 hover:border-[#d4af37]/30 transition-all duration-300 transform hover:scale-110">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="montserrat text-sm text-gray-500">
              © {new Date().getFullYear()} Khushi Mishra. All rights reserved.
            </p>
            <p className="montserrat text-xs text-gray-600">
              Crafted with precision & passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

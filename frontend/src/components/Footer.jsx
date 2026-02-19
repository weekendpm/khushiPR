import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Instagram, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold playfair mb-4">
              <span className="text-white">KHUSHI</span>
              <span className="text-[#d4af37] ml-2">MISHRA</span>
            </h3>
            <p className="montserrat text-gray-400 text-sm leading-relaxed">
              Building visibility for brands, leaders, and stories that deserve attention.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold playfair mb-4 text-[#d4af37]">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block montserrat text-sm text-gray-400 hover:text-[#d4af37] transition-colors duration-200">
                About Me
              </Link>
              <Link to="/case-studies" className="block montserrat text-sm text-gray-400 hover:text-[#d4af37] transition-colors duration-200">
                Case Studies
              </Link>
              <Link to="/media" className="block montserrat text-sm text-gray-400 hover:text-[#d4af37] transition-colors duration-200">
                Media & Wins
              </Link>
              <Link to="/pr-diaries" className="block montserrat text-sm text-gray-400 hover:text-[#d4af37] transition-colors duration-200">
                PR Diaries
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold playfair mb-4 text-[#d4af37]">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-[#d4af37] mt-1 flex-shrink-0" />
                <a href="mailto:Khushianand007@gmail.com" className="montserrat text-sm text-gray-400 hover:text-[#d4af37] transition-colors duration-200">
                  Khushianand007@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-[#d4af37] mt-1 flex-shrink-0" />
                <a href="tel:+917976343276" className="montserrat text-sm text-gray-400 hover:text-[#d4af37] transition-colors duration-200">
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
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#d4af37] transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="montserrat text-sm text-gray-500">
            © {new Date().getFullYear()} Khushi Mishra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

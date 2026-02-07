import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Technology', href: '#technology' },
    { name: 'Solution', href: '#solution' },
    { name: 'Economics', href: '#economics' },
    { name: 'Manufacturing', href: '#manufacturing' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3 group">
                <div className={`transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
                    {/* H2 Logo SVG representation */}
                    <svg width="48" height="48" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <text x="50" y="75" fontFamily="serif" fontWeight="900" fontSize="80" textAnchor="middle">H2.</text>
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className={`font-bold text-lg tracking-wider leading-none font-serif ${isScrolled ? 'text-black' : 'text-white'}`}>HYDRIXON TECH</span>
                    <span className={`text-[0.6rem] font-bold tracking-[0.2em] uppercase ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>Company</span>
                </div>
            </a>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-hydrixon-accent transition-colors ${
                    isScrolled ? 'text-slate-700' : 'text-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-hydrixon-primary hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
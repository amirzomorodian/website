import React from 'react';
import { Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
                <div className="text-white">
                    <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                         <text x="50" y="75" fontFamily="serif" fontWeight="900" fontSize="80" textAnchor="middle">H2.</text>
                    </svg>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-lg text-white font-serif tracking-wider leading-none">HYDRIXON TECH</span>
                    <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-slate-400">Company</span>
                </div>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Smart. Safe. Solid-State Hydrogen storage System.<br/>
              Powering the future of clean energy.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/hydrixon-tech-ltd/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#technology" className="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">Solution</a></li>
              <li><a href="#economics" className="hover:text-white transition-colors">Economics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-blue-500" />
                <span>Hydrixon Tech Ltd.<br/>Global Operations</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-500" />
                <a href="mailto:info@hydrixon.com" className="hover:text-white transition-colors">info@hydrixon.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Hydrixon Tech Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
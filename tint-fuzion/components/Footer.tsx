import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full border border-brand-cyan flex items-center justify-center text-brand-cyan font-bold font-display">TF</div>
              <span className="text-xl font-bold text-white font-display">TINT<span className="text-brand-cyan">FUZION</span></span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Providing premium window tinting solutions for St. George and Southern Utah since 2005. 
              Authorized Rayno Window Film Dealer.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-card flex items-center justify-center text-gray-400 hover:bg-brand-cyan hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-card flex items-center justify-center text-gray-400 hover:bg-brand-cyan hover:text-black transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-card flex items-center justify-center text-gray-400 hover:bg-brand-cyan hover:text-black transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-brand-cyan transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-cyan transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-brand-cyan transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-cyan transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 font-display">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>{CONTACT_INFO.address}</li>
              <li>{CONTACT_INFO.phone}</li>
              <li>{CONTACT_INFO.email}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Tint Fuzion. All rights reserved.</p>
          <p>Designed with precision.</p>
        </div>
      </div>
    </footer>
  );
};
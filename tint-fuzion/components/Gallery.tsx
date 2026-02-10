import React from 'react';
import { Section } from './ui/Section';

const IMAGES = [
  "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1550136513-548af4445338?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800"
];

export const Gallery: React.FC = () => {
  return (
    <Section id="gallery" darker>
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold text-white mb-4">Our Work</h2>
        <p className="text-gray-400">See the Tint Fuzion difference.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {IMAGES.map((src, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer">
            <img 
              src={src} 
              alt={`Gallery item ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-brand-cyan/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-black font-bold uppercase tracking-widest border border-black px-4 py-2">View</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
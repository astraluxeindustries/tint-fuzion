import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621996659490-3275b4d0d951?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Car Window Tint" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="py-1 px-3 border border-brand-cyan/50 rounded-full text-brand-cyan text-sm font-semibold tracking-wider uppercase bg-black/50 backdrop-blur-sm">
            Est. 2005 • St. George, Utah
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-white mb-6 uppercase tracking-tight"
        >
          Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-600">Protection</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Window tinting for all types of glass. Experience up to 
          <span className="text-brand-cyan font-bold"> 99% UV protection</span> and 
          superior heat rejection for your vehicle, home, or business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
            Get Free Estimate
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth'})}>
            Explore Services
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 z-10"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};
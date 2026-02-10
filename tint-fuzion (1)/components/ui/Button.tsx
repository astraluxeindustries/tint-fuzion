import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = "button",
  fullWidth = false
}) => {
  const baseStyles = "relative px-8 py-3 font-display font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden group rounded-sm";
  
  const variants = {
    primary: "bg-brand-cyan text-black hover:bg-white hover:text-brand-cyan hover:shadow-[0_0_20px_rgba(0,210,255,0.6)]",
    outline: "border-2 border-brand-cyan text-brand-cyan hover:bg-brand-cyan hover:text-black",
    ghost: "text-brand-cyan hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
      type={type}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {/* Glare effect */}
      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shimmer" />
    </motion.button>
  );
};
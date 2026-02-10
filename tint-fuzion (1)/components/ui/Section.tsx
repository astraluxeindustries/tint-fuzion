import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  darker?: boolean;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, darker = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 px-4 md:px-8 relative overflow-hidden ${darker ? 'bg-brand-darker' : 'bg-brand-dark'} ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
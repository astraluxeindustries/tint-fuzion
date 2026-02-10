import React from 'react';
import { Section } from './ui/Section';
import { SERVICES, BENEFITS } from '../constants';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  return (
    <div id="services">
      {/* Benefits Strip */}
      <div className="bg-brand-cyan/10 border-y border-brand-cyan/20 backdrop-blur-md relative z-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {BENEFITS.map((benefit, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-full bg-brand-card flex items-center justify-center mb-4 group-hover:bg-brand-cyan group-hover:text-black transition-colors duration-300 text-brand-cyan shadow-lg">
                            <benefit.icon size={32} />
                        </div>
                        <h3 className="font-display font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-sm text-gray-400">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Main Services */}
      <Section className="bg-brand-dark">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Quality work and customer satisfaction is very important to us. 
            Let us show you how we can change the appearance and comfort level of your windows!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[300px] overflow-hidden rounded-xl border border-white/10"
            >
              <div className="absolute inset-0">
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-500"></div>
              </div>
              
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-2">
                        <service.icon className="text-brand-cyan" size={28} />
                        <h3 className="font-display text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {service.description}
                    </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
};
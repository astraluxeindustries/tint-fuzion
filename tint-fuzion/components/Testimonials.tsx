import React from 'react';
import { Section } from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <Section id="reviews" darker className="bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold text-white mb-4">Client Reviews</h2>
        <div className="w-20 h-1 bg-brand-cyan mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, idx) => (
          <div key={idx} className="bg-brand-card p-8 rounded-lg border border-white/5 relative">
            <Quote className="absolute top-4 right-4 text-brand-cyan/20" size={48} />
            <div className="flex text-brand-cyan mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center font-bold text-white">
                {testimonial.name[0]}
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">{testimonial.name}</h4>
                <span className="text-xs text-brand-cyan">Verified Customer</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
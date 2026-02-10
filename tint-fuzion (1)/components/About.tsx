import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2, Truck } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const About: React.FC = () => {
  return (
    <Section id="about" darker>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            We Are <span className="text-brand-cyan">Mobile</span>
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Tint Fuzion is a premier Window Tinting Company in <strong className="text-white">St. George, Utah</strong>. 
            We tint ALL types of glass: Vehicles, Homes, Boats, R.V.'s, Heavy Machinery, SXS - you name it!
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Most would say Southern Utah is the hottest place in the state. That is why it is so nice to be able to 
            personalize your level of tint coverage, and get the look and feel you desire. Tinting since 2005, 
            we have the experience and knowledge that you can count on.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <Truck className="text-brand-cyan shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">We Come To You</h4>
                <p className="text-sm text-gray-500">Full mobile service capability for your convenience.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-brand-cyan shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-bold">Rayno Authorized Dealer</h4>
                <p className="text-sm text-gray-500">
                  We use premium films. <a href={CONTACT_INFO.raynoLink} target="_blank" rel="noreferrer" className="text-brand-cyan underline hover:text-white transition">Visit Rayno Film</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
                <img 
                    src="https://images.unsplash.com/photo-1605218457336-92748b64b159?auto=format&fit=crop&q=80&w=600" 
                    alt="Tint Application" 
                    className="rounded-lg shadow-2xl translate-y-8"
                />
                <img 
                    src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=600" 
                    alt="Finished Tint" 
                    className="rounded-lg shadow-2xl"
                />
            </div>
            {/* Decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-cyan/5 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </Section>
  );
};
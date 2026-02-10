import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { CONTACT_INFO } from '../constants';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form & Info */}
        <div>
          <h2 className="font-display text-4xl font-bold text-white mb-2">Get A Free Quote</h2>
          <p className="text-gray-400 mb-8">Contact us to schedule an appointment. We'll get back to you within 24 hours.</p>

          <form className="space-y-4 mb-12">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="bg-brand-card border border-white/10 rounded-sm p-3 text-white focus:border-brand-cyan focus:outline-none transition-colors" />
              <input type="tel" placeholder="Phone" className="bg-brand-card border border-white/10 rounded-sm p-3 text-white focus:border-brand-cyan focus:outline-none transition-colors" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full bg-brand-card border border-white/10 rounded-sm p-3 text-white focus:border-brand-cyan focus:outline-none transition-colors" />
            <select className="w-full bg-brand-card border border-white/10 rounded-sm p-3 text-white focus:border-brand-cyan focus:outline-none transition-colors">
                <option>Select Service</option>
                <option>Automotive Tint</option>
                <option>Residential Tint</option>
                <option>Commercial Tint</option>
                <option>Other</option>
            </select>
            <textarea rows={4} placeholder="Tell us about your project..." className="w-full bg-brand-card border border-white/10 rounded-sm p-3 text-white focus:border-brand-cyan focus:outline-none transition-colors"></textarea>
            <Button fullWidth type="submit">Send Message</Button>
          </form>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
                <div className="bg-brand-cyan/10 p-3 rounded-full text-brand-cyan">
                    <Phone size={20} />
                </div>
                <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <p className="text-gray-400 text-sm">{CONTACT_INFO.phone}</p>
                </div>
            </div>
            <div className="flex items-start gap-4">
                <div className="bg-brand-cyan/10 p-3 rounded-full text-brand-cyan">
                    <Mail size={20} />
                </div>
                <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <p className="text-gray-400 text-sm">{CONTACT_INFO.email}</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="bg-brand-cyan/10 p-3 rounded-full text-brand-cyan">
                    <Clock size={20} />
                </div>
                <div>
                    <h4 className="text-white font-bold mb-1">Hours</h4>
                    <p className="text-gray-400 text-sm">{CONTACT_INFO.hours.weekdays}</p>
                    <p className="text-gray-400 text-sm">Sat: {CONTACT_INFO.hours.saturday}</p>
                </div>
            </div>
             <div className="flex items-start gap-4">
                <div className="bg-brand-cyan/10 p-3 rounded-full text-brand-cyan">
                    <MapPin size={20} />
                </div>
                <div>
                    <h4 className="text-white font-bold mb-1">Location</h4>
                    <p className="text-gray-400 text-sm">{CONTACT_INFO.address}</p>
                </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="h-full min-h-[400px] rounded-lg overflow-hidden border border-white/10 relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.281514755864!2d-113.52843468469956!3d37.07663437989269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ca45318392945d%3A0x6b1c3139366113b9!2s3217%20E%20Livia%20Dr%2C%20St.%20George%2C%20UT%2084790!5e0!3m2!1sen!2sus!4v1680123456789!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'grayscale(1) contrast(1.2) invert(0.9)'}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
            ></iframe>
            {/* Map Overlay for Dark Mode Effect */}
            <div className="absolute inset-0 bg-brand-cyan/10 pointer-events-none mix-blend-overlay"></div>
        </div>
      </div>
    </Section>
  );
};
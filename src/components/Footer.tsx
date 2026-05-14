import React from 'react';
import { MapPin, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-16">
          
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
                <Logo className="w-full h-full" />
              </div>
              <div>
                <p className="font-bold text-white text-lg font-playfair">Dental Studio</p>
                <p className="text-xs text-dental-accent font-medium">by Dr Zain Ali</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Your trusted partner in dental health. Providing expert dental care with advanced technology and personalized attention in Wah Cantt.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 hover:bg-[#25D366] flex items-center justify-center transition-all hover:scale-110">
                <MessageCircle size={16} />
              </a>
              <a href={BUSINESS_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 hover:bg-[#d62976] flex items-center justify-center transition-all hover:scale-110">
                <Instagram size={16} />
              </a>
              <a href={BUSINESS_INFO.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 hover:bg-[#1877F2] flex items-center justify-center transition-all hover:scale-110">
                <Facebook size={16} />
              </a>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="w-10 h-10 rounded-xl bg-gray-800 border border-gray-700 hover:bg-dental flex items-center justify-center transition-all hover:scale-110">
                <Phone size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-gray-400 hover:text-dental-accent transition-all">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-3">
              {['Orthodontic Treatment', 'Invisible Aligners', 'Dental Veneers', 'Dental Implants', 'Teeth Whitening', 'Root Canal Treatment'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-gray-400 hover:text-dental-accent transition-all">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-dental-accent flex-shrink-0" />
                <p className="text-sm text-gray-400">{BUSINESS_INFO.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-dental-accent flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sm text-gray-400 hover:text-dental-accent">
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 py-6 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} Dental Studio by Dr Zain Ali. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

import React from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle, Navigation } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-dental/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-dental-accent/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-dental font-semibold text-sm uppercase tracking-wider">
            <span className="w-8 h-[2px] bg-dental rounded-full" />
            Contact Us
            <span className="w-8 h-[2px] bg-dental rounded-full" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mt-3 section-heading">
            Visit Our Clinic
          </h2>
          <p className="text-gray-600 mt-6 text-base md:text-lg">
            We'd love to hear from you. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <a href="#contact" className="block">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 card-hover group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-dental to-dental-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dental-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-dental" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-dental transition-colors">Clinic Address</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
              </div>
            </a>

            <a href={`tel:${BUSINESS_INFO.phone}`} className="block">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 card-hover group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-dental transition-colors">Phone Number</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{BUSINESS_INFO.phone}</p>
                  </div>
                </div>
              </div>
            </a>

            <a href="#contact" className="block">
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 card-hover group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-dental transition-colors">Working Hours</h3>
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                      {BUSINESS_INFO.workingHours.replace(' | ', '\n')}
                    </p>
                  </div>
                </div>
              </div>
            </a>

            <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-2xl py-6 text-base font-bold shadow-lg transition-all hover:-translate-y-1">
              <MessageCircle className="w-5 h-5" />
              Chat with Us on WhatsApp
            </a>

          </motion.div>

          {/* Google Maps Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-dental/20 to-dental-accent/20 rounded-3xl -z-10" />
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-dental/10 h-[400px] lg:h-full min-h-[400px] relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106193.30876426742!2d72.64506305!3d33.7747863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa737f1caeb8f%3A0xc34cc5da8aacedeb!2sWah%20Cantt%2C%20Rawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714413000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, BadgeCheck } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gradient-to-b from-white to-dental-warm/50 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-dental/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-dental-accent/3 rounded-full blur-3xl" />
      
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
            Testimonials
            <span className="w-8 h-[2px] bg-dental rounded-full" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mt-3 section-heading">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 mt-6 text-base md:text-lg">
            Hear from our satisfied patients about their experience at Dental Studio by Dr Zain Ali.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-6 lg:p-7 pt-8 card-hover shadow-sm border border-gray-100 border-t-[4px] border-t-dental h-full relative overflow-hidden group flex flex-col">
                <div className="absolute top-4 right-4 text-gray-100 group-hover:text-gray-200 transition-colors z-0">
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="relative">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[#2D4A3A] text-xs font-semibold bg-[#E8F0EB] px-2.5 py-1 rounded-full">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    Verified
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-8 relative z-10 flex-grow">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 pt-5 border-t border-gray-100 relative z-10 w-full mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 flex items-center justify-center">
                    {/* @ts-ignore */}
                    <img src={testimonial.imageUrl} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                    {/* @ts-ignore */}
                    <p className="text-xs text-gray-500 truncate mt-0.5">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

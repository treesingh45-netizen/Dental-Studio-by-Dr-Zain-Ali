import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-white to-dental-warm relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-dental/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-dental-accent/3 rounded-full blur-3xl" />

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
            Our Services
            <span className="w-8 h-[2px] bg-dental rounded-full" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mt-3 section-heading">
            Comprehensive Dental Solutions
          </h2>
          <p className="text-gray-600 mt-6 text-base md:text-lg">
            From preventive care to advanced cosmetic procedures, we offer a full range of dental services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden card-hover shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-gray-100">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md z-10">
                    <span className="text-sm font-bold gradient-text">0{index + 1}</span>
                  </div>
                  
                  <div className="absolute inset-0 bg-dental/0 group-hover:bg-dental/20 transition-colors duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center scale-0 group-hover:scale-100 transition-all duration-500 shadow-lg text-dental">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-3 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-dental transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <a 
                    href="#appointment" 
                    className="inline-flex items-center text-sm font-bold text-dental hover:text-dental-dark transition-colors group/btn self-start"
                  >
                    Learn More 
                    <ArrowRight size={16} className="ml-1 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

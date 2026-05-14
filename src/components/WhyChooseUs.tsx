import React from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { FEATURES } from '../data';

const IconWrapper = ({ name }: { name: string }) => {
  const IconComponent = (Icons as any)[name] || Icons.CheckCircle;
  return <IconComponent size={28} strokeWidth={1.5} />;
};

export default function WhyChooseUs() {
  const cardColors = [
    { bg: "bg-green-50", iconBg: "bg-green-100", ring: "ring-green-200", iconCol: "text-green-700" },
    { bg: "bg-rose-50", iconBg: "bg-rose-100", ring: "ring-rose-200", iconCol: "text-rose-700" },
    { bg: "bg-emerald-50", iconBg: "bg-emerald-100", ring: "ring-emerald-200", iconCol: "text-emerald-700" },
    { bg: "bg-green-50", iconBg: "bg-green-100", ring: "ring-green-200", iconCol: "text-green-700" },
    { bg: "bg-amber-50", iconBg: "bg-amber-100", ring: "ring-amber-200", iconCol: "text-amber-700" },
    { bg: "bg-emerald-50", iconBg: "bg-emerald-100", ring: "ring-emerald-200", iconCol: "text-emerald-700" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dental/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-dental-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="why-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2D4A3A" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#why-grid)" />
        </svg>
      </div>

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
            Why Choose Us
            <span className="w-8 h-[2px] bg-dental rounded-full" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mt-3 section-heading">
            Why Patients Trust Us
          </h2>
          <p className="text-gray-600 mt-6 text-base md:text-lg">
            We are committed to providing exceptional dental care with a focus on comfort, safety, and outstanding results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, index) => {
            const colors = cardColors[index % cardColors.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`${colors.bg} rounded-2xl p-6 lg:p-8 card-hover border border-gray-100/80 hover:border-dental/20 shadow-sm h-full relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/50 to-transparent rounded-bl-full" />
                  <div className="relative mb-6 w-fit">
                    <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ring-2 ${colors.ring} ring-opacity-0 group-hover:ring-opacity-100 ${colors.iconCol}`}>
                      <IconWrapper name={feature.icon} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-dental transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-dental/0 to-transparent group-hover:via-dental/40 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

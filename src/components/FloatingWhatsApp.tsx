import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 flex items-end gap-3"
    >
      <a 
        href={BUSINESS_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-xl hover:bg-[#20bd5a] transition-all duration-300 hover:scale-105 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full animate-ping opacity-20 pointer-events-none" />
        <MessageCircle size={24} strokeWidth={2} className="relative z-10" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap text-sm font-semibold relative z-10">
          Chat Now
        </span>
      </a>
    </motion.div>
  );
}

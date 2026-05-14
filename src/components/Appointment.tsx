import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Phone, MessageSquare, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Appointment() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your request. Our team will contact you shortly to confirm the appointment.");
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-gradient-to-b from-dental-warm to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-dental/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-dental-accent/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="appt-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="#2D4A3A" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#appt-pattern)" />
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
            Book Now
            <span className="w-8 h-[2px] bg-dental rounded-full" />
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mt-3 section-heading">
            Schedule Your Appointment
          </h2>
          <p className="text-gray-600 mt-6 text-base md:text-lg">
            Take the first step towards your perfect smile. Fill out the form below or reach out via WhatsApp for quick booking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-dental via-dental-accent to-dental-light" />
              
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User className="w-4 h-4 text-dental" />
                    Full Name
                  </label>
                  <input type="text" required className="flex h-11 w-full rounded-xl border border-gray-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:border-dental focus-visible:ring-1 focus-visible:ring-dental/50" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-dental" />
                    Phone Number
                  </label>
                  <input type="tel" required className="flex h-11 w-full rounded-xl border border-gray-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:border-dental focus-visible:ring-1 focus-visible:ring-dental/50" placeholder="+92 XXX XXXXXXX" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Select Service</label>
                  <select required className="flex h-11 w-full rounded-xl border border-gray-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:border-dental focus-visible:ring-1 focus-visible:ring-dental/50">
                    <option value="">Choose a service</option>
                    <option value="orthodontics">Orthodontic Treatment</option>
                    <option value="aligners">Invisible Aligners</option>
                    <option value="veneers">Dental Veneers</option>
                    <option value="implants">Dental Implants</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-dental" />
                    Preferred Date
                  </label>
                  <input type="date" required className="flex h-11 w-full rounded-xl border border-gray-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:border-dental focus-visible:ring-1 focus-visible:ring-dental/50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-dental" />
                  Message (Optional)
                </label>
                <textarea rows={3} className="flex min-h-[80px] w-full rounded-xl border border-gray-200 bg-transparent px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:border-dental focus-visible:ring-1 focus-visible:ring-dental/50 resize-none" placeholder="Tell us about your dental concern..." />
              </div>

              <button type="submit" className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-dental to-dental-accent hover:from-dental-dark hover:to-dental text-white shadow-lg shadow-dental/25 hover:shadow-xl rounded-xl py-4 text-base font-semibold transition-all">
                Book Appointment
              </button>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="relative bg-gradient-to-br from-[#25D366] via-[#20c05c] to-[#128C7E] rounded-2xl p-6 text-white shadow-xl overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 shadow-inner">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quick Book via WhatsApp</h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  Prefer a faster way? Send us a message on WhatsApp and we'll book your appointment instantly.
                </p>
                <a href={BUSINESS_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full bg-white text-[#25D366] hover:bg-gray-50 rounded-xl font-bold shadow-lg py-4 transition-all">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-dental to-dental-accent" />
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-dental" />
                Working Hours
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center py-3 px-3 rounded-lg border-b border-gray-50 bg-gray-50">
                  <span className="text-gray-600 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-400" />Monday - Saturday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 px-3">
                  <span className="text-gray-600 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-400" />Sunday</span>
                  <span className="font-semibold text-gray-900">Closed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-dental-light to-white rounded-2xl p-6 border border-dental/20 relative overflow-hidden">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                Dental Emergency?
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                For urgent dental issues, call us directly for immediate assistance.
              </p>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl text-dental font-semibold text-sm shadow-sm hover:shadow-md transition-all">
                <Phone className="w-4 h-4" />
                {BUSINESS_INFO.phone}
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

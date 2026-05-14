import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, MessageCircle, Shield, Star, Heart, Award, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden pt-20">
      {/* Backgrounds */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=1920" 
          alt="Dental Background" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.97] via-white/85 to-white/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/30"></div>
      </div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="#2D4A3A"></circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)"></rect>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="space-y-7"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <div className="inline-flex items-center gap-2 bg-dental-light/80 border border-dental/20 rounded-full px-5 py-2 text-sm text-dental-dark font-medium backdrop-blur-sm shadow-sm">
                <Award size={16} />
                Trusted Dental Care in Wah Cantt
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              </div>
            </motion.div>

            <motion.h1 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-4xl md:text-5xl lg:text-[3.75rem] font-bold leading-[1.1] text-gray-900 font-playfair">
              Transform Your <span className="gradient-text relative inline-block">Smile
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="#3D6A4A" strokeWidth="3" strokeLinecap="round" opacity="0.4"></path>
                </svg>
              </span> with Expert Dental Care
            </motion.h1>

            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
              Experience advanced dental treatments with personalized care in a comfortable, modern environment. Your journey to a perfect smile starts here.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-4">
              <a 
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-dental to-dental-accent hover:from-dental-dark hover:to-dental text-white px-8 py-3 rounded-full text-base font-semibold transition-all shadow-lg shadow-dental/25 hover:shadow-xl hover:shadow-dental/30 group"
              >
                <Calendar size={20} />
                Book Appointment
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={BUSINESS_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-8 py-3 rounded-full text-base font-semibold transition-all shadow-sm hover:shadow-md border-solid"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-4 sm:gap-6 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-600 group">
                <div className="w-10 h-10 rounded-xl bg-dental-light/60 flex items-center justify-center group-hover:bg-dental-light transition-colors">
                  <Shield className="text-dental" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Safe & Hygienic</p>
                  <p className="text-xs text-gray-500">Hospital-grade</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 group">
                <div className="w-10 h-10 rounded-xl bg-dental-light/60 flex items-center justify-center group-hover:bg-dental-light transition-colors">
                  <Star className="text-dental" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">1000+ Happy Patients</p>
                  <p className="text-xs text-gray-500">5-star rated</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600 group">
                <div className="w-10 h-10 rounded-xl bg-dental-light/60 flex items-center justify-center group-hover:bg-dental-light transition-colors">
                  <Heart className="text-dental" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Pain-Free Care</p>
                  <p className="text-xs text-gray-500">Gentle approach</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[500px]">
              <div className="absolute left-0 top-16 bg-white/80 backdrop-blur rounded-2xl p-5 shadow-xl z-10 border border-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-dental to-dental-accent flex items-center justify-center shadow-md text-white">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Expert Care</p>
                    <p className="text-sm font-bold text-gray-900">Board Certified</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute right-0 bottom-20 bg-white/80 backdrop-blur rounded-2xl p-5 shadow-xl z-10 border border-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center shadow-md text-white">
                    <Heart size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Satisfaction</p>
                    <p className="text-sm font-bold text-gray-900">1000+ Smiles</p>
                  </div>
                </div>
              </div>

              <div className="absolute left-16 bottom-4 bg-white/80 backdrop-blur rounded-2xl p-4 shadow-lg z-10 border border-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Open Now</p>
                    <p className="text-sm font-bold text-gray-900">10 AM - 9 PM</p>
                  </div>
                </div>
              </div>
              
              {/* Spinner decor */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72">
                <div className="w-full h-full rounded-full border-2 border-dashed border-dental/20 animate-[spin_40s_linear_infinite]" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 50C240 90 480 10 720 50C960 90 1200 10 1440 50V100H0V50Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}

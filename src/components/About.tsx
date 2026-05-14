import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Cpu, Award, BadgeDollarSign } from 'lucide-react';

export default function About() {
  const stats = [
    { value: "1000+", label: "Happy Patients", icon: Users, bgColor: "bg-green-50", color: "text-[#2D4A3A]" },
    { value: "10+", label: "Modern Equipment", icon: Cpu, bgColor: "bg-emerald-50", color: "text-[#3D6A4A]" },
    { value: "10+", label: "Years Experience", icon: Award, bgColor: "bg-teal-50", color: "text-[#4A7A5A]" },
    { value: "100%", label: "Affordable Care", icon: BadgeDollarSign, bgColor: "bg-lime-50", color: "text-[#2D7A4A]" }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dental/3 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-dental-accent/3 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      <div className="absolute inset-0 opacity-[0.015]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="#2D4A3A" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative lg:pr-8"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80" 
                alt="Doctor examining patient x-ray" 
                className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white rounded-2xl p-5 sm:px-8 sm:py-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-50 flex items-center gap-5 z-20">
              <div className="w-16 h-16 rounded-2xl bg-[#2D4A3A] flex items-center justify-center shadow-lg text-white shrink-0">
                <Award size={32} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-3xl font-bold text-[#2D4A3A] leading-none mb-1"><span className="tabular-nums">10+</span></p>
                <p className="text-sm text-gray-500 font-medium">Years Experience</p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-28 h-28 border-2 border-dental/10 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-10 w-20 h-20 bg-dental-accent/10 rounded-full -z-10" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
            className="space-y-6 lg:pl-4"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <span className="inline-flex items-center gap-2 text-dental font-semibold text-sm uppercase tracking-wider">
                <span className="w-8 h-[2px] bg-dental rounded-full" />
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mt-3 section-heading">
                Your Trusted Partner in Dental Health
              </h2>
            </motion.div>
            
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-gray-600 leading-relaxed text-base md:text-lg">
              At Dental Studio by Dr Zain Ali, we combine advanced dental technology with compassionate care to deliver exceptional results. Our state-of-the-art clinic in Wah Cantt is designed to provide a comfortable, stress-free experience for every patient.
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="text-gray-600 leading-relaxed">
              Led by Dr. Zain Ali, our experienced dental team is committed to maintaining the highest standards of hygiene and patient safety. From routine check-ups to advanced cosmetic procedures, we ensure every treatment is performed with precision and care in our sterilized, modern environment.
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "State-of-the-art digital X-rays & 3D imaging",
                "Hospital-grade sterilization protocols",
                "Personalized treatment plans",
                "Comfortable, stress-free environment"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="text-dental w-4 h-4 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className={`${stat.bgColor} rounded-xl p-4 card-hover border border-gray-100 group`}>
                  <stat.icon size={28} className={`mb-2 transition-transform group-hover:scale-110 ${stat.color}`} />
                  <p className="text-2xl font-bold text-gray-900"><span className="tabular-nums">{stat.value}</span></p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

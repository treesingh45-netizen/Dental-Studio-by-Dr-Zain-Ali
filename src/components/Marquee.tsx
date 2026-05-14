import React, { useRef } from 'react';
import { motion, useScroll, useVelocity, useTransform, useSpring, useAnimationFrame, useMotionValue } from 'motion/react';
import { wrap } from 'motion';
import { Star } from 'lucide-react';

const words = [
  "Orthodontic Treatment", 
  "Invisible Aligners", 
  "Dental Veneers", 
  "Teeth Whitening", 
  "Dental Implants", 
  "Root Canal",
  "Crown & Bridge",
  "Smile Makeover"
];

function ParallaxText({ children, baseVelocity = 1 }: { children: React.ReactNode; baseVelocity: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(() => {
    const v = smoothVelocity.get();
    // mapped [0, 1000] -> [0, 5] without clamp
    return (v / 1000) * 5;
  });

  const x = useTransform(() => `${wrap(-20, -45, baseX.get())}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
      <motion.div className="flex whitespace-nowrap flex-nowrap min-w-fit" style={{ x }}>
        {children}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="bg-white py-6 md:py-8 overflow-hidden flex relative z-20 w-full">
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10" />
      
      <ParallaxText baseVelocity={2}>
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <div key={i} className="flex items-center mx-6">
            <span className="text-dental font-playfair text-3xl md:text-5xl font-bold opacity-30">{word}</span>
            <Star className="w-8 h-8 mx-6 text-dental-accent/40" />
          </div>
        ))}
      </ParallaxText>
    </div>
  );
}

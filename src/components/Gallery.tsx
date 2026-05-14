import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const COMPARISONS: ComparisonType[] = [
  {
    title: "Smile Transformation",
    desc: "Complete smile makeover with veneers and whitening",
    image: "https://dentalexcellenceturkey.com/wp-content/uploads/2022/03/zirconia-crown-before-after-img-13.png"
  },
  {
    title: "Orthodontic to Whitening",
    desc: "Braces treatment followed by professional whitening",
    image: "https://media.gettyimages.com/id/641779740/photo/teeth-restoration.jpg?s=612x612&w=0&k=20&c=gDPnqGYcS7j8PdhiF2a6Xcd4qu6zV30KOrHIhzbPiHQ="
  },
  {
    title: "Implant & Crown Work",
    desc: "Dental implant with custom porcelain crown",
    image: "https://media.gettyimages.com/id/1368950145/photo/dentist-repairing-the-patients-teeth-in-the-dental-office.jpg?s=612x612&w=0&k=20&c=DipaQz7RgibUD90XaA9tvoprAc9SXx4eUvWL5FEjzlQ="
  },
  {
    title: "Deep Clean to Veneers",
    desc: "Professional cleaning followed by veneer application",
    image: "https://image.shutterstock.com/image-photo/smile-design-treatment-dentistry-aesthetic-600nw-2487941219.jpg"
  }
];

type ComparisonType = {
  title: string;
  desc: string;
  before?: string;
  after?: string;
  image?: string;
};

const GalleryItem: React.FC<{ comp: ComparisonType; idx: number }> = ({ comp, idx }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="space-y-4"
    >
      <div className="relative rounded-2xl overflow-hidden aspect-square select-none group bg-gray-100 shadow-sm">
        {comp.image ? (
          <img src={comp.image} className="absolute inset-0 w-full h-full object-cover" alt={comp.title} />
        ) : (
          <>
            <img src={comp.before} className="absolute inset-0 w-full h-full object-cover" alt="Before" />
            
            <div 
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
            >
              <img src={comp.after} className="absolute inset-0 w-full h-full object-cover max-w-none" style={{ width: '100%' }} alt="After" />
            </div>

            <div className="absolute top-4 left-4 bg-gray-600/90 text-white text-xs px-3.5 py-1.5 rounded-full font-medium tracking-wide z-20 backdrop-blur-sm shadow-sm transition-opacity duration-300">Before</div>
            <div className="absolute top-4 right-4 bg-[#3D6A4A]/90 text-white text-xs px-3.5 py-1.5 rounded-full font-medium tracking-wide z-20 backdrop-blur-sm shadow-sm transition-opacity duration-300">After</div>

            <div 
              className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.1)]"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none text-gray-600 border border-gray-100">
                <div className="flex items-center justify-center w-full h-full">
                  <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 -mr-0.5" strokeWidth={2.5} />
                  <ChevronRight className="w-3 h-3 md:w-4 md:h-4 -ml-0.5" strokeWidth={2.5} />
                </div>
              </div>
            </div>

            <input 
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 touch-pan-y"
            />
          </>
        )}
      </div>
      <div className="text-center px-2">
        <h3 className="font-bold text-gray-900 text-[15px]">{comp.title}</h3>
        <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">{comp.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gradient-to-b from-dental-warm to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-dental font-semibold text-sm uppercase tracking-wider">Smile Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 section-heading">
            Before & After Results
          </h2>
          <p className="text-gray-600 mt-6 md:text-lg">
            See the amazing transformations our patients have achieved. Drag the slider to compare before and after results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPARISONS.map((comp, idx) => (
            <GalleryItem key={idx} comp={comp} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}

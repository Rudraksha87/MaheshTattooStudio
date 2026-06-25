import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/a8c7de222_image.png',
    alt: 'Gold Crystal Stud Earring Collection on Green Velvet Tray',
  },
  {
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/4e748866f_image.png',
    alt: 'Silver & Mixed Metal Piercing Jewelry Display Tray',
  },
  {
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/c989ea733_image.png',
    alt: 'Crystal Star and Moon Stud Collection in Glass Case',
  },
  {
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/7cdce46a3_image.png',
    alt: 'Silver Nose Pin and Ear Stud Collection in Wooden Box',
  },
  {
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/799c03333_image.png',
    alt: 'Gold Angel and Star Dangle Earring Display on Black Velvet',
  },
  {
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/7770296cf_image.png',
    alt: 'Silver Nose Stud and Ear Piercing Jewelry in Wooden Showcase',
  },
  {
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/a93c4fad4_image.png',
    alt: 'Delicate Crystal Nose Pins and Ear Studs Behind Glass',
  },
  {
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/2e3b9275a_image.png',
    alt: 'Resin Heart Keychains and Gold Bracelet Accessories',
  },
  {
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/6285517d4_image.png',
    alt: 'Handmade Resin Jewelry Set with Heart Keychains and Bangles',
  },
];

export default function PiercingGallery() {
  const [lightbox, setLightbox] = useState(null);

  const prev = () => setLightbox((i) => (i - 1 + images.length) % images.length);
  const next = () => setLightbox((i) => (i + 1) % images.length);

  return (
    <section id="gallery" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="text-xs tracking-[0.3em] uppercase text-primary/70 font-body font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Collection
          </motion.span>
          <motion.h2
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Piercing <span className="text-primary">Gallery</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-muted-foreground font-body max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Explore our handpicked collection of premium piercing jewelry
          </motion.p>
        </div>

        {/* 3×3 Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <motion.button
              key={i}
              className="relative overflow-hidden rounded-xl cursor-pointer group select-none"
              style={{ aspectRatio: '1 / 1' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[500] flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 select-none"
              onClick={() => setLightbox(null)}
            >
              <X size={28} />
            </button>
            <button
              className="absolute left-3 sm:left-6 text-white/70 hover:text-white p-2 select-none"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={36} />
            </button>
            <motion.img
              key={lightbox}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-3 sm:right-6 text-white/70 hover:text-white p-2 select-none"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={36} />
            </button>
            <p className="absolute bottom-4 text-white/50 text-sm font-body">
              {lightbox + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
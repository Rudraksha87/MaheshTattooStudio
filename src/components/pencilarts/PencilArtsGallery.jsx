import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// 9 images: 1,4,6 = sketch | 2,3,5 = pencil | 7,8 = painting | 9 = blood art
const images = [
  {
    src: 'https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/e3864592a_WhatsAppImage2026-06-22at101121PM2.jpg',
    alt: 'Sketch Art',
  },
  {
    src: 'https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/da7f68c11_WhatsAppImage2026-06-22at101119PM.jpg',
    alt: 'Pencil Art',
  },
  {
    src: 'https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/20da1e1dd_WhatsAppImage2026-06-22at101120PM1.jpg',
    alt: 'Pencil Art',
  },
  {
    src: 'https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/fba181bd7_WhatsAppImage2026-06-22at101120PM.jpg',
    alt: 'Sketch Art',
  },
  {
    src: 'https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/da713fd03_WhatsAppImage2026-06-22at101122PM1.jpg',
    alt: 'Pencil Art',
  },
  {
    src: 'https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/55b6564d0_WhatsAppImage2026-06-22at101122PM.jpg',
    alt: 'Sketch Art',
  },
  {
    src: 'https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/545b0bf4e_WhatsAppImage2026-06-22at101121PM.jpg',
    alt: 'Painting',
  },
  {
    src: 'https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/b9d2aa62c_WhatsAppImage2026-06-22at101121PM1.jpg',
    alt: 'Painting',
  },
  {
    src: 'https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/033d7722f_WhatsAppImage2026-06-22at101119PM1.jpg',
    alt: 'Blood Art',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function PencilArtsGallery() {
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
            Our Portfolio
          </motion.span>
          <motion.h2
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Pencil Art <span className="text-primary">Gallery</span>
          </motion.h2>
        </div>

        {/* 3×3 uniform grid – all cards square aspect ratio */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {images.map((img, i) => (
            <motion.button
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onClick={() => setLightbox(i)}
              className="relative overflow-hidden rounded-xl cursor-pointer group select-none block"
              style={{ aspectRatio: '1 / 1' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
              />
              {/* Label badge on hover - no dark overlay */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] p-2">
                <span className="inline-block px-2 py-1 rounded-md bg-black/50 backdrop-blur-sm text-[10px] sm:text-xs tracking-[0.12em] uppercase text-white font-body font-semibold">
                  {img.alt}
                </span>
              </div>
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
              className="absolute left-3 sm:left-6 text-white/70 hover:text-white p-2 select-none z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={36} />
            </button>
            <motion.img
              key={lightbox}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-[88vw] max-h-[85vh] object-contain rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-3 sm:right-6 text-white/70 hover:text-white p-2 select-none z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={36} />
            </button>
            <p className="absolute bottom-4 text-white/50 text-sm font-body">
              {lightbox + 1} / {images.length} &bull; {images[lightbox].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
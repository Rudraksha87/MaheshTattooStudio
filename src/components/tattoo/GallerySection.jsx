import { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Lightbox from '@/components/tattoo/Lightbox';

const categories = ['Blackwork', 'Realism', 'Traditional', 'Japanese', 'Geometric', 'Minimalist'];

const galleryImages = [
  {
    id: 1, category: 'Japanese', title: 'Nine-Tail Fox Spirit',
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/2f8b72922_image.png',
  },
  {
    id: 2, category: 'Japanese', title: 'Kanji Neck Script',
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/47fef2686_image.png',
  },
  {
    id: 3, category: 'Blackwork', title: 'Warrior Figure',
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/92916c727_image.png',
  },
  {
    id: 4, category: 'Blackwork', title: 'Koi Fish Linework',
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/8adb62016_image.png',
  },
  {
    id: 5, category: 'Realism', title: 'Shattered Face Portrait',
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/0ca2a6be5_image.png',
  },
  {
    id: 6, category: 'Realism', title: 'Dragon Armband',
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/3ef312d36_image.png',
  },
  {
    id: 7, category: 'Traditional', title: 'Tree of Life & Sword',
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/0385c24e4_image.png',
  },
  {
    id: 8, category: 'Traditional', title: 'Trident & Great Wave',
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/76482b463_image.png',
  },
  {
    id: 9, category: 'Geometric', title: 'Phoenix Sacred Geometry',
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/d976efc3f_IMG_7045JPG.jpg',
  },
  {
    id: 10, category: 'Geometric', title: 'Lion Circuit Grid',
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/09849dec8_IMG_7046JPG.jpg',
  },
  {
    id: 11, category: 'Minimalist', title: 'Rise From Ashes Phoenix',
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/6b6e71eb3_image.png',
  },
  {
    id: 12, category: 'Minimalist', title: 'Feather & Ink Splash',
    src: 'https://media.base44.com/images/public/6a35699540c0f3fcf7294410/55d48fbdf_image.png',
  },
];

function GalleryCard({ img, index, onClick }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'center center'] });
  const isEven = index % 2 === 0;
  const x = useTransform(scrollYProgress, [0, 1], [isEven ? -80 : 80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity }}
      className="relative group cursor-pointer break-inside-avoid rounded-xl overflow-hidden"
      onClick={() => onClick(img)}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={img.src}
          alt={img.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Label appears at bottom on hover — no dark overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)' }}
        >
          <p className="text-sm text-white font-body font-semibold">{img.title}</p>
          <p className="text-xs text-primary mt-0.5 font-body">{img.category}</p>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-xl transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}

function CategoryTicker({ onSelect }) {
  const doubled = [...categories, ...categories];

  return (
    <div className="relative overflow-hidden mb-12 select-none">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
      >
        {doubled.map((cat, i) => (
          <button
            key={`${cat}-${i}`}
            onClick={() => onSelect(cat)}
            className="px-5 py-2 rounded-full text-xs tracking-[0.15em] uppercase whitespace-nowrap font-body border border-border/40 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            {cat}
          </button>
        ))}
      </motion.div>
    </div>
  );
}

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(() => {
    if (!activeFilter) return galleryImages;
    return galleryImages.filter((img) => img.category === activeFilter);
  }, [activeFilter]);

  const openLightbox = (img) => {
    const idx = galleryImages.findIndex((g) => g.id === img.id);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i > 0 ? i - 1 : galleryImages.length - 1));
  const nextImage = () => setLightboxIndex((i) => (i < galleryImages.length - 1 ? i + 1 : 0));

  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <motion.span
            className="text-xs tracking-[0.3em] uppercase text-primary/70 font-body font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Vault
          </motion.span>
          <motion.h2
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Tattoo <span className="text-primary">Gallery</span>
          </motion.h2>
        </div>

        <CategoryTicker onSelect={setActiveFilter} />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <GalleryCard key={img.id} img={img} index={i} onClick={openLightbox} />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
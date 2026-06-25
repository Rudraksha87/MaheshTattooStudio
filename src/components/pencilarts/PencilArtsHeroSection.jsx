import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const slides = [
  {
    src: 'https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/2c1fd3721_WhatsAppImage2026-06-23at122029AM2.jpg',
    accent: '#d4a96a',
    label: 'Hanuman — Pencil Art',
  },
  {
    src: 'https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/d01be8d46_WhatsAppImage2026-06-23at122029AM.jpg',
    accent: '#c0c0c0',
    label: 'Narasimha — Pencil Art',
  },
  {
    src: 'https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/51898cfb9_WhatsAppImage2026-06-23at122029AM1.jpg',
    accent: '#a8a8a8',
    label: 'Maratha — Pencil Art',
  },
];

const categories = [
  { label: 'Tattoos', path: '/' },
  { label: 'Pencil Arts', path: '/pencil-arts' },
  { label: 'Piercing', path: '/piercing' },
];

export default function PencilArtsHeroSection() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 2000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <img
            src={slides[current].src}
            alt={slides[current].label}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">

        {/* 1. Main title — big, bold, white, centered */}
        <motion.h1
          className="font-body text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Your Memories. Our Work.
        </motion.h1>

        {/* 2. Slide label — colored, changes with slide */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={current}
            className="mt-5 font-body text-2xl sm:text-3xl md:text-4xl leading-tight font-light"
            style={{ color: slides[current].accent }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          >
            {slides[current].label}
          </motion.h2>
        </AnimatePresence>

        {/* 3. Description paragraph */}
        <motion.p
          className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed font-body"
          style={{ color: 'rgba(255,255,255,0.75)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          Award-winning pencil artists preserving your most precious memories. Where 40 years of artistic mastery meets the precision of the pencil.
        </motion.p>

        {/* 4. CTA buttons */}
        <motion.div
          className="mt-14 flex flex-col sm:flex-row items-center gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        >
          <motion.button
            onClick={() => scrollTo('#booking')}
            className="relative px-12 py-4 rounded-full bg-primary text-primary-foreground text-sm tracking-[0.15em] uppercase font-body font-semibold overflow-hidden group"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/0 via-white/25 to-primary/0"
              animate={{ x: [-100, 300] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <span className="relative flex items-center justify-center gap-2">Book Appointment</span>
            <motion.div
              className="absolute inset-0 rounded-full -z-10"
              animate={{ boxShadow: ['0 0 25px rgba(34,139,34,0.6)', '0 0 50px rgba(34,139,34,1)', '0 0 25px rgba(34,139,34,0.6)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
          <button
            onClick={() => scrollTo('#gallery')}
            className="px-10 py-4 rounded-full border border-white/40 text-white/90 text-sm tracking-[0.15em] uppercase font-body font-semibold hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            View Gallery
          </button>
        </motion.div>

        {/* 5. Category switcher */}
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        >
          {categories.map((cat) => {
            const isActive = location.pathname === cat.path;
            return (
              <button
                key={cat.path}
                onClick={() => navigate(cat.path)}
                className={`px-5 py-2.5 rounded-full text-xs tracking-[0.12em] uppercase font-body font-medium transition-all duration-300 border ${
                  isActive
                    ? 'border-white/70 text-white bg-white/10'
                    : 'border-white/20 text-white/60 hover:border-white/50 hover:text-white/90 bg-transparent'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = 'https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/9340e0d79_lolologo-removebg-preview.png';

export default function LoadingScreen({ onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      // restore scroll BEFORE calling onDone so the page is immediately scrollable
      onDone && onDone();
    }, 2200);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute rounded-full border border-white/10"
            initial={{ width: 300, height: 300, opacity: 0 }}
            animate={{ width: [300, 420, 380], height: [300, 420, 380], opacity: [0, 0.3, 0.15] }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          />

          <motion.img
            src={LOGO_URL}
            alt="Mahesh Tattoo & Art Studio"
            className="w-64 h-64 sm:w-80 sm:h-80 object-contain relative z-10"
            style={{ filter: 'drop-shadow(0 0 32px rgba(193,18,31,0.5))' }}
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{
              scale: [0.3, 1.15, 0.95, 1],
              opacity: [0, 1, 1, 1],
            }}
            transition={{
              duration: 1.4,
              times: [0, 0.4, 0.7, 1],
              ease: 'easeOut',
            }}
          />

          <motion.p
            className="mt-5 text-xs tracking-[0.35em] uppercase text-white/60 font-body font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Mahesh Tattoos & Arts
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="mt-6 h-[1px] rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '8rem', opacity: 1 }}
            transition={{ delay: 0.9, duration: 1.1, ease: 'easeOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
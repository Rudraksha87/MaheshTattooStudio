import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onPrev, onNext]);

  const image = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/95" onClick={onClose} />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-foreground/70 hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Prev */}
        <button
          onClick={onPrev}
          className="absolute left-4 lg:left-8 z-10 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-foreground/70 hover:text-primary transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Next */}
        <button
          onClick={onNext}
          className="absolute right-4 lg:right-8 z-10 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-foreground/70 hover:text-primary transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          className="relative z-10 max-w-[90vw] max-h-[85vh]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={image.src}
            alt={image.title}
            className="max-w-full max-h-[85vh] object-contain rounded-sm"
          />
          <p className="text-center text-sm text-muted-foreground mt-4 font-body tracking-wide">
            {image.title} — {image.category}
          </p>
        </motion.div>

        {/* Counter */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground tracking-[0.2em] font-body">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
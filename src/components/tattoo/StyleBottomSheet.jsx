import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

export default function StyleBottomSheet({ options, value, onChange, onClose, title = 'Select Style' }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[300] lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </motion.div>

      <motion.div
        className="fixed bottom-0 left-0 right-0 z-[301] lg:hidden rounded-t-2xl overflow-hidden"
        style={{
          background: 'rgba(15,15,15,0.97)',
          paddingBottom: 'env(safe-area-inset-bottom, 16px)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', stiffness: 340, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-white/10">
          <span className="text-sm font-body font-semibold tracking-[0.1em] uppercase text-white/80">{title}</span>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors select-none">
            <X size={18} />
          </button>
        </div>

        {/* Options */}
        <ul className="py-2 max-h-72 overflow-y-auto">
          {options.map((opt) => (
            <li key={opt}>
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-body text-white/80 hover:bg-white/5 transition-colors select-none"
                onClick={() => { onChange(opt); onClose(); }}
              >
                <span>{opt}</span>
                {value === opt && <Check size={16} className="text-primary" />}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}
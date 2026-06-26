import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Gangadhari Sai Kiran',
    text: 'I love this place, the ambience is spot on and service delivered is good. The artist understood exactly what I wanted.',
    rating: 5,
    initials: 'GS',
  },
  {
    name: 'Madara Uchiha',
    text: 'Got 2 tattoos and ear cuffs. Very impressive work and wide varieties. The studio is clean and the artists are very professional.',
    rating: 5,
    initials: 'MU',
  },
  {
    name: 'Simharaju Chiranjeevi',
    text: 'The vibe is amazing, and the staff is super friendly. My portrait tattoo turned out even better than I imagined.',
    rating: 5,
    initials: 'SC',
  },
  {
    name: 'Priya Reddy',
    text: 'Absolutely stunning work! The attention to detail is incredible. Highly recommend for anyone looking for quality tattoos.',
    rating: 5,
    initials: 'PR',
  },
  {
    name: 'Rahul Sharma',
    text: 'Best tattoo studio in Secunderabad. Clean, professional, and the artists really know their craft. Will come back for more!',
    rating: 5,
    initials: 'RS',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-card overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_70%,#D4AF37_1px,transparent_1px)] bg-[length:60px_60px]" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.span
          className="text-xs tracking-[0.3em] uppercase text-primary/70 font-body font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Testimonials
        </motion.span>
        <motion.h2
          className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          What Our <span className="text-primary">Clients Say</span>
        </motion.h2>

        {/* Google Rating Badge */}
        <motion.div
          className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-full glass-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
  key={s}
  size={16}
  className="fill-[#FFD700] text-[#FFD700] drop-shadow-[0_0_6px_#FFD700] transition-all duration-300"
/>
            ))}
          </div>
          <span className="text-sm text-foreground font-body">5.0 Rating · 4,000+ Happy Clients</span>
        </motion.div>

        {/* Carousel */}
        <div className="relative mt-16 h-56 sm:h-48">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star
  key={i}
  size={16}
  className="fill-[#FFD700] text-[#FFD700] drop-shadow-[0_0_6px_#FFD700] transition-all duration-300"
/>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="max-w-2xl text-lg sm:text-xl text-foreground/80 leading-relaxed font-body italic">
                &ldquo;{testimonials[current].text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-xs text-primary font-display font-bold">
                    {testimonials[current].initials}
                  </span>
                </div>
                <span className="text-sm text-foreground font-body font-medium">{testimonials[current].name}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-primary w-6' : 'bg-border/50'
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
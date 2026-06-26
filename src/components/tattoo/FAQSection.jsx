import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Does getting a tattoo hurt?',
    a: 'Pain levels vary depending on placement, size, and your personal tolerance. Most clients describe it as a mild scratching or buzzing sensation. Areas with more bone (ribs, ankles, spine) tend to be more sensitive. Our artists ensure you are comfortable throughout the session.',
  },
  {
    q: 'How much does a tattoo cost?',
    a: 'Pricing depends on size, complexity, placement, and the artist. Small tattoos start at ₹1,500, while large custom pieces range from ₹10,000 and up. We provide a detailed quote during your consultation — no hidden charges, ever.',
  },
  {
    q: 'How long does it take to heal?',
    a: 'Surface healing typically takes 2–4 weeks. Complete healing underneath the skin can take 3–6 months. Proper aftercare — keeping it clean, moisturized, and protected from the sun — is essential for the best results.',
  },
  {
    q: 'Is the studio hygienic and safe?',
    a: 'Absolutely. We follow hospital-grade sterilization protocols. All needles are single-use and disposed of after each client. Equipment is autoclave sterilized. Our artists are trained in blood-borne pathogen safety and the studio is fully licensed.',
  },
  {
    q: 'Can I bring my own design?',
    a: 'Yes! We love collaborating with clients on their vision. Bring any reference images, sketches, or ideas. Our artists will refine your concept into a tattoo-ready design that works perfectly for your body and skin type.',
  },
  {
    q: 'Do you do touch-ups?',
    a: 'Yes. We offer one free touch-up within 3 months of your tattoo, subject to artist assessment. Touch-ups address minor fading or imperfections that can occur during healing. Just contact us to schedule.',
  },
  {
    q: 'What should I do before my appointment?',
    a: 'Get a good night\'s sleep, eat a full meal, stay hydrated, and avoid alcohol for 24 hours before. Wear comfortable clothing that allows easy access to the area being tattooed. Avoid sunburn — we cannot tattoo on burnt skin.',
  },
  {
    q: 'How do I book an appointment?',
    a: 'Fill out our booking form above, call us at +91 97482 49133, or message us on WhatsApp. We recommend booking at least 1–2 weeks in advance, especially for larger pieces. Walk-ins are welcome based on availability.',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/20 last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-sm sm:text-base text-foreground/90 font-body pr-4 group-hover:text-primary transition-colors">
          {faq.q}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
          open ? 'border-primary text-primary bg-primary/10' : 'border-border/40 text-muted-foreground'
        }`}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-muted-foreground leading-relaxed font-body">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-card">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.span
            className="text-xs tracking-[0.3em] uppercase text-primary/70 font-body font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Questions
          </motion.span>
          <motion.h2
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Frequently <span className="text-primary">Asked</span>
          </motion.h2>
        </div>

        <motion.div
          className="glass-panel rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
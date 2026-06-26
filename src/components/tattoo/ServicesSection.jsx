import { motion } from 'framer-motion';
import { Sparkles, PenTool, Brush, Palette, Shield, MessageCircle } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Small Tattoos',
    price: '₹800+',
    description: 'Minimalist designs, symbols, lettering, and small pieces perfect for first-timers. Quick sessions with lasting impact.',
    size: 'Up to 2 inches',
    duration: '30–60 min',
  },
  {
    icon: PenTool,
    title: 'Medium Tattoos',
    price: '₹1,500+',
    description: 'Detailed work covering palm-sized areas. Ideal for script, floral patterns, and detailed symbols.',
    size: '2–6 inches',
    duration: '1–3 hours',
  },
  {
    icon: Brush,
    title: 'Large Tattoos',
    price: '₹3,000+',
    description: 'Full sleeves, back pieces, chest plates, and large-scale custom artwork. Multi-session projects.',
    size: '6+ inches',
    duration: 'Multiple sessions',
  },
  {
    icon: Palette,
    title: 'Custom Designs',
    price: '₹3,000+',
    description: 'One-of-a-kind artwork designed from scratch. Bring your idea and our artists will create a masterpiece.',
    size: 'Any size',
    duration: 'Design: 2–5 days',
  },
  {
    icon: Shield,
    title: 'Realistic Face Designs',
    price: '₹5,000+',
    description: 'Hyper-realistic portrait and face tattoos crafted with master-level precision. Your loved ones immortalized on skin.',
    size: 'Varies',
    duration: 'Consultation required',
  },
  {
    icon: MessageCircle,
    title: 'Consultation',
    price: 'Free',
    description: 'Sit down with an artist to discuss your vision, placement, size, and design. No commitment required.',
    size: '—',
    duration: '30 min',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-card">
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_70%_30%,#D4AF37_1px,transparent_1px)] bg-[length:50px_50px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            className="text-xs tracking-[0.3em] uppercase text-primary/70 font-body font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Craft
          </motion.span>
          <motion.h2
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Services &amp; <span className="text-primary">Pricing</span>
          </motion.h2>
          <motion.p
            className="mt-4 max-w-lg mx-auto text-muted-foreground font-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Every price is an estimate. Final pricing depends on design complexity, placement, and size.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group glass-panel p-8 rounded-2xl hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon size={22} className="text-primary" />
                </div>

                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-display text-lg text-foreground">{service.title}</h3>
                  <span className="font-display text-lg font-bold text-primary">{service.price}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-body">{service.description}</p>

                <div className="flex gap-4 text-xs text-muted-foreground/60 font-body">
                  <span>{service.size}</span>
                  <span className="text-border">|</span>
                  <span>{service.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Users, Palette, Syringe, Sparkles } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Premium Equipment',
    description: 'We use only the finest, industry-leading tattoo machines, needles, and inks imported from the USA and Europe.',
  },
  {
    icon: Heart,
    title: 'Hygiene Certified',
    description: 'Hospital-grade sterilization protocols. Single-use needles. Autoclave sterilized equipment. Your safety is our priority.',
  },
  {
    icon: Users,
    title: 'Experienced Artists',
    description: 'Our artists bring decades of combined experience across every style — from realism to traditional Japanese.',
  },
  {
    icon: Palette,
    title: 'Custom Designs',
    description: 'Every tattoo is designed uniquely for you. No templates, no copies — just one-of-a-kind art that tells your story.',
  },
  {
    icon: Syringe,
    title: 'Safe Procedures',
    description: 'All our artists are trained in blood-borne pathogen safety. Fully licensed and compliant with health regulations.',
  },
  {
    icon: Sparkles,
    title: 'Aftercare Support',
    description: 'We provide detailed aftercare instructions and are always available for follow-up questions during healing.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#D4AF37_1px,transparent_1px)] bg-[length:30px_30px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 lg:mb-20">
          <motion.span
            className="text-xs tracking-[0.3em] uppercase text-primary/70 font-body font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Difference
          </motion.span>
          <motion.h2
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Why <span className="text-primary">Choose Us</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group glass-panel p-8 rounded-2xl hover:border-primary/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-300">
                <feature.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
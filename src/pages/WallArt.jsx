import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/tattoo/Navbar';
import FloatingButtons from '@/components/tattoo/FloatingButtons';
import HeroSection from '@/components/tattoo/HeroSection';
import AboutSection from '@/components/tattoo/AboutSection';
import ArtistsSection from '@/components/tattoo/ArtistsSection';
import ServicesSection from '@/components/tattoo/ServicesSection';
import BookingSection from '@/components/tattoo/BookingSection';
import TestimonialsSection from '@/components/tattoo/TestimonialsSection';
import WhyChooseUsSection from '@/components/tattoo/WhyChooseUsSection';
import FAQSection from '@/components/tattoo/FAQSection';
import ContactSection from '@/components/tattoo/ContactSection';
import Footer from '@/components/tattoo/Footer';
import BottomNav from '@/components/tattoo/BottomNav';

// 3D Wall Art theme: warm copper / dark bronze
const theme = `
  :root {
    --primary: 25 85% 48%;
    --primary-foreground: 40 95% 92%;
    --accent: 30 60% 30%;
    --accent-foreground: 40 95% 92%;
    --ring: 25 85% 48%;
    --chart-1: 25 85% 48%;
  }
`;

export default function WallArt() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{theme}</style>
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <Navbar />
        <FloatingButtons />
        <main>
          <HeroSection />
          <AboutSection />
          <ArtistsSection />
          <ServicesSection />
          <BookingSection />
          <TestimonialsSection />
          <WhyChooseUsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <BottomNav />
        <div className="h-14 lg:hidden" />
      </motion.div>
    </>
  );
}
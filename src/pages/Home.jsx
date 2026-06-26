import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LoadingScreen from '@/components/tattoo/LoadingScreen';
import Navbar from '@/components/tattoo/Navbar';
import FloatingButtons from '@/components/tattoo/FloatingButtons';
import HeroSection from '@/components/tattoo/HeroSection';
import AboutSection from '@/components/tattoo/AboutSection';
import ArtistsSection from '@/components/tattoo/ArtistsSection';
import GallerySection from '@/components/tattoo/GallerySection';
import ServicesSection from '@/components/tattoo/ServicesSection';
import BookingSection from '@/components/tattoo/BookingSection';
import TestimonialsSection from '@/components/tattoo/TestimonialsSection';
import WhyChooseUsSection from '@/components/tattoo/WhyChooseUsSection';
import ContactSection from '@/components/tattoo/ContactSection';
import Footer from '@/components/tattoo/Footer';
import BottomNav from '@/components/tattoo/BottomNav';

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  // No inline overflow manipulation — CSS handles scroll at all times

  useEffect(() => {
    // Intersection Observer for scroll-reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Splash — passes onDone to trigger page zoom-out reveal */}
      <LoadingScreen onDone={() => setSplashDone(true)} />

      {/* Page content zooms out (scale 1.08 → 1) as splash disappears */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={splashDone ? { scale: 1, opacity: 1 } : { scale: 1.08, opacity: 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <Navbar />
        <FloatingButtons />

        <main>
          <HeroSection />
          <AboutSection />
          <ArtistsSection />
          <GallerySection />
          <ServicesSection />
          <BookingSection />
          <TestimonialsSection />
          <WhyChooseUsSection />
          <ContactSection />
        </main>

        <Footer />
        <BottomNav />
        {/* Bottom spacing so content isn't hidden behind BottomNav on mobile */}
        <div className="h-14 lg:hidden" />
      </motion.div>
    </>
  );
}
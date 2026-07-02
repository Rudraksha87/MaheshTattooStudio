import { MapPin, Phone, Clock } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Artists', href: '#artists' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

// Real Instagram gradient icon
function InstagramIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig-footer-grad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig-footer-grad)" />
      <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.8" fill="none" />
      <circle cx="17.5" cy="6.5" r="1" fill="white" />
    </svg>
  );
}

// YouTube icon
function YouTubeIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="4" fill="#FF0000" />
      <path d="M10 8.5l5 3.5-5 3.5V8.5z" fill="white" />
    </svg>
  );
}

export default function Footer() {

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-card border-t border-border/30 pt-20 pb-10" style={{ paddingBottom: 'max(2.5rem, env(safe-area-inset-bottom, 2.5rem))' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://media.base44.com/images/public/6a38df239c41ae8a5a1c941e/9340e0d79_lolologo-removebg-preview.png"
                alt="Mahesh Tattoo Studio"
                className="w-20 h-20 rounded-full object-cover border-2 border-primary/40"
              />
              <span className="text-sm tracking-[0.2em] uppercase text-foreground/80 font-body font-medium">
                Mahesh Tattoos & Arts
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed font-body">
              Where military precision meets artistic passion. Award-winning tattoo artists creating unforgettable body art since 2007. Mahesh Tattoos & Arts — your skin, our canvas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground/50 mb-6 font-body font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-body"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground/50 mb-6 font-body font-semibold">Contact</h4>
            <div className="space-y-4">
              <a href="https://maps.google.com/?q=Mahesh+Tattoo+Studio+Secunderabad" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group font-body">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary/60 group-hover:text-primary transition-colors" />
                <span>29-173, PS Circle, beside Aswin Diagnostic, New Vidya Nagar, Neredmet, Secunderabad, Telangana 500056</span>
              </a>
              <a href="tel:+919748249133" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group font-body">
                <Phone size={16} className="shrink-0 text-primary/60 group-hover:text-primary transition-colors" />
                <span>+91 97482 49133</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground group font-body">
                <Clock size={16} className="shrink-0 text-primary/60" />
                <span>9:00 AM – 11:00 PM Daily</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xs tracking-[0.2em] uppercase text-foreground/50 mb-6 font-body font-semibold">Follow Us</h4>

            {/* Instagram */}
            <a
              href="https://instagram.com/maheshtattoostudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 group font-body mb-3"
            >
              <span className="group-hover:scale-110 transition-transform">
                <InstagramIcon size={20} />
              </span>
              <span className="text-sm font-semibold text-foreground/80 group-hover:text-primary">@maheshtattoostudio</span>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@maheshtattoostudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-border hover:border-red-500/50 text-foreground hover:text-red-500 transition-all duration-300 group font-body"
            >
              <span className="group-hover:scale-110 transition-transform">
                <YouTubeIcon size={20} />
              </span>
              <span className="text-sm font-semibold text-foreground/80 group-hover:text-red-500">YouTube Channel</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/20 flex flex-col items-center justify-center gap-4">
          <p className="text-xs text-muted-foreground/60 font-body text-center">
            &copy; {new Date().getFullYear()} Mahesh Tattoos & Arts. All rights reserved.
          </p>
        </div>


      </div>
    </footer>
  );
}
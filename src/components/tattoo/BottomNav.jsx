import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Images, CalendarDays } from 'lucide-react';

const tabs = [
  { label: 'Home', icon: Home, href: '/', scrollTo: '#hero' },
  { label: 'Gallery', icon: Images, href: '/', scrollTo: '#gallery' },
  { label: 'Booking', icon: CalendarDays, href: '/', scrollTo: '#booking' },
];

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTap = (tab) => {
    if (location.pathname !== '/') {
      navigate('/');
      // wait for navigation then scroll
      setTimeout(() => {
        const el = document.querySelector(tab.scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      const el = document.querySelector(tab.scrollTo);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex items-center justify-around bg-black/80 backdrop-blur-xl border-t border-white/10"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)', height: 'calc(56px + env(safe-area-inset-bottom, 0px))' }}
    >
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => handleTap(tab)}
          className="flex flex-col items-center justify-center gap-1 flex-1 pt-2 text-white/50 hover:text-white transition-colors duration-200 select-none"
          aria-label={tab.label}
        >
          <tab.icon size={20} />
          <span className="text-[10px] tracking-wider uppercase font-body font-medium">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
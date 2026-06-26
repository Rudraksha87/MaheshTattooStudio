import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const checkTouch = () => setIsTouch(true);
    window.addEventListener('touchstart', checkTouch, { once: true });
    return () => window.removeEventListener('touchstart', checkTouch);
  }, []);

  useEffect(() => {
    if (isTouch) return;

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onEnter = () => {
      const el = document.elementFromPoint(pos.x, pos.y);
      if (el) {
        const interactive = el.closest('a, button, input, select, textarea, [role="button"]');
        setHovering(!!interactive);
      }
    };

    const onOver = (e) => {
      const el = e.target.closest('a, button, input, select, textarea, [role="button"]');
      setHovering(!!el);
    };

    const onOut = () => setHovering(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousemove', onEnter);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousemove', onEnter);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [isTouch, pos.x, pos.y]);

  if (isTouch) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hovering ? 1.8 : 1})`,
        }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            hovering
              ? 'w-3 h-3 border-primary bg-primary/20'
              : 'w-5 h-5 border-foreground/40'
          }`}
        />
      </div>
      {/* Trail dot */}
      <div
        className="fixed pointer-events-none z-[9998] w-1.5 h-1.5 rounded-full bg-primary/50 transition-all duration-300 ease-out"
        style={{
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          opacity: hovering ? 0 : 0.5,
        }}
      />
    </>
  );
}
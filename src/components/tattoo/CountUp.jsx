import { useState, useEffect, useRef } from 'react';

export default function CountUp({ end, decimals = 0, duration = 2 }) {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    startRef.current = performance.now();
    const step = (now) => {
      const elapsed = (now - startRef.current) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * end);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [end, duration]);

  return <>{count.toFixed(decimals)}</>;
}
import { useEffect, useRef } from 'react';

const stats = [
  { num: 120, suffix: '+', label: 'Projects Delivered' },
  { num: 6, suffix: '', label: 'Years Active' },
  { num: 40, suffix: '+', label: 'Brand Partners' },
  { num: 48, suffix: 'hr', label: 'First Cut SLA' },
];

function StatItem({ num, suffix, label }) {
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true;
        let current = 0;
        const increment = num / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= num) {
            el.textContent = num + suffix;
            clearInterval(timer);
          } else {
            el.textContent = Math.floor(current) + suffix;
          }
        }, 20);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [num, suffix]);

  return (
    <div className="reveal">
      <div className="stat-num" ref={ref}>{num}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="stats-section">
      {stats.map((s, i) => <StatItem key={i} {...s} />)}
    </div>
  );
}

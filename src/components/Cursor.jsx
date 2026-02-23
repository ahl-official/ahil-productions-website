import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;

    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const animate = () => {
      const { mx, my } = pos.current;
      pos.current.rx += (mx - pos.current.rx) * 0.12;
      pos.current.ry += (my - pos.current.ry) * 0.12;
      ring.style.left = pos.current.rx + 'px';
      ring.style.top = pos.current.ry + 'px';
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      ring.style.width = '60px';
      ring.style.height = '60px';
      ring.style.opacity = '0.9';
      cursor.style.transform = 'translate(-50%,-50%) scale(1.5)';
    };
    const onLeave = () => {
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.opacity = '0.6';
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    };

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    const interactables = document.querySelectorAll('a, button, .work-card, .service-card, .team-card, .reel-wrapper');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

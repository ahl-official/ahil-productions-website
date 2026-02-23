import { useEffect, useRef } from 'react';
import '../styles/Intro.css';

export default function Intro({ onComplete }) {
  const introRef = useRef(null);

  useEffect(() => {
    const el = introRef.current;
    document.body.style.overflow = 'hidden';

    const t1 = setTimeout(() => el.classList.add('bars-open'), 300);
    const t2 = setTimeout(() => el.classList.add('exit'), 5800);
    const t3 = setTimeout(() => {
      el.classList.add('gone');
      document.body.style.overflow = '';
      if (onComplete) onComplete();
    }, 6900);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <div className="intro" ref={introRef}>
      <div className="bar-top" />
      <div className="bar-bottom" />

      {/* ── INTRO VIDEO ────────────────────────────────────────────
          Replace /videos/intro-reel.mp4 with your showreel clip.
          Recommended: 6–10s, high quality, cinematic opener shot.
          Place the file in public/videos/intro-reel.mp4
          The gradient reel shows as fallback if no video is present.
      ─────────────────────────────────────────────────────────── */}
      <div className="intro-reel">
        <video
          className="intro-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/videos/intro-poster.jpg"
        >
          <source src="/videos/intro-reel.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="intro-grain" />
      <div className="intro-scratch" />
      <div className="intro-vignette" />

      <div className="intro-content">
        <div className="intro-logomark">
          <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle className="logo-circle" cx="28" cy="28" r="25" stroke="#488286" strokeWidth="1.2" fill="none" />
            <line className="logo-h" x1="14" y1="28" x2="42" y2="28" stroke="#B7D5D4" strokeWidth="1" />
            <line className="logo-v" x1="28" y1="14" x2="28" y2="42" stroke="#B7D5D4" strokeWidth="1" />
          </svg>
        </div>
        <div className="intro-studio-name">
          {['A', 'H', 'L'].map((char, i) => (
            <span key={i} className="char">{char}</span>
          ))}
        </div>
        <div className="intro-tagline">Multi-Discipline Production House</div>
        <div className="intro-meta">Mumbai &nbsp;·&nbsp; Est. 2019</div>
      </div>

      <div className="intro-progress">
        <div className="progress-track">
          <div className="progress-fill" />
        </div>
        <div className="progress-label">Loading</div>
      </div>
    </div>
  );
}

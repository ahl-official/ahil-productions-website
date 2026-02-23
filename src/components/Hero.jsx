import { useState, useEffect } from 'react';
import '../styles/Hero.css';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const desktopSrc = 'https://play.gumlet.io/embed/699c31e957a7b7f9b0649bc1?background=true&autoplay=true&loop=true&disable_player_controls=true&muted=true&preload=true';
  const mobileSrc = 'https://play.gumlet.io/embed/699c319e26981d891398c4da?background=true&autoplay=true&loop=true&disable_player_controls=true&muted=true&preload=true';

  return (
    <section className="hero">

      <div className="hero-video-wrap">
        <iframe
          key={isMobile ? 'mobile' : 'desktop'}
          loading="lazy"
          title="AHL Productions Hero Reel"
          src={isMobile ? mobileSrc : desktopSrc}
          referrerPolicy="origin"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
        />
        <div className="hero-video-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-tag">Est. 2019 &nbsp;·&nbsp; Multi-Discipline Studio</div>
        <h1 className="hero-title">
          We<br />
          <span className="teal">Create</span><br />
          Stories
        </h1>
        <div className="hero-footer">
          <p className="hero-desc">
            A multi-discipline production house crafting film, music, brand, and digital experiences that leave a mark.
          </p>
          <div className="hero-scroll">
            <div className="scroll-line" />
            Scroll
          </div>
        </div>
      </div>

      <div className="hero-bg-text">AHL</div>
    </section>
  );
}
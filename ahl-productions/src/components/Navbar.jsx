import { useEffect, useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="nav-logo">AHL</a>
      <ul className="nav-links">
        <li><a href="#work">Work</a></li>
        <li><a href="#packages">Packages</a></li>
        <li><a href="#slas">SLAs</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-cta">
        <a href="#contact" className="btn-outline">Start a Project</a>
      </div>
    </nav>
  );
}

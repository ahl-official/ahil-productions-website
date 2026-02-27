import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-video-wrap">
        <iframe
          loading="lazy"
          title="AHL Productions Hero Reel"
          src="https://play.gumlet.io/embed/699c243926981d891397076c?background=true&autoplay=true&loop=true&disable_player_controls=true&muted=true"
          style={{ border: 'none', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
          referrerPolicy="origin"
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
        />
        <div className="hero-video-overlay" />
      </div>

      <div className="hero-bg-text">AHL</div>
      <div className="hero-tag">Est. 2019 &nbsp;·&nbsp; Content Production Engine &nbsp;·&nbsp; Mumbai</div>
      <h1 className="hero-title">
        Your Brand's<br />
        <span className="teal">Content</span><br />
        Engine.
      </h1>
      <div className="hero-footer">
        <p className="hero-desc">
          Not a one-time shoot. We run structured shoot days, deliver on fixed timelines, and produce content at volume — without compromising craft.
        </p>
        <div className="hero-ctas">
          <a href="#packages" className="btn-filled hero-cta-primary">See Our Packages</a>
          <a href="#contact" className="btn-outline hero-cta-secondary">Book a Strategy Call</a>
        </div>
      </div>
    </section>
  );
}

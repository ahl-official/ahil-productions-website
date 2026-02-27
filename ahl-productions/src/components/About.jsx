export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-grid">
        <div className="about-left">
          <div className="section-label reveal">About</div>
          <h2 className="reveal reveal-delay-1">We Are <em>Built</em><br />Different</h2>
          <p className="reveal reveal-delay-2">
            AHL Productions is Mumbai's dedicated content production engine for brands that need to show up consistently — not just beautifully. We bring together film directors, music producers, brand strategists, and digital artists under one roof.
          </p>
          <p className="reveal reveal-delay-3">
            We run structured shoot days, deliver on fixed timelines, and produce content at volume. Based in Mumbai. Working everywhere. Obsessed with quality and fueled by creative risk.
          </p>
          <div className="about-proof reveal reveal-delay-4">
            <div className="about-proof-item">
              <span>✓</span> Fixed SLA on every project
            </div>
            <div className="about-proof-item">
              <span>✓</span> Strategy-led, not just aesthetic
            </div>
            <div className="about-proof-item">
              <span>✓</span> Volume without chaos
            </div>
          </div>
        </div>

        <div className="about-images reveal reveal-delay-2">
          {[
            { vid: '/videos/about-01.mp4', label: 'Direction' },
            { vid: '/videos/about-02.mp4', label: 'Production' },
            { vid: '/videos/about-03.mp4', label: 'Post' },
          ].map((panel, i) => (
            <div className="about-img" key={i}>
              <video
                className="about-video"
                autoPlay muted loop playsInline
                src={panel.vid}
              />
              <div className="about-img-label">{panel.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

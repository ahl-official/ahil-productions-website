const services = [
  { num: '01', title: 'Film & TV', desc: 'Narrative films, series, and documentary work. From development to final delivery — we command every frame.' },
  { num: '02', title: 'Motion Design', desc: 'Title sequences, motion graphics, and visual effects. Animation with soul and precision.' },
  { num: '03', title: 'Music Video', desc: 'Visual storytelling that amplifies your sound. Conceptual, bold, and built to outlast the moment.' },
  { num: '04', title: 'Podcast Shoots', desc: 'End-to-end podcast production at your location. We bring the gear — you bring the conversation.' },
  { num: '05', title: 'Photography', desc: 'Editorial, product, and still campaigns. A still image that carries the weight of a story.' },
  { num: '06', title: 'Post Production', desc: 'Color grading, sound design, VFX and editing suites — at your location or ours. Raw footage becomes cinema.' },
  { num: '07', title: 'Performance Content', desc: 'Ad creatives built for media spend. Hook-driven, format-tested, and optimised for Meta, YouTube, and Google.' },
  { num: '08', title: 'Branding & Commercial', desc: 'TVC, digital campaigns, and brand films. Strategy-led creative with production excellence baked in.' },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <div>
          <div className="section-label reveal">Capabilities</div>
          <h2 className="reveal reveal-delay-1">What We<br />Produce</h2>
        </div>
        <a href="#packages" className="btn-outline reveal">See Packages & Pricing</a>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className={`service-card reveal reveal-delay-${(i % 4) + 1}`} key={i}>
            <div className="service-num">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
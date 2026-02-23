const services = [
  { num: '01', title: 'Film & TV', desc: 'Narrative films, series, and documentary work. From development to final delivery — we command every frame.' },
  { num: '02', title: 'Music Video', desc: 'Visual storytelling that amplifies your sound. Conceptual, bold, and built to outlast the moment.' },
  { num: '03', title: 'Brand & Commercial', desc: 'TVC, digital campaigns, and brand films. Strategy-led creative with production excellence baked in.' },
  { num: '04', title: 'Motion Design', desc: 'Title sequences, motion graphics, and visual effects. Animation with soul.' },
  { num: '05', title: 'Photography', desc: 'Editorial, product, and still campaigns. A still image that carries the weight of a story.' },
  { num: '06', title: 'Post Production', desc: 'Color grading, sound design, VFX and editing suites. Where raw footage becomes cinema.' },
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <div>
          <div className="section-label reveal">What We Do</div>
          <h2 className="reveal reveal-delay-1">Our<br />Services</h2>
        </div>
        <a href="#contact" className="btn-outline reveal">Work With Us</a>
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

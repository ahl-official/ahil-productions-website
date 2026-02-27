const steps = [
  {
    num: '01',
    title: 'Strategy Brief',
    desc: 'We start with a structured intake — your brand, goals, audience, and content needs. No shooting without a signed brief.',
    time: 'Week 1',
  },
  {
    num: '02',
    title: 'Shoot Day Planning',
    desc: 'Shot lists approved 48 hrs before. Run-of-day scheduled. Every set change planned for maximum asset output.',
    time: 'Pre-shoot',
  },
  {
    num: '03',
    title: 'Production Day',
    desc: '4–6 set changes per day. Organised footage handed to post-production the same evening. No raw dumps.',
    time: 'Shoot day',
  },
  {
    num: '04',
    title: 'Post-Production',
    desc: 'First cut delivered within 48 hrs for reels. Two structured revision rounds. Feedback collected in writing.',
    time: '48 hrs onward',
  },
  {
    num: '05',
    title: 'Delivery & Review',
    desc: 'Final files in agreed formats. Monthly performance review for retainer clients — what worked, what to produce next.',
    time: 'Final delivery',
  },
];

export default function Process() {
  return (
    <section id="process" className="process-section">
      <div className="process-header">
        <div className="section-label reveal">How We Operate</div>
        <h2 className="reveal reveal-delay-1">A System,<br />Not a <span>Shoot.</span></h2>
      </div>

      <div className="process-steps">
        {steps.map((step, i) => (
          <div className={`process-step reveal reveal-delay-${(i % 3) + 1}`} key={i}>
            <div className="process-step-top">
              <div className="process-num">{step.num}</div>
              <div className="process-time">{step.time}</div>
            </div>
            <div className="process-connector" />
            <h3 className="process-title">{step.title}</h3>
            <p className="process-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const slas = [
  {
    type: 'Short Reels',
    duration: '15–60 sec',
    firstCut: '48 hrs',
    final: '5 days',
    revisions: '2 rounds',
    icon: '⚡',
  },
  {
    type: 'Ad Creative',
    duration: 'Performance formats',
    firstCut: '48 hrs',
    final: '5 days',
    revisions: '3 rounds',
    icon: '🎯',
  },
  {
    type: 'Long-form',
    duration: '3–10 min',
    firstCut: '5 days',
    final: '10 days',
    revisions: '2 rounds',
    icon: '🎬',
  },
  {
    type: 'Podcast',
    duration: 'Audio + Video',
    firstCut: '3 days',
    final: '7 days',
    revisions: '1 round',
    icon: '🎙️',
  },
  {
    type: 'Content Day Batch',
    duration: 'Full-day shoot',
    firstCut: '5 days',
    final: '10 days',
    revisions: '2 rounds',
    icon: '📦',
  },
];

export default function SLAs() {
  return (
    <section id="slas" className="sla-section">
      <div className="sla-bg-text">SLA</div>
      <div className="sla-inner">
        <div className="sla-header">
          <div className="section-label reveal">Delivery Guarantee</div>
          <h2 className="reveal reveal-delay-1">We Deliver<br /><span>On Time.</span><br />In Writing.</h2>
          <p className="sla-sub reveal reveal-delay-2">
            Every engagement comes with fixed SLAs. Miss a deadline? The revision is on us.
          </p>
        </div>

        <div className="sla-table reveal reveal-delay-2">
          <div className="sla-table-header">
            <div>Content Type</div>
            <div>First Cut</div>
            <div>Final Delivery</div>
            <div>Revisions</div>
          </div>
          {slas.map((s, i) => (
            <div className="sla-row" key={i}>
              <div className="sla-type">
                <span className="sla-icon">{s.icon}</span>
                <div>
                  <div className="sla-type-name">{s.type}</div>
                  <div className="sla-type-sub">{s.duration}</div>
                </div>
              </div>
              <div className="sla-val sla-first-cut">{s.firstCut}</div>
              <div className="sla-val">{s.final}</div>
              <div className="sla-val sla-revisions">{s.revisions}</div>
            </div>
          ))}
        </div>

        <div className="sla-rules reveal">
          <div className="sla-rule">
            <span>📋</span>
            <span>Revision clock starts on <em>written</em> feedback — not verbal</span>
          </div>
          <div className="sla-rule">
            <span>⏱️</span>
            <span>Rush delivery (50% faster) available at 30% surcharge</span>
          </div>
          <div className="sla-rule">
            <span>🔒</span>
            <span>Shoot-day cancellations require 48-hr notice or 50% day fee applies</span>
          </div>
          <div className="sla-rule">
            <span>✅</span>
            <span>Clients have 3 working days to review or SLA clock pauses</span>
          </div>
        </div>
      </div>
    </section>
  );
}

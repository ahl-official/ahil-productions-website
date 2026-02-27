const packages = [
  {
    num: '01',
    tag: 'Most Popular',
    title: 'On-Site Content Factory',
    subtitle: 'For brands that need consistent social content at volume.',
    price: 'From ₹55,000 / shoot day',
    features: [
      '20–30 short-form clips per full day',
      '50–80 production stills',
      '6–10 reels with caption drafts',
      '5-day first batch delivery',
      'Monthly retainer or one-time burst',
    ],
    ideal: 'D2C brands · Restaurants · Real Estate · Retail',
    highlight: false,
  },
  {
    num: '02',
    tag: 'Premium',
    title: 'Content Command Centre',
    subtitle: 'We become your in-house content team. Full operations outsource.',
    price: 'From ₹3.5L / month',
    features: [
      '4 shoot days/month at your location',
      '60+ assets per month',
      'Monthly content strategy session',
      'Performance review & content calendar',
      'Priority 48-hr first cut SLA',
      'Direct channel with Creative Director',
    ],
    ideal: 'Funded Startups · D2C Brands · FMCG · Real Estate Developers',
    highlight: true,
  },
  {
    num: '03',
    tag: 'Specialised',
    title: 'Performance Ad Creative',
    subtitle: 'Built for A/B testing and media spend — not just aesthetics.',
    price: 'From ₹75,000 / sprint',
    features: [
      '6–15 ad units per engagement',
      'Strategy-led hooks & CTAs before shoot',
      'UGC, talking head, product demo formats',
      '5-day platform-ready delivery',
      'Monthly creative refresh add-on',
    ],
    ideal: 'E-commerce · App Companies · Funded Startups · Performance Marketers',
    highlight: false,
  },
  {
    num: '04',
    tag: 'Specialised',
    title: 'Podcast Production',
    subtitle: 'End-to-end podcast recording at your location. No studio needed.',
    price: 'From ₹40,000 / episode',
    features: [
      'We bring all gear — lights, mics, cameras',
      '5–8 short clips for social per episode',
      'YouTube cut + audio-only version',
      '7-day full delivery',
      'Fortnightly / monthly retainer available',
    ],
    ideal: 'Founders · Consultants · NBFC/Fintech · Personal Brands',
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="packages-section">
      <div className="packages-header">
        <div>
          <div className="section-label reveal">What We Offer</div>
          <h2 className="reveal reveal-delay-1">Choose Your<br /><span>Package</span></h2>
        </div>
        <p className="packages-sub reveal reveal-delay-2">
          Structured offers. Defined deliverables. Fixed timelines.<br />
          No more "depends on scope."
        </p>
      </div>

      <div className="packages-grid">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className={`package-card reveal reveal-delay-${(i % 3) + 1} ${pkg.highlight ? 'package-card--highlight' : ''}`}
          >
            {pkg.highlight && <div className="package-badge">Highest Margin Offer</div>}
            <div className="package-top">
              <div className="package-num">{pkg.num}</div>
              <div className="package-tag-label">{pkg.tag}</div>
            </div>
            <h3 className="package-title">{pkg.title}</h3>
            <p className="package-subtitle">{pkg.subtitle}</p>
            <div className="package-price">{pkg.price}</div>
            <ul className="package-features">
              {pkg.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>
            <div className="package-ideal">
              <span>Ideal for: </span>{pkg.ideal}
            </div>
            <a href="#contact" className={pkg.highlight ? 'btn-filled package-cta' : 'btn-outline package-cta'}>
              Start a Conversation
            </a>
          </div>
        ))}
      </div>

      <div className="packages-note reveal">
        <span>All packages include 2 revision rounds.</span> Additional revisions, rush delivery, caption writing, and platform reformatting available as add-ons. <a href="#contact">Ask us for a custom quote →</a>
      </div>
    </section>
  );
}

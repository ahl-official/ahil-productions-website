const projects = [
  { tag: 'Film', year: '2025', name: 'Shattered Horizons' },
  { tag: 'Music Video', year: '2025', name: 'Neon Frequency' },
  { tag: 'Commercial', year: '2024', name: 'Brand Forward' },
  { tag: 'Documentary', year: '2024', name: 'Undercurrent' },
  { tag: 'Motion', year: '2024', name: 'Kinetic Forms' },
  { tag: 'Photography', year: '2024', name: 'Still Waters' },
  { tag: 'Commercial', year: '2024', name: 'Velocity Campaign' },
  { tag: 'Film', year: '2023', name: 'Golden Hour' },
  { tag: 'Podcast', year: '2023', name: 'The Deep Cut' },
  { tag: 'Music Video', year: '2023', name: 'Signal & Noise' },
  { tag: 'Motion', year: '2023', name: 'Type in Motion' },
  { tag: 'Photography', year: '2023', name: 'Raw Light' },
  { tag: 'Documentary', year: '2023', name: 'Margins' },
  { tag: 'Commercial', year: '2022', name: 'Thread & Grain' },
  { tag: 'Film', year: '2022', name: 'Before the Flood' },
  { tag: 'Music Video', year: '2022', name: 'Echo Chamber' },
  { tag: 'Photography', year: '2022', name: 'Midnight Cities' },
  { tag: 'Motion', year: '2022', name: 'Fluid Geometry' },
  { tag: 'Film', year: '2021', name: 'The Quiet South' },
  { tag: 'Music Video', year: '2021', name: 'Chromatic' },
  { tag: 'Photography', year: '2021', name: 'Landfall' },
  { tag: 'Documentary', year: '2021', name: 'Unnamed Roads' },
  { tag: 'Commercial', year: '2020', name: 'Open Season' },
  { tag: 'Film', year: '2020', name: 'Parallel Lines' },
];

const gradients = [
  'linear-gradient(135deg,#182820 0%,#0c1a14 100%)',
  'linear-gradient(160deg,#14221c 0%,#1e3228 100%)',
  'linear-gradient(110deg,#1a2e24 0%,#0f1e18 100%)',
  'linear-gradient(145deg,#203428 0%,#111c16 100%)',
  'linear-gradient(125deg,#162a20 0%,#243c30 100%)',
  'linear-gradient(150deg,#0c1a14 0%,#1c2e24 100%)',
  'linear-gradient(120deg,#1e3228 0%,#142018 100%)',
  'linear-gradient(155deg,#243c30 0%,#0c1a14 100%)',
];

function Img({ index, style }) {
  const p = projects[index % projects.length];
  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      background: gradients[index % gradients.length],
      ...style,
    }}>
      {/* swap with <img src="..." style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0}}/> */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(72,130,134,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(72,130,134,0.04) 1px,transparent 1px)`,
        backgroundSize: '28px 28px',
      }} />
      <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.1 }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(183,213,212,0.9)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="1" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
      <div style={{ position: 'absolute', bottom: 10, left: 12 }}>
        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '7px', letterSpacing: '0.18em', color: 'rgba(72,130,134,0.65)', textTransform: 'uppercase', marginBottom: 2 }}>
          {p.tag} · {p.year}
        </div>
        <div style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: '13px', letterSpacing: '0.05em', color: 'rgba(242,240,235,0.45)', lineHeight: 1 }}>
          {p.name}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  // Unit = 1/12 of viewport width. We use CSS calc for responsive sizing.
  // Layout is defined as absolute pixel ratios, rendered via flex rows.
  // Each "band" is a flex row. Heights are in px. Widths are % fractions.
  // No gaps anywhere.

  return (
    <section id="work" style={{ background: 'var(--charcoal,#212922)', padding: '140px 0 0', fontFamily: "'DM Sans',sans-serif" }}>

      {/* ── HEADER ── */}
      <div style={{ padding: '0 60px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '10px', letterSpacing: '0.3em', color: '#488286', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              Selected Work
              <span style={{ display: 'block', width: '40px', height: '1px', background: '#488286' }} />
            </div>
            <h2 style={{ fontFamily: "'Bebas Neue',sans-serif", fontSize: 'clamp(52px,7vw,100px)', lineHeight: 0.9, letterSpacing: '-0.01em', color: '#F2F0EB', margin: 0 }}>
              Our Work <em style={{ color: '#488286', fontStyle: 'normal' }}>Speaks</em>
            </h2>
          </div>
          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: '11px', color: 'rgba(119,135,139,0.5)', letterSpacing: '0.15em', textAlign: 'right' }}>
            120+ Projects<br /><span style={{ fontSize: '9px' }}>2019 — Present</span>
          </div>
        </div>
      </div>

      {/* ── COLLAGE ── */}
      <div style={{ width: '100%', lineHeight: 0, fontSize: 0 }}>

        {/* ROW 1: large | tall+small stack | wide */}
        <div style={{ display: 'flex', width: '100%', height: 340 }}>
          <Img index={0} style={{ flex: '0 0 36%', height: '100%' }} />
          <div style={{ flex: '0 0 18%', display: 'flex', flexDirection: 'column' }}>
            <Img index={1} style={{ flex: '0 0 58%', width: '100%' }} />
            <Img index={2} style={{ flex: 1, width: '100%' }} />
          </div>
          <Img index={3} style={{ flex: '0 0 28%', height: '100%' }} />
          <Img index={4} style={{ flex: 1, height: '100%' }} />
        </div>

        {/* ROW 2: small | tall | wide+small stack */}
        <div style={{ display: 'flex', width: '100%', height: 380 }}>
          <div style={{ flex: '0 0 22%', display: 'flex', flexDirection: 'column' }}>
            <Img index={5} style={{ flex: '0 0 45%', width: '100%' }} />
            <Img index={6} style={{ flex: 1, width: '100%' }} />
          </div>
          <Img index={7} style={{ flex: '0 0 30%', height: '100%' }} />
          <Img index={8} style={{ flex: '0 0 26%', height: '100%' }} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Img index={9} style={{ flex: '0 0 60%', width: '100%' }} />
            <Img index={10} style={{ flex: 1, width: '100%' }} />
          </div>
        </div>

        {/* ROW 3: wide | small stack | tall | small */}
        <div style={{ display: 'flex', width: '100%', height: 320 }}>
          <Img index={11} style={{ flex: '0 0 40%', height: '100%' }} />
          <div style={{ flex: '0 0 14%', display: 'flex', flexDirection: 'column' }}>
            <Img index={12} style={{ flex: '0 0 55%', width: '100%' }} />
            <Img index={13} style={{ flex: 1, width: '100%' }} />
          </div>
          <Img index={14} style={{ flex: '0 0 28%', height: '100%' }} />
          <Img index={15} style={{ flex: 1, height: '100%' }} />
        </div>

        {/* ROW 4: small | wide | stack | tall */}
        <div style={{ display: 'flex', width: '100%', height: 360 }}>
          <Img index={16} style={{ flex: '0 0 16%', height: '100%' }} />
          <Img index={17} style={{ flex: '0 0 35%', height: '100%' }} />
          <div style={{ flex: '0 0 20%', display: 'flex', flexDirection: 'column' }}>
            <Img index={18} style={{ flex: '0 0 50%', width: '100%' }} />
            <Img index={19} style={{ flex: 1, width: '100%' }} />
          </div>
          <Img index={20} style={{ flex: '0 0 16%', height: '100%' }} />
          <Img index={21} style={{ flex: 1, height: '100%' }} />
        </div>

        {/* ROW 5: tall | small+stack | wide */}
        <div style={{ display: 'flex', width: '100%', height: 300 }}>
          <Img index={22} style={{ flex: '0 0 26%', height: '100%' }} />
          <div style={{ flex: '0 0 18%', display: 'flex', flexDirection: 'column' }}>
            <Img index={23} style={{ flex: '0 0 52%', width: '100%' }} />
            <Img index={0} style={{ flex: 1, width: '100%' }} />
          </div>
          <Img index={1} style={{ flex: '0 0 32%', height: '100%' }} />
          <Img index={2} style={{ flex: 1, height: '100%' }} />
        </div>

      </div>

    </section>
  );
}
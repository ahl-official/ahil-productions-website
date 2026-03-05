import { useState } from 'react';

const services = [
  {
    id: 'podcast',
    label: 'Podcast Shoots',
    num: '01',
    headline: 'We Come\nTo You.',
  },
  {
    id: 'photo',
    label: 'Photography',
    num: '02',
    headline: 'A Still\nThat Speaks.',
  },
  {
    id: 'video',
    label: 'Videography',
    num: '03',
    headline: 'Raw Footage\nBecome Cinema.',
  },
];

export default function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" style={{
      background: 'var(--charcoal, #212922)',
      padding: '140px 60px',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Section label */}
      <div style={{
        fontFamily: "'Space Mono', monospace",
        fontSize: '10px',
        letterSpacing: '0.3em',
        color: '#488286',
        textTransform: 'uppercase',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        Capabilities
        <span style={{ display: 'block', width: '40px', height: '1px', background: '#488286' }} />
      </div>

      {/* Section title */}
      <h2 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(52px, 7vw, 100px)',
        lineHeight: 0.9,
        letterSpacing: '-0.01em',
        color: '#F2F0EB',
        margin: '0 0 60px 0',
      }}>
        What We<br />Produce
      </h2>

      {/* Tab row */}
      <div style={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'baseline',
        gap: '28px',
        marginBottom: '72px',
        paddingLeft: '18%',
        overflowX: 'auto',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
      }}>
        {services.map((s, i) => (
          <span
            key={s.id}
            onClick={() => setActive(i)}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(20px, 2.2vw, 30px)',
              letterSpacing: '0.05em',
              color: active === i ? '#F2F0EB' : 'rgba(242,240,235,0.22)',
              transition: 'color 0.3s cubic-bezier(0.16,1,0.3,1)',
              lineHeight: 1,
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              userSelect: 'none',
              display: 'inline-block',
            }}
          >
            {s.label}
          </span>
        ))}
      </div>

      {/* Content panel */}
      <div
        key={active}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start',
          animation: 'serviceReveal 0.45s cubic-bezier(0.16,1,0.3,1) forwards',
        }}
      >
        {/* Left — headline */}
        <h3 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(64px, 8vw, 130px)',
          lineHeight: 0.88,
          letterSpacing: '-0.01em',
          color: '#F2F0EB',
          margin: 0,
          whiteSpace: 'pre-line',
        }}>
          {current.headline}
        </h3>

        {/* Right — placeholder image */}
        <div style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          background: 'linear-gradient(135deg, rgba(72,130,134,0.12) 0%, rgba(33,41,34,0.6) 50%, rgba(183,213,212,0.08) 100%)',
          border: '1px solid rgba(72,130,134,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          {/* Subtle grid pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(72,130,134,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(72,130,134,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }} />

          {/* Corner marks */}
          {[
            { top: 12, left: 12, borderTop: '1px solid rgba(72,130,134,0.4)', borderLeft: '1px solid rgba(72,130,134,0.4)' },
            { top: 12, right: 12, borderTop: '1px solid rgba(72,130,134,0.4)', borderRight: '1px solid rgba(72,130,134,0.4)' },
            { bottom: 12, left: 12, borderBottom: '1px solid rgba(72,130,134,0.4)', borderLeft: '1px solid rgba(72,130,134,0.4)' },
            { bottom: 12, right: 12, borderBottom: '1px solid rgba(72,130,134,0.4)', borderRight: '1px solid rgba(72,130,134,0.4)' },
          ].map((style, i) => (
            <div key={i} style={{
              position: 'absolute',
              width: '16px',
              height: '16px',
              ...style,
            }} />
          ))}

          {/* Centre label */}
          <div style={{ position: 'relative', textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '9px',
              letterSpacing: '0.25em',
              color: 'rgba(72,130,134,0.5)',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}>
              {current.num} / Add Media
            </div>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid rgba(72,130,134,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(72,130,134,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes serviceReveal {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        #services div::-webkit-scrollbar { display: none; }
        @media (max-width: 900px) {
          #services { padding: 80px 24px !important; }
          #services > div[style*="paddingLeft"] { padding-left: 0 !important; }
          #services > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
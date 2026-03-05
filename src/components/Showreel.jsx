import { useEffect, useRef } from "react";

const REELS = [
  { id: 1, tag: "Commercial · 2025", caption: "Open Season — Brand Campaign" },
  { id: 2, tag: "Film · 2025", caption: "Shattered Horizons — Feature" },
  { id: 3, tag: "Music Video · 2025", caption: "Neon Frequency — Director's Cut" },
  { id: 4, tag: "Commercial · 2024", caption: "Brand Forward — Launch Spot" },
  { id: 5, tag: "Documentary · 2024", caption: "Undercurrent — Full Cut" },
  { id: 6, tag: "Motion · 2024", caption: "Kinetic Forms — Title Sequence" },
  { id: 7, tag: "Film · 2024", caption: "Still Waters — Short Film" },
  { id: 8, tag: "Music Video · 2023", caption: "Echo Chamber — Live Session" },
  { id: 9, tag: "Commercial · 2023", caption: "Drift — Automotive Spot" },
  { id: 10, tag: "Motion · 2023", caption: "Fracture — VFX Reel" },
];

export default function Showreel() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const totalHScroll = track.scrollWidth - track.clientWidth;

        // How far the section top has scrolled past the viewport top
        // rect.top is negative once we've scrolled past it
        const scrolled = -rect.top;

        if (scrolled >= 0 && scrolled <= totalHScroll) {
          // We're in the horizontal scroll zone — translate the track
          track.style.transform = `translateX(${-scrolled}px)`;
        }

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    /*
      The section height = viewport height (for pinning) + total horizontal scroll distance.
      This extra height is what "consumes" the scroll, converting it into horizontal movement.
      Once that extra height is consumed, normal vertical scroll resumes.
    */
    <section ref={sectionRef} className="reel-section">

      {/* Sticky inner — stays at top of viewport while section scrolls past */}
      <div className="reel-sticky">

        <div className="reel-header">
          <div className="reel-header-left">
            <p className="reel-eyebrow">See Reels</p>
            <h2 className="reel-title">Our <span>Showreels</span></h2>
          </div>
          <div className="reel-header-right">
            <span className="reel-count">10 Reels</span>
          </div>
        </div>

        {/* Overflow hidden wrapper clips cards as they translate */}
        <div className="reel-track-wrap">
          <div className="reel-track" ref={trackRef}>
            {REELS.map((reel, i) => (
              <div className="reel-card" key={reel.id}>
                <div className="reel-index">{String(i + 1).padStart(2, "0")}</div>
                <div className="reel-thumb">
                  <div className="reel-thumb-placeholder" />
                  <div className="reel-play-overlay">
                    <div className="reel-play-btn">
                      <svg width="18" height="18" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" fill="white" />
                      </svg>
                    </div>
                  </div>
                  <div className="reel-caption-bar">
                    <span>{reel.caption}</span>
                  </div>
                  <div className="reel-card-tag">{reel.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
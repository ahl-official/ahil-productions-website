import { useRef } from "react";

const REELS = [
  {
    id: 1,
    caption: "Blend Perfectly For A Flawless, Natural Look",
    tag: "Tutorial",
    // swap in: poster: "/images/reel1.jpg", src: "/videos/reel1.mp4"
  },
  {
    id: 2,
    caption: "The Transformation You've Been Waiting For",
    tag: "Before & After",
  },
  {
    id: 3,
    caption: "Real or Extensions? You Decide.",
    tag: "Reel",
  },
  {
    id: 4,
    caption: "Behind the Scenes at the Studio",
    tag: "BTS",
  },
  {
    id: 5,
    caption: "How We Get the Perfect Match Every Time",
    tag: "Tutorial",
  },
  {
    id: 6,
    caption: "Client Glow-Up of the Week",
    tag: "Results",
  },
];

export default function Showreel() {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const card = trackRef.current?.querySelector(".reel-card");
    const cardWidth = card ? card.offsetWidth + 12 : 300;
    trackRef.current?.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="reel-section">

      {/* Header */}
      <div className="reel-header">
        <div className="reel-header-left">
          <p className="reel-eyebrow">See Reels</p>
          <h2 className="reel-title">Our <span>Showreels</span></h2>
        </div>
        <div className="reel-header-right">
          <div className="reel-arrows">
            <button className="reel-arrow" onClick={() => scroll(-1)} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="reel-arrow" onClick={() => scroll(1)} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable cards */}
      <div className="reel-track-wrap">
        <div className="reel-track" ref={trackRef}>
          {REELS.map((reel) => (
            <div className="reel-card" key={reel.id}>
              <div className="reel-thumb">

                {/* Placeholder — swap with <img src={reel.poster} /> when ready */}
                <div className="reel-thumb-placeholder" />

                {/* Play button overlay */}
                <div className="reel-play-overlay">
                  <div className="reel-play-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" fill="white" />
                    </svg>
                  </div>
                </div>

                {/* Caption at bottom */}
                <div className="reel-caption-bar">
                  <span>{reel.caption}</span>
                </div>

                {/* Tag badge */}
                <div className="reel-card-tag">{reel.tag}</div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
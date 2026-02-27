export default function Showreel() {
  return (
    <div className="reel-section">
      <h2 className="reel-title reveal">Watch Our <span>Reel</span></h2>
      <div className="reel-wrapper reveal">
        <div className="reel-inner">
          <div className="play-btn">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" fill="var(--off-white)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

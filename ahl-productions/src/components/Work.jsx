import { useRef } from 'react';

const projects = [
  { tag: 'Film · 2025',        name: 'Shattered Horizons', video: '/videos/work-01.mp4' },
  { tag: 'Music Video · 2024', name: 'Neon Frequency',     video: '/videos/work-02.mp4' },
  { tag: 'Commercial · 2024',  name: 'Brand Forward',      video: '/videos/work-03.mp4' },
  { tag: 'Documentary · 2024', name: 'Undercurrent',       video: '/videos/work-04.mp4' },
  { tag: 'Motion · 2023',      name: 'Kinetic Forms',      video: '/videos/work-05.mp4' },
  { tag: 'Photography · 2023', name: 'Still Waters',       video: '/videos/work-06.mp4' },
];

function WorkCard({ project, index }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };
  const handleMouseLeave = () => {
    if (videoRef.current) videoRef.current.pause();
  };

  return (
    <div
      className={`work-card reveal reveal-delay-${(index % 4) + 1}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient background — replace with your image if needed */}
      <div className="work-bg" />

      {/* Hover video preview — place mp4 files in public/videos/ */}
      <video
        ref={videoRef}
        className="work-video"
        muted loop playsInline
        preload="none"
        src={project.video}
      />

      <div className="work-overlay">
        <div className="work-tag">{project.tag}</div>
        <div className="work-name">{project.name}</div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="work-section">
      <div className="section-label reveal">Selected Work</div>
      <h2 className="reveal reveal-delay-1">Our Work <span>Speaks</span></h2>
      <div className="work-grid">
        {projects.map((p, i) => <WorkCard key={i} project={p} index={i} />)}
      </div>
    </section>
  );
}

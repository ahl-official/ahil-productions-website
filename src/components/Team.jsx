import { useRef } from 'react';

const team = [
  { role: 'Director', name: 'Arjun Mehra', img: 'team-arjun.jpg', video: '/videos/team-01.mp4' },
  { role: 'DOP', name: 'Priya Nair', img: 'team-priya.jpg', video: '/videos/team-02.mp4' },
  { role: 'Creative Lead', name: 'Rohan Das', img: 'team-rohan.jpg', video: '/videos/team-03.mp4' },
  { role: 'Sound Design', name: 'Aisha Kapoor', img: 'team-aisha.jpg', video: '/videos/team-04.mp4' },
];

function TeamCard({ member, index }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  };
  const handleMouseLeave = () => {
    if (videoRef.current) videoRef.current.pause();
  };

  return (
    <div
      className={`team-card reveal reveal-delay-${index + 1}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >


      {/* Gradient tint on top of photo */}
      <div className="team-img" />

      {/* Hover video clip plays over photo */}
      <video
        ref={videoRef}
        className="team-video"
        muted loop playsInline
        preload="none"
        src={member.video}
      />

      <div className="team-info">
        <div className="team-role">{member.role}</div>
        <div className="team-name">{member.name}</div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="team-section">
      <div className="section-label reveal">The People</div>
      <h2 className="reveal reveal-delay-1">Meet The<br />Crew</h2>
      <div className="team-grid">
        {team.map((member, i) => (
          <TeamCard key={i} member={member} index={i} />
        ))}
      </div>
    </section>
  );
}

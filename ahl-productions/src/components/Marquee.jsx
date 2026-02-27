const items = [
  'Film Production', 'Music Videos', 'Brand Identity',
  'Commercial Advertising', 'Documentary', 'Motion Design', 'Post Production',
  'Film Production', 'Music Videos', 'Brand Identity',
  'Commercial Advertising', 'Documentary', 'Motion Design', 'Post Production',
];

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {items.map((item, i) => (
          <div className="marquee-item" key={i}>
            {item}
            <span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}

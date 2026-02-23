export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-text">AHL</div>
      <div className="section-label reveal">Get In Touch</div>
      <h2 className="reveal reveal-delay-1">
        Let's Make<br />
        <span>Something</span><br />
        Unforgettable
      </h2>
      <a className="contact-email reveal reveal-delay-2" href="mailto:hello@ahlproductions.in">
        hello@ahlproductions.in
      </a>
      <div className="contact-sub reveal reveal-delay-3">
        <a href="mailto:hello@ahlproductions.in" className="btn-filled">
          Start a Conversation
        </a>
        <div className="contact-social">
          <a href="#">Instagram</a>
          <a href="#">Vimeo</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

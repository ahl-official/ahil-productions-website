export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-text">AHL</div>
      <div className="section-label reveal">Get In Touch</div>
      <h2 className="reveal reveal-delay-1">
        Let's Build<br />
        <span>Your Content</span><br />
        Engine.
      </h2>
      <a className="contact-email reveal reveal-delay-2" href="mailto:hello@ahlproductions.in">
        hello@ahlproductions.in
      </a>
      <div className="contact-sub reveal reveal-delay-3">
        <div className="contact-ctas">
          <a href="mailto:hello@ahlproductions.in?subject=Strategy Call Request" className="btn-filled">
            Book a Strategy Call
          </a>
          <a href="mailto:hello@ahlproductions.in?subject=Package Enquiry" className="btn-outline">
            Ask About Packages
          </a>
        </div>
        <div className="contact-social">
          <a href="#">Instagram</a>
          <a href="#">Vimeo</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
      <div className="contact-guarantee reveal">
        <span>⚡</span> We respond to all enquiries within 24 hours. First strategy call is free.
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">Edwin Caudilla Daza</div>
          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#samples">Funnel Samples</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Edwin Caudilla Daza</h1>
          <p className="tagline">Funnel Builder &amp; Digital Marketing Specialist</p>
          <p className="hero-desc">
            I design and build high-converting sales funnels that turn visitors into customers.
          </p>
          <a className="btn" href="#samples">View My Work</a>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I&apos;m a dedicated funnel builder with hands-on experience creating landing pages,
            sales pages, and complete marketing funnels for businesses looking to grow their
            online presence. I focus on clean design, clear messaging, and conversion-driven
            layouts.
          </p>
        </div>
      </section>

      <section id="skills" className="section alt">
        <div className="container">
          <h2>Skills</h2>
          <ul className="skills-grid">
            <li>Sales Funnel Design</li>
            <li>Landing Page Creation</li>
            <li>ClickFunnels / GoHighLevel</li>
            <li>Email Marketing Automation</li>
            <li>Copywriting Support</li>
            <li>Conversion Rate Optimization</li>
          </ul>
        </div>
      </section>

      <section id="samples" className="section">
        <div className="container">
          <h2>Funnel Samples</h2>
          <p className="section-desc">A collection of funnel projects and samples. More coming soon.</p>
          <div className="samples-grid" id="samples-container">
            <div className="sample-card placeholder">
              <div className="sample-thumb">Sample Coming Soon</div>
              <div className="sample-info">
                <h3>Funnel Sample #1</h3>
                <p>Description of this funnel project will go here.</p>
              </div>
            </div>
            <div className="sample-card placeholder">
              <div className="sample-thumb">Sample Coming Soon</div>
              <div className="sample-info">
                <h3>Funnel Sample #2</h3>
                <p>Description of this funnel project will go here.</p>
              </div>
            </div>
            <div className="sample-card placeholder">
              <div className="sample-thumb">Sample Coming Soon</div>
              <div className="sample-info">
                <h3>Funnel Sample #3</h3>
                <p>Description of this funnel project will go here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section alt">
        <div className="container">
          <h2>Contact</h2>
          <p>Interested in working together? Reach out below.</p>
          <p className="contact-info">
            Email: <a href="mailto:placeholder@email.com">placeholder@email.com</a>
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2026 Edwin Caudilla Daza. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

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
          <img
            className="hero-photo"
            src="/images/edwin-photo.webp"
            alt="Edwin Caudilla Daza"
            width={160}
            height={160}
          />
          <h1>Edwin Caudilla Daza</h1>
          <p className="tagline">Funnel Builder — Funnelish &amp; Shopify Specialist</p>
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
            I&apos;m a Funnel Builder specializing in Funnelish and Shopify e-commerce. I can build
            and customize sales funnels, advertorials, landing pages, product pages, checkout
            pages, order bumps, upsells, downsells, and thank-you pages. I&apos;m also comfortable
            adapting existing funnel templates, recreating competitor funnels, and making sure
            pages are clean, responsive, and functional on both desktop and mobile.
          </p>
          <p>
            I&apos;m detail-oriented and focused on creating a smooth customer journey from the
            landing page through checkout. I can also assist with Shopify store setup, product
            pages, apps and integrations, funnel testing, troubleshooting, and revisions based on
            client requirements. I&apos;m comfortable following SOPs and learning new tools and
            workflows to help e-commerce businesses launch and improve their funnels.
          </p>
          <p>
            I&apos;m looking for opportunities to work with e-commerce brands, agencies, and
            business owners who need a reliable Funnel Builder for ongoing funnel development and
            Shopify-related tasks. My goal is to become a dependable part of the team and
            consistently deliver clean, accurate, and conversion-focused work.
          </p>
        </div>
      </section>

      <section id="skills" className="section alt">
        <div className="container">
          <h2>Skills</h2>
          <ul className="skills-grid">
            <li>Funnelish Funnel Building</li>
            <li>Shopify Store Setup</li>
            <li>Advertorials &amp; Landing Pages</li>
            <li>Checkout, Order Bumps &amp; Upsells/Downsells</li>
            <li>Competitor Funnel Recreation</li>
            <li>Funnel Testing &amp; Troubleshooting</li>
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
          <div className="contact-list">
            <p className="contact-info">
              Email: <a href="mailto:whindaza@gmail.com">whindaza@gmail.com</a>
            </p>
            <p className="contact-info">
              Mobile: <a href="tel:+639916049024">+63 991 604 9024</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Edwin Caudilla Daza. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

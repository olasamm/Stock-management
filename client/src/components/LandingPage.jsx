import './LandingPage.css'

function LandingPage() {
  return (
    <div className="landing">
      <header className="landing__header">
        <div className="landing__brand">YourBrand</div>
        <nav className="landing__nav">
          <a href="#features">Features</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="landing__hero">
        <h1>Build faster. Launch smarter.</h1>
        <p>Modern tooling and best practices to ship delightful apps.</p>
        <div className="landing__cta">
          <a className="btn btn--primary" href="#get-started">Get Started</a>
          <a className="btn" href="#learn-more">Learn more</a>
        </div>
      </section>

      <section id="features" className="landing__features">
        <div className="feature">
          <h3>Blazing fast</h3>
          <p>Optimized build and runtime for instant feedback.</p>
        </div>
        <div className="feature">
          <h3>Developer friendly</h3>
          <p>Type-safe APIs, zero-config defaults, and clear errors.</p>
        </div>
        <div className="feature">
          <h3>Production ready</h3>
          <p>Best practices baked in: accessibility, SEO, and security.</p>
        </div>
      </section>

      <section id="faq" className="landing__faq">
        <h2>Frequently asked questions</h2>
        <details>
          <summary>How do I get started?</summary>
          <p>Click the Get Started button above and follow the quickstart.</p>
        </details>
        <details>
          <summary>Is it free?</summary>
          <p>Yes, the starter is free for personal and commercial use.</p>
        </details>
      </section>

      <footer id="contact" className="landing__footer">
        <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage


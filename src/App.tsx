function Navigation() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="SpaceZ Aerospace home">
          <img src="/assets/spacez-official-wordmark.png" alt="SpaceZ Aerospace" width="629" height="240" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#community">Our community</a>
        </nav>
        <span className="header-location">York University<br /><span>Toronto, Canada</span></span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="club-intro">SpaceZ Aerospace · Student-led engineering</p>
          <h1 id="hero-title">Build. Test.<br />Learn. Fly.</h1>
          <p className="hero-description">Aerospace ideas.<br />Real hands-on experience.</p>
          <p className="body-copy">We’re York University students learning to design, build and test unmanned aircraft—starting with FPV drones.</p>
          <div className="future-actions" aria-label="Upcoming website features">
            <p><strong>Explore Projects</strong><span>Coming soon</span></p>
            <p><strong>Join SpaceZ</strong><span>Coming soon</span></p>
          </div>
        </div>
        <figure className="drone-photo">
          <img src="/assets/spacez-drone-1280.webp" srcSet="/assets/spacez-drone-640.webp 640w, /assets/spacez-drone-1280.webp 1280w" sizes="(max-width: 900px) 90vw, (min-width: 1440px) 650px, 48vw" alt="SpaceZ quadcopter on a workbench, with its battery, wiring and frame visible." width="1280" height="721" fetchPriority="high" />
          <figcaption><strong>From our workbench</strong><span>Ideas take shape through building and testing.</span></figcaption>
        </figure>
      </div>
      <div className="container hero-footnote"><span>A student aerospace club at York University</span><a href="#community">Meet the community</a></div>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="community" aria-labelledby="community-title" tabIndex={-1}>
      <div className="container">
        <div className="community-heading">
          <div><p className="section-label">Our community</p><h2 id="community-title">Different skills.<br />Shared curiosity.</h2></div>
          <p className="body-copy">SpaceZ brings students together to learn through real engineering projects. There’s room for new perspectives, practical skills and the willingness to try.</p>
        </div>
        <figure className="community-photo">
          <img src="/assets/spacez-community-1600.webp" srcSet="/assets/spacez-community-480.webp 480w, /assets/spacez-community-960.webp 960w, /assets/spacez-community-1600.webp 1600w" sizes="(min-width: 1440px) 1280px, 90vw" alt="SpaceZ members gathered in a classroom holding the club banner, with drones on the tables beside them." width="1600" height="1067" loading="lazy" />
          <figcaption><strong>The people behind SpaceZ</strong><span>Learning together. Building something of our own.</span></figcaption>
        </figure>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#home">Skip to main content</a>
      <Navigation />
      <main id="home" tabIndex={-1}><Hero /><Community /></main>
      <footer className="site-footer"><div className="container footer-inner"><strong>SpaceZ Aerospace</strong><p>Homepage preview. Project details and joining information are being prepared.</p></div></footer>
    </>
  );
}

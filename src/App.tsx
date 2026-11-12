import Reveal from './Reveal';
import ProjectsPage from './ProjectsPage';
import AboutPage from './AboutPage';
import GetInvolvedPage from './GetInvolvedPage';
import Navigation, { type Page } from './Navigation';

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="club-intro">SpaceZ Aerospace · Student-led engineering</p>
          <h1 id="hero-title">Build. Test.<br />Learn. Fly.</h1>
          <p className="hero-description">Aerospace ideas.<br />Real hands-on experience.</p>
          <p className="body-copy">We’re York University students learning to design, build and test unmanned aircraft—starting with FPV drones.</p>
          <div className="future-actions" aria-label="Explore and connect">
            <a className="projects-cta" href="/projects/">Explore Projects</a>
            <a className="join-cta" href="/get-involved/">Join SpaceZ</a>
          </div>
        </div>
        <figure className="drone-photo">
          <div className="hero-image-window">
            <img src="/assets/spacez-flight-720.webp" srcSet="/assets/spacez-flight-400.webp 400w, /assets/spacez-flight-720.webp 720w" sizes="(max-width: 900px) 90vw, 42vw" alt="A radio controller in the foreground, with a SpaceZ drone held against the evening sky." width="720" height="949" fetchPriority="high" />
          </div>
          <figcaption><strong>A different perspective</strong><span>Build. Test. Learn. Fly.</span></figcaption>
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
        <Reveal className="community-heading" variant="lines">
          <div><p className="section-label">Our community</p><h2 id="community-title"><span className="reveal-mask"><span className="reveal-line">Different skills.</span></span><span className="reveal-mask"><span className="reveal-line">Shared curiosity.</span></span></h2></div>
          <p className="body-copy">SpaceZ brings students together to learn through real engineering projects. There’s room for new perspectives, practical skills and the willingness to try.</p>
        </Reveal>
        <div className="community-gallery">
          <figure className="community-photo">
            <div className="community-image-window"><img src="/assets/spacez-assembly-720.webp" srcSet="/assets/spacez-assembly-400.webp 400w, /assets/spacez-assembly-720.webp 720w" sizes="(max-width: 600px) 90vw, 54vw" alt="Hands working on a SpaceZ drone frame, surrounded by tools and components." width="720" height="959" loading="lazy" /></div>
            <figcaption><strong>Learning through building</strong><span>At the SpaceZ workbench.</span></figcaption>
          </figure>
          <figure className="community-photo">
            <div className="community-image-window"><img src="/assets/spacez-electronics-720.webp" srcSet="/assets/spacez-electronics-400.webp 400w, /assets/spacez-electronics-720.webp 720w" sizes="(max-width: 600px) 90vw, 54vw" alt="Hands soldering drone electronics on a blue work mat, with wiring and a motor nearby." width="720" height="1098" loading="lazy" /></div>
            <figcaption><strong>Making connections</strong><span>Electronics, patience and practice.</span></figcaption>
          </figure>
        </div>
        <div className="community-return" aria-label="Continue exploring SpaceZ">
          <a href="/projects/">Explore our projects</a>
          <a href="/get-involved/">Get involved with SpaceZ</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const path = window.location.pathname;
  const route = path.replace(/\/index\.html$/, '').replace(/\/$/, '');
  const page: Page = route === '/projects' ? 'projects'
    : route === '/about' ? 'about'
    : route === '/get-involved' ? 'get-involved' : 'home';
  const pages = {
    home: <><Hero /><Community /></>,
    projects: <ProjectsPage />,
    about: <AboutPage />,
    'get-involved': <GetInvolvedPage />,
  };
  const mainId = page === 'home' ? 'home' : 'main-content';
  return (
    <>
      <a className="skip-link" href={`#${mainId}`}>Skip to main content</a>
      <Navigation page={page} />
      <main id={mainId} className={`site-page ${page === 'home' ? 'homepage' : `${page}-page`}`} tabIndex={-1}>{pages[page]}</main>
      <footer className="site-footer"><div className="container footer-inner"><strong>SpaceZ Aerospace</strong><p>Student-led engineering at York University. Build. Test. Learn. Fly.</p></div></footer>
    </>
  );
}

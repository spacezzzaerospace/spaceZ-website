import Reveal from './Reveal';
import { clubEmail, socialLinks } from './contact';

export default function GetInvolvedPage() {
  return (
    <>
      <section className="involve-hero page-hero" aria-labelledby="involve-title">
        <div className="container involve-hero-grid">
          <div>
            <p className="section-label">Get involved &amp; contact</p>
            <h1 id="involve-title">Bring your curiosity.<br /><span>Find your people.</span></h1>
            <p className="involve-lead">Interested in aerospace? Start a conversation with SpaceZ.</p>
            <p className="body-copy">We welcome current York University students from different disciplines and years of study. Prior technical experience is not required.</p>
            <a className="projects-cta" href="#contact">Connect with SpaceZ <span aria-hidden="true">↓</span></a>
          </div>
          <aside className="involve-invitation" aria-labelledby="invitation-title">
            <p className="section-label">Your starting point</p>
            <h2 id="invitation-title">A question is a good beginning.</h2>
            <p>Tell us what you’re interested in learning, building or contributing. The club can help you explore how to get involved.</p>
            <div className="involve-invitation-footer"><span>York University</span><span>Toronto, Canada</span></div>
          </aside>
        </div>
      </section>

      <section className="involve-contact" id="contact" tabIndex={-1} aria-labelledby="contact-title">
        <div className="container">
          <div className="involve-section-heading">
            <Reveal variant="focus"><p className="section-label">Let’s connect</p><h2 id="contact-title">Start here.</h2></Reveal>
            <p className="body-copy">For joining questions or general enquiries, email the club. You can also find SpaceZ on our official social channels.</p>
          </div>
          <div className="involve-email">
            <div>
              <h3>Official club email</h3>
              <a href={`mailto:${clubEmail}`}>{clubEmail}</a>
              <p>Opens your email app. You can also copy this address into your preferred email service.</p>
            </div>
            <div className="involve-membership-note">
              <h3>Interested in joining?</h3>
              <p>Contact us for current joining information. The official membership registration link will be added once it is available.</p>
            </div>
          </div>
          <ul className="involve-socials">
            {socialLinks.map(link => (
              <li key={link.name}>
                <a className="contact-channel" href={link.href} aria-label={`${link.name}: ${link.label}`}>
                  <h3>{link.name} <span aria-hidden="true">↗</span></h3>
                  <p className="involve-social-label">{link.label}</p>
                  <p>{link.description}</p>
                </a>
              </li>
            ))}
          </ul>
          <p className="involve-link-note">Social links take you to their respective platforms. If the Discord invite is unavailable, email us for help connecting.</p>
        </div>
      </section>

      <section className="involve-next" aria-labelledby="involve-next-title">
        <div className="container involve-section-heading">
          <Reveal variant="sweep" className="scroll-reveal--closing"><p className="section-label">Get to know SpaceZ</p><h2 id="involve-next-title">See where your curiosity could lead.</h2></Reveal>
          <div>
            <p className="body-copy">Explore our early prototype work and the ideas guiding our student engineering community.</p>
            <div className="involve-next-links"><a href="/projects/">Explore our projects</a><a href="/about/">About SpaceZ</a></div>
          </div>
        </div>
      </section>
    </>
  );
}

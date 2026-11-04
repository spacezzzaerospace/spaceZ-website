import { learningAreas, values } from './about';

function SectionHeading({ id, label, title }: { id: string; label: string; title: string }) {
  return <div><p className="section-label">{label}</p><h2 id={id}>{title}</h2></div>;
}

export default function AboutPage() {
  return (
    <>
      <section className="about-intro" aria-labelledby="about-title">
        <div className="container">
          <p className="section-label">About SpaceZ / York University</p>
          <h1 id="about-title">Curiosity brings us together.<br /><span>Engineering takes us further.</span></h1>
          <div className="about-intro-grid">
            <div className="about-purpose">
              <p className="about-lead">A student community turning technical knowledge into hands-on experience.</p>
              <p className="body-copy">SpaceZ Aerospace brings together students from across York University to design, build, program and test aerospace technologies. Our current focus is unmanned aerial vehicles, including FPV drones.</p>
              <div className="about-founding"><span>Established</span><strong><time dateTime="2026-09-02">2 September 2026</time></strong><span>York University · Toronto, Canada</span></div>
            </div>
            <figure className="about-photo">
              <img src="/assets/spacez-community-960.webp" srcSet="/assets/spacez-community-480.webp 480w, /assets/spacez-community-960.webp 960w, /assets/spacez-community-1600.webp 1600w" sizes="(max-width: 900px) 90vw, (min-width: 1440px) 720px, 54vw" width="1600" height="1067" fetchPriority="high" alt="SpaceZ members in a classroom with the club banner and drones on nearby tables." />
              <figcaption>Different backgrounds. A shared place to build and learn.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="about-section" aria-labelledby="origins-title">
        <div className="container about-story-grid">
          <SectionHeading id="origins-title" label="Our beginnings" title="It started with an idea—and a working prototype." />
          <ol className="about-timeline">
            <li><p className="section-label">Summer 2026</p><h3>From the classroom to the workbench</h3><p className="body-copy">Before the club was formally established, a small group of York students built and successfully flew a functional UAV. This early work laid the technical and collaborative foundation for SpaceZ.</p></li>
            <li><p className="section-label">September 2026</p><h3>A club with room to grow</h3><p className="body-copy">SpaceZ Aerospace was founded on September 2, connecting students from the Lassonde School of Engineering and the broader York community around hands-on aerospace projects.</p></li>
          </ol>
        </div>
      </section>

      <section className="about-learning about-section" aria-labelledby="learning-title">
        <div className="container">
          <div className="about-section-heading"><SectionHeading id="learning-title" label="Our purpose" title="Learn beyond the coursework." /><p className="body-copy">We aim to make practical engineering accessible across disciplines and experience levels. These are learning directions we want to develop, not separate programs already operating.</p></div>
          <div className="about-learning-grid">{learningAreas.map((area, index) => <div className="about-learning-item" key={area.title}><span className="about-number" aria-hidden="true">0{index + 1}</span><h3>{area.title}</h3><p className="body-copy">{area.description}</p></div>)}</div>
        </div>
      </section>

      <section className="about-section" aria-labelledby="values-title">
        <div className="container about-story-grid">
          <SectionHeading id="values-title" label="Our values" title="How we approach the work." />
          <dl className="about-values">{values.map(value => <div key={value.title}><dt>{value.title}</dt><dd>{value.description}</dd></div>)}</dl>
        </div>
      </section>

      <section className="about-vision about-section" aria-labelledby="vision-title">
        <div className="container about-story-grid">
          <SectionHeading id="vision-title" label="Looking ahead" title="Build something the next generation can take further." />
          <div><p className="body-copy">Our ambition is a lasting student aerospace community—one that shares knowledge, develops practical skills and creates opportunities for future members.</p><p className="body-copy">Beyond our current UAV focus, our longer-term interests include aircraft systems, robotics, avionics, embedded electronics and autonomous flight. These are directions to explore, not claims of completed capabilities.</p><a className="about-project-link" href="/projects/">Explore our projects <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
    </>
  );
}

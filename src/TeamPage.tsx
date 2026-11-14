import Reveal from './Reveal';
import { executives, developer, type TeamMember } from './team';
import './team.css';

function Portrait({ member }: { member: TeamMember }) {
  return <div className={`team-portrait${member.landscape ? ' team-portrait--landscape' : ''}`}>
    <img src={`/assets/team/${member.photo}`} alt={member.alt} width={member.landscape ? 640 : member.photo === 'IMG_8285.jpg' ? 545 : 427} height={member.landscape ? 356 : member.photo === 'IMG_8285.jpg' ? 543 : 640} loading="lazy" decoding="async" />
  </div>;
}

export default function TeamPage() {
  return <>
    <section className="team-hero" aria-labelledby="team-title">
      <div className="container">
        <p className="section-label">SpaceZ Aerospace / York University</p>
        <div className="team-hero-composition"><h1 id="team-title">Meet the <span>team.</span></h1>
        <div className="team-hero-bottom">
          <p>The people behind<br />Build. Test. Learn. Fly.</p>
          <nav aria-label="Team sections"><a href="#executives">Executive Team <span aria-hidden="true">↘</span></a><a href="#digital">Software &amp; Digital Development <span aria-hidden="true">↘</span></a></nav>
        </div></div>
      </div>
      <div className="team-orbit" aria-hidden="true" />
    </section>

    <section id="executives" className="team-executives" aria-labelledby="executives-title" tabIndex={-1}>
      <div className="container">
        <div className="team-section-heading"><Reveal variant="sweep"><p className="section-label">01 / Executive Team</p><h2 id="executives-title">Different disciplines.<br />One SpaceZ.</h2></Reveal><p className="team-section-count">Six executives.<br />A shared direction.</p></div>
        <div className="team-grid">
          {executives.map((member, index) => <article className="team-profile" key={member.name} aria-labelledby={`member-${index}`}>
            <div className="team-profile-visual"><span className="team-profile-index" aria-hidden="true">0{index + 1}</span><Portrait member={member} /></div>
            <div className="team-profile-info"><p className="team-role">{member.role}</p><h3 id={`member-${index}`}>{member.name}</h3><p className="team-education">{member.education}</p>{member.email && <a className="team-email" href={`mailto:${member.email}`}>{member.email}</a>}</div>
          </article>)}
        </div>
      </div>
    </section>

    <section id="digital" className="team-digital" aria-labelledby="digital-title" tabIndex={-1}>
      <div className="container">
        <Reveal variant="focus"><p className="section-label">02 / Software &amp; Digital Development</p><h2 id="digital-title">Building the<br /><span>digital experience.</span></h2></Reveal>
        <article className="team-developer" aria-labelledby="developer-name"><Portrait member={developer} /><div className="team-developer-info"><p className="team-role">{developer.role}</p><h3 id="developer-name">{developer.name}</h3><p className="team-education">{developer.education}</p><p className="team-description">{developer.description}</p>{developer.email && <a className="team-email" href={`mailto:${developer.email}`}>{developer.email}<span aria-hidden="true"> ↗</span></a>}<div className="team-developer-rule" aria-hidden="true"><span>SpaceZ Aerospace</span><span>York University</span></div></div></article>
        <a className="team-connect" href="/get-involved/">Connect with SpaceZ <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </>;
}

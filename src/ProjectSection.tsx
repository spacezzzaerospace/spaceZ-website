import type { Project } from './projects';

export default function ProjectSection({ project }: { project: Project }) {
  return (
    <article id={project.id} className="project-section" aria-labelledby={`${project.id}-title`} tabIndex={-1}>
      <div className="container">
        <div className="project-heading">
          <div><p className="section-label">{project.period}</p><h2 id={`${project.id}-title`}>{project.title}</h2></div>
          <span className="project-status">{project.status}</span>
        </div>
        <div className="project-layout">
          <div className="project-story">
            <h3>{project.summary}</h3>
            {project.paragraphs.map(paragraph => <p className="body-copy" key={paragraph}>{paragraph}</p>)}
            <h3 className="project-focus-title">{project.focusTitle}</h3>
            <ul className="project-focus">{project.focusAreas.map(area => <li key={area}>{area}</li>)}</ul>
          </div>
          <div className="project-evidence">
            {project.image && (
              <figure className="project-photo">
                <img src={project.image.src} srcSet={project.image.srcSet} sizes="(max-width: 900px) 90vw, (min-width: 1440px) 600px, 45vw" alt={project.image.alt} width="1280" height="721" loading="lazy" />
                <figcaption>{project.image.caption}</figcaption>
              </figure>
            )}
            <aside className={`project-note${project.image ? '' : ' project-note-featured'}`} aria-label={`${project.title}: context`}>
              <p className="note-heading">{project.noteTitle}</p>
              <p>{project.note}</p>
            </aside>
          </div>
        </div>
      </div>
    </article>
  );
}

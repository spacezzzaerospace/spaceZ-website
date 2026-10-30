import ProjectSection from './ProjectSection';
import { projects } from './projects';

export default function ProjectsPage() {
  return (
    <>
      <section className="projects-intro" aria-labelledby="projects-title">
        <div className="container">
          <p className="section-label">SpaceZ projects</p>
          <h1 id="projects-title">From the workbench.<br />Toward what’s next.</h1>
          <p className="body-copy">Our early prototype laid the foundation. Preparation toward AEAC 2027 gives us a new challenge to work toward.</p>
          <nav className="project-index" aria-label="Projects on this page">
            {projects.map(project => <a href={`#${project.id}`} key={project.id}>{project.title}</a>)}
          </nav>
        </div>
      </section>
      {projects.map(project => <ProjectSection project={project} key={project.id} />)}
      <div className="container projects-return"><a href="/">Back to Home</a><p>Build. Test. Learn. Fly.</p></div>
    </>
  );
}

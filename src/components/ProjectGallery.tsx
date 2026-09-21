import { useState } from 'react';
import { ArrowUpRight, Grid2X2, List, Building2 } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectGallery() {
  const [filter, setFilter] = useState('All');
  const [view, setView] = useState('grid');
  const technologies = [...new Set(projects.flatMap(project => project.technologies))];
  const visible = projects.filter(project => filter === 'All' || project.technologies.includes(filter));

  return (
    <section id="portfolio" className="section shell project-section">
      <div className="section-heading">
        <div><p className="eyebrow">SELECTED PROJECTS / THE COLLECTION</p><h2>More ideas.<br />Brought to life.</h2></div>
        <p className="small-note">Property, construction, and product experiences.<br />Explore the work and the thinking behind it.</p>
      </div>
      <div className="project-controls">
        <label className="project-filter">Filter by technology
          <select value={filter} onChange={event => setFilter(event.target.value)}>
            <option value="All">All projects</option>
            {technologies.map(tech => <option key={tech}>{tech}</option>)}
          </select>
        </label>
        <span className="project-count" role="status">{visible.length} projects</span>
        <div className="view-controls" aria-label="Project layout">
          <button className="icon-button" aria-label="Grid view" aria-pressed={view === 'grid'} onClick={() => setView('grid')}><Grid2X2 size={18} /></button>
          <button className="icon-button" aria-label="List view" aria-pressed={view === 'list'} onClick={() => setView('list')}><List size={18} /></button>
        </div>
      </div>
      <div className={`project-gallery ${view}`}>
        {visible.map((project, index) => (
          <article className="project-tile depth-card" key={project.id}>
            <a className="project-image" href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`}>
              {project.image.includes('placeholder.com')
                ? <div className="project-art"><Building2 size={72} strokeWidth={.8} /><span>ASHAVEN</span><small>DEVELOPERS LTD</small></div>
                : <img src={project.image} alt={`${project.title} website preview`} loading="lazy" width="720" height="480" />}
              <span className="project-index">0{index + 1}</span><span className="project-visit"><ArrowUpRight size={20} /></span>
            </a>
            <div className="project-body">
              <h3>{project.title}</h3><p>{project.description}</p>
              <div className="project-tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
              <details><summary>Challenge & solution</summary><div className="project-detail"><h4>Challenge</h4><p>{project.challenge}</p><h4>Solution</h4><p>{project.solution}</p></div></details>
              <a className="text-link" href={project.repoUrl} target="_blank" rel="noreferrer">Visit project <ArrowUpRight size={16} /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

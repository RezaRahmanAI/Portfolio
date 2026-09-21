import { useState } from 'react';
import { ArrowUpRight, Grid2X2, List, Building2, MonitorPlay, X } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectGallery() {
  const [filter, setFilter] = useState('All');
  const [view, setView] = useState('grid');
  const [previewId, setPreviewId] = useState<number | null>(null);
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
            <div className={`project-image ${previewId === project.id ? 'is-live' : ''}`}>
              {previewId === project.id ? <>
                <iframe src={project.repoUrl} title={`${project.title} live website preview`} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
                <div className="preview-toolbar"><span><span className="preview-dot" /> LIVE WEBSITE VIEW</span><button type="button" onClick={() => setPreviewId(null)} aria-label={`Close ${project.title} live preview`}><X size={15} /></button></div>
              </> : <>
                {project.image.includes('placeholder.com')
                  ? <div className="project-art"><Building2 size={72} strokeWidth={.8} /><span>ASHAVEN</span><small>DEVELOPERS LTD</small></div>
                  : <img src={project.image} alt={`${project.title} website design preview`} loading="lazy" width="720" height="480" />}
                <span className="project-index">0{index + 1}</span><a className="project-visit" href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} in a new tab`}><ArrowUpRight size={20} /></a>
              </>}
            </div>
            <div className="project-body">
              <h3>{project.title}</h3><p>{project.description}</p>
              <div className="project-tags">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
              <details><summary>Challenge & solution</summary><div className="project-detail"><h4>Challenge</h4><p>{project.challenge}</p><h4>Solution</h4><p>{project.solution}</p></div></details>
              <div className="project-actions"><button className="text-link preview-button" type="button" onClick={() => setPreviewId(previewId === project.id ? null : project.id)}><MonitorPlay size={16} />{previewId === project.id ? 'Hide live view' : 'Preview live site'}</button><a className="text-link" href={project.repoUrl} target="_blank" rel="noreferrer">Visit project <ArrowUpRight size={16} /></a></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

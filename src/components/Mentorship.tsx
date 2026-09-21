import { ArrowUpRight, BookOpen, Check, Download, Quote } from 'lucide-react';
import { withBasePath } from '../utils/assetPath';

const programs = [
  { title: '.NET Core Mastery', description: 'Complete full-stack development with .NET Core API and MVC', duration: '6 months', level: 'Beginner to Advanced', topics: ['C# Fundamentals', 'ASP.NET Core', 'Entity Framework', 'API Development', 'Authentication & Security'] },
  { title: 'Frontend Excellence', description: 'Modern frontend development with Angular and React', duration: '4 months', level: 'Intermediate', topics: ['Angular/React', 'TypeScript', 'State Management', 'Testing', 'Performance Optimization'] },
  { title: 'Full-Stack Journey', description: 'End-to-end web development with modern technologies', duration: '8 months', level: 'Beginner to Expert', topics: ['Frontend & Backend', 'Database Design', 'DevOps Basics', 'Project Management', 'Industry Best Practices'] },
];

// Preserved from the original portfolio's mentorship section.
const testimonials = [
  { name: 'Sarah Johnson', role: 'Junior Developer at TechCorp', content: "Rizve's mentorship transformed my career. His structured approach and real-world projects gave me the confidence to land my first developer job." },
  { name: 'Michael Chen', role: 'Full-Stack Developer', content: "The .NET Core program was exceptional. Rizve's industry experience and teaching style made complex concepts easy to understand." },
  { name: 'Emily Rodriguez', role: 'Software Engineer at StartupXYZ', content: 'Best investment in my career! The hands-on projects and personalized feedback helped me transition from marketing to development.' },
];

export default function Mentorship() {
  return (
    <section id="mentorship" className="section mentorship-section">
      <div className="shell">
        <div className="section-heading"><div><p className="eyebrow">MENTORSHIP / KNOWLEDGE SHARED</p><h2>Build your skills.<br />Then build your future.</h2></div><p className="small-note">Hands-on projects. Personalized feedback.<br />Experience shared with the next generation.</p></div>
        <p className="mentorship-intro">Sharing knowledge and helping aspiring developers build successful careers in technology through structured mentorship, real-world projects, and coding best practices.</p>
        <div className="mentor-stats">
          {[['30+', 'Developers mentored'], ['100%', 'Success rate'], ['6', 'Months average'], ['4.9/5', 'Rating']].map(([number, label]) => <div key={label}><strong>{number}</strong><span>{label}</span></div>)}
        </div>
        <h3 className="subsection-title">Mentorship programs</h3>
        <div className="program-grid">
          {programs.map((program, index) => (
            <article className="program-card depth-card" key={program.title}>
              <div className="program-icon"><BookOpen size={25} /><span>0{index + 1}</span></div>
              <h3>{program.title}</h3><p>{program.description}</p>
              <div className="program-meta"><span>{program.duration}</span><span>{program.level}</span></div>
              <ul>{program.topics.map(topic => <li key={topic}><Check size={15} />{topic}</li>)}</ul>
              <a className="text-link" href={`mailto:rizverahman.ai@gmail.com?subject=${encodeURIComponent(`Mentorship enquiry: ${program.title}`)}`}>Ask about this program <ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
        <div className="testimonials-heading"><p className="eyebrow">THE LEARNING EXPERIENCE</p><h3 className="subsection-title">What students say</h3></div>
        <div className="testimonial-grid">
          {testimonials.map(testimonial => (
            <figure className="testimonial depth-card" key={testimonial.name}>
              <Quote size={25} /><span className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</span>
              <blockquote>{testimonial.content}</blockquote>
              <figcaption><span className="student-avatar" aria-hidden="true">{testimonial.name.split(' ').map(part => part[0]).join('')}</span><div><strong>{testimonial.name}</strong><span>{testimonial.role}</span></div></figcaption>
            </figure>
          ))}
        </div>
        <div className="mentorship-cta depth-card"><div><h3>Ready to start your journey?</h3><p>Let’s talk about your goals and find the right learning path.</p></div><div className="actions"><a className="button primary" href="mailto:rizverahman.ai@gmail.com?subject=Mentorship%20application">Apply for mentorship <ArrowUpRight size={16} /></a><a className="text-link" href={withBasePath('mentorship-curriculum.md')} download>Download curriculum <Download size={16} /></a></div></div>
      </div>
    </section>
  );
}

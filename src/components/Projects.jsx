import { useState } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'NeoCommerce',
    desc: 'Full-stack e-commerce platform with real-time inventory management, payment processing, and an analytics dashboard.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    live: '#', github: '#', featured: true,
  },
  {
    title: 'PixelAI Studio',
    desc: 'AI-powered image generation and editing tool built on Stable Diffusion with a drag-and-drop canvas interface.',
    tags: ['Next.js', 'Python', 'AWS S3', 'WebSocket'],
    live: '#', github: '#', featured: true,
  },
  {
    title: 'CryptoFlow',
    desc: 'Real-time cryptocurrency dashboard with advanced charting, portfolio tracking, and customisable price alerts.',
    tags: ['React', 'WebSocket', 'Chart.js', 'Redis'],
    live: '#', github: '#', featured: true,
  },
  {
    title: 'TaskMind',
    desc: 'AI-enhanced project management tool with smart task prioritisation and team collaboration features.',
    tags: ['Vue.js', 'GraphQL', 'Docker', 'MongoDB'],
    live: '#', github: '#', featured: false,
  },
  {
    title: 'SoundWave',
    desc: 'Music streaming platform with social features, collaborative playlists, and audio visualisation.',
    tags: ['React', 'Web Audio API', 'Firebase', 'TypeScript'],
    live: '#', github: '#', featured: false,
  },
  {
    title: 'MetroMap',
    desc: 'Interactive city transit app with real-time tracking, route optimisation, and accessibility features.',
    tags: ['Next.js', 'Mapbox', 'Node.js', 'GraphQL'],
    live: '#', github: '#', featured: false,
  },
];

const filters = ['All', 'React', 'Next.js', 'Node.js'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const visible = filter === 'All'
    ? projects
    : projects.filter(p => p.tags.some(t => t.startsWith(filter)));

  return (
    <section id="projects" className="section projects">
      <div className="divider" />
      <div className="container">
        <span className="section-label">Work</span>
        <h2 className="section-title">Selected Projects</h2>

        <div className="projects__filters">
          {filters.map(f => (
            <button
              key={f}
              className={`projects__filter ${filter === f ? 'projects__filter--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {visible.map(p => (
            <div key={p.title} className="projects__card card">
              <div className="projects__card-top">
                <h3 className="projects__title">{p.title}</h3>
                {p.featured && <span className="projects__badge">Featured</span>}
              </div>
              <p className="projects__desc">{p.desc}</p>
              <div className="projects__tags">
                {p.tags.map(t => (
                  <span key={t} className="projects__tag">{t}</span>
                ))}
              </div>
              <div className="projects__links">
                <a href={p.live} className="projects__link">Live Demo</a>
                <a href={p.github} className="projects__link projects__link--muted">GitHub</a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__cta">
          <a href="#" className="btn btn-ghost">View All Projects</a>
        </div>
      </div>
    </section>
  );
}

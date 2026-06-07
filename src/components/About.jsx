import './About.css';

const stats = [
  { value: '5+',  label: 'Years Experience' },
  { value: '80+', label: 'Projects Delivered' },
  { value: '40+', label: 'Clients Served' },
  { value: '15+', label: 'Technologies' },
];

const tags = ['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Figma', 'GraphQL', 'Docker'];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="divider" />
      <div className="container">
        <span className="section-label">About</span>
        <h2 className="section-title">A bit about me</h2>

        <div className="about__grid">
          <div className="about__avatar">
            <div className="about__initials">CE</div>
          </div>

          <div className="about__body">
            <p className="about__para">
              I'm a full-stack developer with over 5 years of experience building
              modern web applications. I specialize in React, Node.js, and cloud
              infrastructure, with a strong eye for design and user experience.
            </p>
            <p className="about__para">
              I care about the craft — clean code, thoughtful architecture, and
              interfaces people actually enjoy using. I've worked with startups
              and established teams across fintech, SaaS, and creative industries.
            </p>

            <div className="about__tags">
              {tags.map(t => (
                <span key={t} className="about__tag">{t}</span>
              ))}
            </div>

            <a href="#" className="btn btn-ghost" style={{ width: 'fit-content', marginTop: 8 }}>
              Download CV
            </a>
          </div>
        </div>

        <div className="about__stats">
          {stats.map(s => (
            <div key={s.label} className="about__stat card">
              <span className="about__stat-value gradient-text">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

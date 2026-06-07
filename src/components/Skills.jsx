import { useEffect, useRef, useState } from 'react';
import './Skills.css';

const categories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'CSS / Tailwind', level: 92 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / Django', level: 82 },
      { name: 'GraphQL', level: 78 },
      { name: 'REST APIs', level: 94 },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'AWS / Vercel', level: 80 },
      { name: 'Docker / Kubernetes', level: 72 },
      { name: 'Git / CI/CD', level: 91 },
      { name: 'PostgreSQL', level: 85 },
    ],
  },
];

const tools = [
  'React', 'TypeScript', 'Node.js', 'Python',
  'AWS', 'Docker', 'Figma', 'GraphQL',
  'PostgreSQL', 'Redis', 'Next.js', 'Tailwind',
];

function SkillBar({ name, level }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__pct">{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{ width: animated ? `${level}%` : '0' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="divider" />
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 className="section-title">What I work with</h2>

        <div className="skills__grid">
          {categories.map(cat => (
            <div key={cat.title} className="skills__card card">
              <h3 className="skills__card-title">{cat.title}</h3>
              <div className="skills__bars">
                {cat.skills.map(sk => (
                  <SkillBar key={sk.name} name={sk.name} level={sk.level} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills__tools">
          {tools.map(t => (
            <span key={t} className="skills__tool">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

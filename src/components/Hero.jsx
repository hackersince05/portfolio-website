import { useState, useEffect } from 'react';
import './Hero.css';

const roles = ['Full Stack Developer', 'UI/UX Designer', 'React Specialist'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section id="home" className="hero">
      <div className="container hero__content">
        <p className="hero__eyebrow">Available for new opportunities</p>
        <h1 className="hero__name">
          Chris-Esezobor<br />
          <span className="gradient-text">Ejodamen</span>
        </h1>
        <div className="hero__role">
          <span className="hero__role-text">{displayed}</span>
          <span className="hero__cursor">|</span>
        </div>
        <p className="hero__desc">
          I build fast, accessible, and beautifully crafted web experiences.
          Focused on clean architecture and thoughtful design.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn-cta"
            onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Work
          </a>
          <a href="#contact" className="btn btn-cta"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get In Touch
          </a>
        </div>
        <div className="hero__links">
          <a href="#" className="hero__link">GitHub</a>
          <span className="hero__link-sep" />
          <a href="#" className="hero__link">LinkedIn</a>
          <span className="hero__link-sep" />
          <a href="#" className="hero__link">Twitter</a>
        </div>
      </div>
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}

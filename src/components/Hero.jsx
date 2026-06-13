import { useState, useEffect} from 'react';
import './Hero.css';

export default function Hero() {
  const roles = ['Full Stack Engineer', 'Mobile App Developer', 'Web Designer'];

  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];

    if(typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70);
        return () => clearTimeout(t);
      }  else {
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
          Chris-Esezobor<br/>
          <span className="gradient-text">Ejodamen</span>
        </h1>
        <div className="hero__role"> 
          <span className="hero__role-text">{displayed}</span>
          <span className="hero__cursor">|</span>
        </div>
      </div>
    </section>
  );
}

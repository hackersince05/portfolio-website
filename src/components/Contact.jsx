import { useState } from 'react';
import './Contact.css';

const contactLinks = [
  { label: 'Email',    value: 'chris@example.com',       href: 'mailto:chris@example.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/chris',   href: '#' },
  { label: 'GitHub',   value: 'github.com/chris',        href: '#' },
  { label: 'Twitter',  value: '@chrisejodamen',          href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1200);
  };

  return (
    <section id="contact" className="section contact">
      <div className="divider" />
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__intro">
              I'm open to new roles, freelance projects, and interesting collaborations.
              Drop me a message and I'll get back to you promptly.
            </p>
            <ul className="contact__links">
              {contactLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="contact__link">
                    <span className="contact__link-label">{l.label}</span>
                    <span className="contact__link-value">{l.value}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="contact__available">
              <span className="contact__dot" />
              Available from July 2025
            </div>
          </div>

          <div className="contact__form-wrap card">
            {sent ? (
              <div className="contact__success">
                <p className="contact__success-title">Message sent</p>
                <p className="contact__success-body">Thanks for reaching out. I'll reply within 24 hours.</p>
                <button className="btn btn-ghost" onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__row">
                  <div className="contact__field">
                    <label>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="contact__field">
                    <label>Email</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="contact__field">
                  <label>Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" required />
                </div>
                <div className="contact__field">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project or opportunity..." rows={5} required />
                </div>
                <button type="submit" className="btn btn-primary contact__submit" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer__inner">
          <span className="footer__name">Chris-Esezobor Ejodamen</span>
          <p className="footer__copy">© {new Date().getFullYear()}. All rights reserved.</p>
          <nav className="footer__nav">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="footer__link"
                onClick={e => { e.preventDefault(); document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }); }}>
                {l}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </section>
  );
}

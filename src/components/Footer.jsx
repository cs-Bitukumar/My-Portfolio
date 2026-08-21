import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="back-to-top"><ArrowUp size={16} /></a>
      <div className="footer-links">
        <a href={personal.github} target="_blank" rel="noreferrer"><Github size={18} /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
        <a href={`mailto:${personal.email}`}><Mail size={18} /></a>
      </div>
      <p>© 2026 {personal.name}. Crafted with React, Framer Motion, and care.</p>
    </footer>
  );
}

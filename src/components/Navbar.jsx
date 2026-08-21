import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { personal } from '../data/siteData';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id === 'home' ? 'Home' : entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => section && observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar glass-card">
      <a href="#home" className="brand">
        <span>BK</span>
        <div>
          <strong>{personal.name}</strong>
          <small>{personal.role}</small>
        </div>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {links.map((link) => (
          <a key={link.label} href={link.href} className={active === link.label ? 'active' : ''}>
            {link.label}
          </a>
        ))}
      </nav>

      <a className="btn btn-primary resume-btn" href={personal.resumeUrl}>
        <Download size={16} /> Resume
      </a>

      <button className="menu-btn" onClick={() => setOpen((p) => !p)} aria-label="Toggle menu">
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="mobile-menu glass-card">
            {links.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a className="btn btn-primary" href={personal.resumeUrl}>Download Resume</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

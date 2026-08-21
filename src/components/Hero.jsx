import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { personal } from '../data/siteData';
import profileImage from '../assets/Portfolio-profile.svg';
import profileImage1 from '../assets/bitu.jpeg';

const particles = Array.from({ length: 18 });

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <motion.div className="hero-grid">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="hero-content">
          <p className="eyebrow">Senior Frontend Engineer • Full Stack Developer</p>
          <h1>
            Hi, I&apos;m <span>{personal.name}</span>
          </h1>
          <div className="typing-line">
            <span className="typed-text">{personal.role}</span>
            <span className="cursor">|</span>
          </div>
          <p className="hero-description">{personal.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={personal.resumeUrl}>
              <Download size={16} /> Download Resume
            </a>
            <a className="btn btn-secondary" href="#projects">
              View Projects <ArrowRight size={16} />
            </a>
          </div>
          <div className="social-row">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="hero-visual">
          <div className="avatar-ring">
            <img src={profileImage1} alt="Portrait of Bitu Kumar" />
          </div>
          {particles.map((_, index) => (
            <motion.span
              key={index}
              className="particle"
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ left: `${8 + index * 5}%`, top: `${10 + index * 7}%` }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

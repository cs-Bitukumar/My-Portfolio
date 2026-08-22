import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { projects } from '../data/siteData';

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-title">
        <p className="eyebrow">Projects</p>
        <h2>Selected launches and product thinking.</h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} whileHover={{ y: -8, scale: 1.01 }} className="glass-card project-card">
            <div className="project-preview" />
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-row">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                <a className="btn btn-primary" href={project.links.demo} target="_blank" rel="noreferrer">
                  Live Demo <ArrowUpRight size={16} />
                </a>
                <a className="btn btn-secondary" href={project.links.github} target="_blank" rel="noreferrer">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

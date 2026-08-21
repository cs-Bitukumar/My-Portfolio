import { motion } from 'framer-motion';
import { personal } from '../data/siteData';

export default function GitHubSection() {
  return (
    <section>
      <div className="section-title">
        <p className="eyebrow">GitHub</p>
        <h2>Active coding and consistent iteration.</h2>
      </div>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-card github-card">
        <div className="github-chart" />
        <div className="github-stats">
          <div className="stat-item glass-card">
            <strong>40+</strong>
            <span>Contributions</span>
          </div>
          <div className="stat-item glass-card">
            <strong>20+</strong>
            <span>Repositories</span>
          </div>
          <div className="stat-item glass-card">
            <strong>JavaScript</strong>
            <span>Top Language</span>
          </div>
        </div>
        <a className="btn btn-secondary" href={personal.github} target="_blank" rel="noreferrer">
          Visit GitHub
        </a>
      </motion.div>
    </section>
  );
}

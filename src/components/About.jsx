import { motion } from 'framer-motion';
import { personal, stats } from '../data/siteData';

export default function About() {
  return (
    <section id="about">
      <div className="section-title">
        <p className="eyebrow">About</p>
        <h2>Crafting polished experiences with technical depth.</h2>
      </div>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-card about-card">
        <div className="about-content">
          <p>{personal.about}</p>
          <p>My work is driven by the belief that exceptional products come from a thoughtful mix of clarity, performance, and personality.</p>
        </div>
        <div className="stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-item glass-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

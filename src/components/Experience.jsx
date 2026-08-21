import { motion } from 'framer-motion';
import { experience } from '../data/siteData';

export default function Experience() {
  return (
    <section>
      <div className="section-title">
        <p className="eyebrow">Experience</p>
        <h2>Building momentum through practical product work.</h2>
      </div>
      <div className="timeline">
        {experience.map((item, index) => (
          <motion.article key={item.title} initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-card timeline-card">
            <div className="timeline-dot" />
            <div>
              <h3>{item.title}</h3>
              <p className="timeline-company">{item.company} • {item.period}</p>
              <p>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

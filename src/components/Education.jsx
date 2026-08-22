import { motion } from 'framer-motion';
import { education } from '../data/siteData';

export default function Education() {
  return (
    <section>
      <div className="section-title">
        <p className="eyebrow">Education</p>
        <h2>Strong foundations for modern product engineering.</h2>
      </div>
      <div className="timeline">
        {education.map((item, index) => (
          <motion.article key={item.degree} initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-card timeline-card">
            <div className="timeline-dot" />
            <div>
              <h3>{item.degree}</h3>
              {item.school ? (
                <a className="timeline-company" href={item.link} target="_blank" rel="noreferrer">
                  {item.school}
                </a>
              ) : null}
              <p>{item.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

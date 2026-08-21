import { motion } from 'framer-motion';
import { Code2, Database, Paintbrush, Wrench } from 'lucide-react';
import { skills } from '../data/siteData';

const skillGroups = [
  { title: 'Frontend', items: skills.frontend, icon: <Code2 size={18} /> },
  { title: 'Backend', items: skills.backend, icon: <Wrench size={18} /> },
  { title: 'Database', items: skills.database, icon: <Database size={18} /> },
  { title: 'Tools', items: skills.tools, icon: <Paintbrush size={18} /> },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-title">
        <p className="eyebrow">Skills</p>
        <h2>Modern tools and thoughtful implementation.</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article key={group.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} className="glass-card skill-card">
            <div className="skill-icon">{group.icon}</div>
            <h3>{group.title}</h3>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Send } from 'lucide-react';
import { personal } from '../data/siteData';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs.send('service_id', 'template_id', templateParams, 'public_key').then(() => {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    }).catch(() => {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
    });
  };

  return (
    <section id="contact">
      <div className="section-title">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s create something exceptional.</h2>
      </div>
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="glass-card contact-card">
        <div className="contact-info">
          <h3>Get in touch</h3>
          <p>Open to full-time opportunities, freelance collaborations, and ambitious product builds.</p>
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
          <a href={`tel:${personal.phone}`}>{personal.phone}</a>
        </div>
        <form onSubmit={onSubmit} className="contact-form">
          <input name="name" value={form.name} onChange={onChange} placeholder="Name" required />
          <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" required />
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" rows="5" required />
          <button className="btn btn-primary" type="submit">
            <Send size={16} /> Send Message
          </button>
          {submitted ? <p className="form-success">Thanks! Your message is on its way.</p> : null}
        </form>
      </motion.div>
    </section>
  );
}

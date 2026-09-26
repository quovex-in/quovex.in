import Layout from '../components/Layout';
import { useState } from 'react';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', service: '', timeline: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const data = await res.json();
      setStatus(data.success ? 'Thanks. We will be in touch shortly.' : 'Something went wrong. Please try again.');
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <Layout>
      <section className={styles.contactPage}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}><span /> Start a project</p>
          <h1>Let&apos;s improve<br /><em>how work works.</em></h1>
          <p className={styles.introText}>Tell us where your business is heading, what is getting in the way, and what a better process would look like.</p>
          <div className={styles.direct}><span>Prefer email?</span><a href="mailto:hello@quovex.in">hello@quovex.in ↗</a></div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formHeader}><span>01</span><p>Project details</p></div>
          <div className={styles.fieldRow}>
            <label>Your name<input type="text" name="name" placeholder="Jane Smith" value={formData.name} onChange={handleChange} required /></label>
            <label>Work email<input type="email" name="email" placeholder="jane@company.com" value={formData.email} onChange={handleChange} required /></label>
          </div>
          <label>Company or organisation<input type="text" name="company" placeholder="Company name" value={formData.company} onChange={handleChange} /></label>
          <div className={styles.fieldRow}>
            <label>What can we help with?<select name="service" value={formData.service} onChange={handleChange} required><option value="">Select a focus</option><option>Process automation</option><option>AI copilot or workflow</option><option>Custom software tool</option><option>Cloud and integration</option><option>Not sure yet</option></select></label>
            <label>Ideal timeline<select name="timeline" value={formData.timeline} onChange={handleChange}><option value="">Select a timeline</option><option>Exploring options</option><option>Next 1–3 months</option><option>This quarter</option><option>Urgent / active project</option></select></label>
          </div>
          <label>What would you like to improve?<textarea name="message" placeholder="Give us a little context about the workflow, challenge, or opportunity." rows="5" value={formData.message} onChange={handleChange} required /></label>
          <div className={styles.formFooter}><button type="submit">Send enquiry <span>↗</span></button><p role="status">{status}</p></div>
        </form>
      </section>
    </Layout>
  );
}

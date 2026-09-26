import Layout from '../components/Layout';
import styles from '../styles/Services.module.css';

export default function Services() {
  return (
    <Layout>
      <section className={styles.page}>
        <div className={styles.hero}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}><span /> Capabilities and expertise</p>
            <h1>Make complexity<br /><em>work for you.</em></h1>
            <p>QuoVex helps ambitious businesses modernize operations, connect information, and build digital systems that are easier to run and ready to grow.</p>
            <a className={styles.heroLink} href="/contact">Discuss your priorities <span>↗</span></a>
          </div>
          <div className={styles.heroPanel}><div className={styles.panelGrid} /><span className={styles.panelLabel}>QV / 002</span><strong>01</strong><p>From operational friction<br />to useful systems.</p></div>
        </div>
        <div className={styles.metrics}><div><strong>01</strong><span>Business-first<br />discovery</span></div><div><strong>02</strong><span>Technology-agnostic<br />delivery</span></div><div><strong>03</strong><span>Built for measurable<br />improvement</span></div></div>
        <div className={styles.sectionLead}><p className={styles.eyebrow}><span /> Areas of expertise</p><p>We bring strategy, process thinking, and hands-on delivery together across the parts of your business that need to work better.</p></div>
        <div className={styles.capabilityGrid}>
          <article><span>01</span><div><h2>Business digitalization</h2><p>Move manual, disconnected processes into clear digital workflows your team can actually use.</p><small>Workflows · Operating models · Change</small></div></article>
          <article><span>02</span><div><h2>Process optimization</h2><p>Reduce repetitive work, errors, and handoffs with improvement designed around real operations.</p><small>Discovery · Automation · Measurement</small></div></article>
          <article><span>03</span><div><h2>Data and databases</h2><p>Structure, connect, and surface the information your business needs for confident decisions.</p><small>Data models · Reporting · Governance</small></div></article>
          <article><span>04</span><div><h2>Custom software</h2><p>Build focused internal tools, portals, dashboards, and integrations for the gaps products cannot fill.</p><small>Web apps · Portals · Product delivery</small></div></article>
          <article><span>05</span><div><h2>AI and intelligent tools</h2><p>Apply AI where it creates practical value, from document handling and search to decision support.</p><small>Assistants · Search · Knowledge systems</small></div></article>
          <article><span>06</span><div><h2>Cloud and integration</h2><p>Design reliable foundations across Azure, Google Cloud, AWS, APIs, and existing systems.</p><small>Cloud architecture · APIs · Integrations</small></div></article>
        </div>
        <div className={styles.technologyNote}><p className={styles.eyebrow}><span /> Technology agnostic</p><div><h2>The right architecture<br /><em>for the real problem.</em></h2><p>We do not force every problem into one platform. The right solution may use Microsoft, Google, AWS, open-source tools, a specialist SaaS product, a database, or a thoughtful combination of them.</p><a href="/contact">Tell us what needs to work better <span>↗</span></a></div></div>
      </section>
    </Layout>
  );
}

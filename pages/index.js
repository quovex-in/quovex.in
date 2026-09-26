import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span /> Independent technology consultancy</p>
          <h1>Make work <em>move</em> forward.</h1>
          <p className={styles.heroIntro}>
            QuoVex is a freelance technology consultancy helping growing businesses simplify processes, automate operations, and build useful digital solutions.
          </p>
          <div className={styles.heroActions}>
            <a href="/contact" className={styles.primaryButton}>Start a conversation <span>↗</span></a>
            <a href="/services" className={styles.textLink}>Explore capabilities <span>↘</span></a>
          </div>
        </div>
        <div className={styles.heroVisual} aria-label="QuoVex systems visual" role="img">
          <div className={styles.visualGrid} />
          <div className={`${styles.orbit} ${styles.orbitOne}`} />
          <div className={`${styles.orbit} ${styles.orbitTwo}`} />
          <div className={styles.visualCore}><strong>Q</strong><span>QV / 001</span></div>
          <p className={styles.visualCaption}>Systems in motion<br />40° 42' 46.3&quot; N</p>
        </div>
      </section>

      <div className={styles.ticker}><div>BUSINESS DIGITALIZATION <span>✦</span> PROCESS OPTIMIZATION <span>✦</span> DIGITAL SOLUTIONS <span>✦</span> BUSINESS DIGITALIZATION <span>✦</span> PROCESS OPTIMIZATION <span>✦</span></div></div>

      <section className={styles.services}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}><span /> What we do</p>
          <h2>Technology that solves the <em>real work.</em></h2>
        </div>
        <div className={styles.serviceGrid}>
          <article className={styles.serviceCard}><span className={styles.cardNumber}>01</span><h3>Business digitalization</h3><p>Turn manual, disconnected work into clear digital processes your team can rely on.</p><a href="/insights/digitalization-roadmap">Learn more ↗</a></article>
          <article className={styles.serviceCard}><span className={styles.cardNumber}>02</span><h3>Process optimization</h3><p>Find the friction in daily operations and improve the flow before choosing the tools.</p><a href="/insights/process-optimization">Learn more ↗</a></article>
          <article className={styles.serviceCard}><span className={styles.cardNumber}>03</span><h3>Data and integrations</h3><p>Connect the systems and information your business needs for confident decisions.</p><a href="/insights/data-integration">Learn more ↗</a></article>
        </div>
      </section>

      <section className={styles.statement}>
        <p className={styles.eyebrow}><span /> The QuoVex approach</p>
        <div><h2>Practical technology.<br /><em>Better business flow.</em></h2><p>As a focused independent partner, we find the friction in your processes and turn the right opportunities into dependable digital tools that fit how your team actually works.</p></div>
      </section>

      <section className={styles.contactBand}>
        <p className={styles.eyebrow}><span /> Have a workflow to improve?</p>
        <h2>Let&apos;s build your<br /><em>next solution.</em></h2>
        <a href="/contact" className={styles.lightButton}>Talk to QuoVex <span>↗</span></a>
      </section>
    </Layout>
  );
}

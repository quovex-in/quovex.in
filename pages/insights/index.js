import Link from 'next/link';
import Layout from '../../components/Layout';
import styles from '../../styles/Insights.module.css';

const insights = [
  { slug: 'digitalization-roadmap', number: '01', category: 'Business digitalization', title: 'Where should a growing business start with digitalization?', summary: 'A practical way to find the highest-value opportunities before investing in new tools.' },
  { slug: 'process-optimization', number: '02', category: 'Process optimization', title: 'Why better processes come before better software', summary: 'How mapping the work first helps teams reduce friction and avoid automating the wrong thing.' },
  { slug: 'data-integration', number: '03', category: 'Data and integrations', title: 'Make business data work across the systems you already use', summary: 'A clear framework for connecting tools, databases, and the people who depend on them.' },
];

export default function Insights() {
  return (
    <Layout>
      <main className={styles.page}>
        <div className={styles.intro}><p className={styles.eyebrow}><span /> Insights</p><h1>Ideas for <em>better work.</em></h1><p>Practical notes on business digitalization, process improvement, data, and choosing technology that creates useful change.</p></div>
        <section className={styles.list}>{insights.map((insight) => <article className={styles.articleCard} key={insight.slug}><span className={styles.number}>{insight.number}</span><div><p className={styles.category}>{insight.category}</p><h2>{insight.title}</h2><p className={styles.summary}>{insight.summary}</p><Link href={`/insights/${insight.slug}`}>Read insight <span>↗</span></Link></div></article>)}</section>
      </main>
    </Layout>
  );
}
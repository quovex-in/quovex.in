import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>About Quovex.in</h1>
        <p>
          QuoVex is a newly formed, independent technology consultancy and freelance agency
          helping SMEs improve the way work gets done. We combine process thinking with
          practical digital delivery across automation, AI, custom tools, and cloud platforms.
        </p>
        <p>
          Our mission is simple: make business processes clearer, faster, and easier to run.
          We work closely with each client to identify friction, choose the right technology,
          and deliver solutions that create measurable operational value.
        </p>
      </section>
    </Layout>
  );
}

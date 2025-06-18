import React from 'react';
import Layout from '@theme/Layout';
import styles from './landing.module.css';

export default function Landing() {
  return (
    <Layout
      title="Naas - Universal Data & AI Platform"
      description="Shape Your Own Intelligence. Ontology-first, agentic, open-source AI infrastructure for business."
    >
      <main className={styles.main}>
        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <video
            className={styles.heroVideo}
            src="/videos/background-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            poster="/img/hero-poster.png"
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContentCentered}>
            <h1>CREATE YOUR OWN AI SYSTEM<br></br> SHAPE YOUR OWN INTELLIGENCE</h1>
            <p className={styles.heroSubhead}>Naas is the Universal Data & AI Platform that provides the semantic backbone <br></br>to transform your data into secure, connected, and trustworthy AI for navigating critical situations</p>
            <a href="/get-started" className={styles.primaryButton}>GET STARTED</a>
          </div>
        </section>

        {/* ONTOLOGY SECTION */}
        <section className={styles.ontologySection}>
          <div className={styles.ontologyText}>
            <h2>BUILT ON ONTOLOGIES</h2>
            <div className={styles.ontologySubhead}>Structure what you know.<br/>Scale what you do.</div>
            <p className={styles.ontologyBody}>Executable ontologies align AI with your workflows, data, and decisions—making systems transparent, explainable, and reusable.</p>
          </div>
          <div className={styles.ontologyImageWrap}>
            <img src="/img/ontology-graph.png" alt="Ontology Graph" className={styles.ontologyImage} />
          </div>
        </section>

        {/* ABI SECTION */}
        <section className={styles.splitSectionAlt}>
          <div className={styles.splitContent}>
            <h2>ABI: AGENTIC BRAIN INFRASTRUCTURE</h2>
            <p>Your AI systems aren't just smart—they're structured.<br/>Open-source backend connects data pipelines, LLMs, vector search, and graphs to power AI assistants that act, reason, and adapt.</p>
          </div>
          <div className={styles.splitImage}>
            <div className={styles.imagePlaceholder}>[ABI IMAGE]</div>
          </div>
        </section>

        {/* WORKSPACE SECTION */}
        <section className={styles.splitSection}>
          <div className={styles.splitImage}>
            <div className={styles.imagePlaceholder}>[WORKSPACE IMAGE]</div>
          </div>
          <div className={styles.splitContent}>
            <h2>YOUR AI WORKSPACE</h2>
            <p>Chat. Configure. Launch.<br/>Adaptive UI where users talk to agents, build knowledge graphs, and deploy workflows—no code required.</p>
          </div>
        </section>

        {/* CONNECT SECTION */}
        <section className={styles.splitSectionAlt}>
          <div className={styles.splitContent}>
            <h2>CONNECT EVERYTHING</h2>
            <p>From messy systems to one clean graph.<br/>Import, enrich, and transform data from any source. Store it semantically. Expose it via API or assistant.</p>
          </div>
          <div className={styles.splitImage}>
            <div className={styles.imagePlaceholder}>[CONNECT IMAGE]</div>
          </div>
        </section>

        {/* LOCAL-FIRST SECTION */}
        <section className={styles.fullSection}>
          <h2>LOCAL-FIRST. TRUST-BY-DESIGN.</h2>
          <p>You control your data, your agents, and your infrastructure. Deploy Naas anywhere—laptop, cloud, or air-gapped network.</p>
        </section>

        {/* CTA SECTION */}
        <section className={styles.ctaSection}>
          <h2>READY TO GO?</h2>
          <p>Create your first AI system. Connect your knowledge. Shape your own intelligence.</p>
          <div className={styles.ctaButtons}>
            <a href="/get-started" className={styles.primaryButton}>LAUNCH WORKSPACE</a>
            <a href="https://github.com/NaasAI/naas" className={styles.secondaryButton}>VIEW GITHUB</a>
            <a href="https://discord.gg/naas" className={styles.secondaryButton}>JOIN COMMUNITY</a>
          </div>
        </section>
      </main>
    </Layout>
  );
} 
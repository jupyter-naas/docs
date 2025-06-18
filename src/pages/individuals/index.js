import React from 'react';
import Layout from '@theme/Layout';
import styles from './individuals.module.css';

export default function Individuals() {
  return (
    <Layout
      title="For Individuals | NaasAI"
      description="Build your own AI system. Learn, experiment, and create with our powerful AI platform designed for individuals."
    >
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Build Your Own AI System</h1>
          <p className={styles.heroSubtitle}>
            Unleash your creativity with our powerful AI platform. 
            Learn, experiment, and create AI solutions that matter to you.
          </p>
          <div className={styles.ctaContainer}>
            <a href="/join" className={styles.primaryButton}>Get Started Free</a>
            <a href="#features" className={styles.secondaryButton}>Explore Features</a>
          </div>
        </div>
      </div>

      <section className={styles.featuresSection} id="features">
        <h2>Why Choose Naas?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎓</div>
            <h3>Learn by Doing</h3>
            <p>Hands-on experience with real AI systems. Build, deploy, and iterate with our comprehensive learning resources.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🚀</div>
            <h3>Quick Start</h3>
            <p>Get up and running in minutes with our intuitive interface and pre-built templates.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💡</div>
            <h3>Creative Freedom</h3>
            <p>Build anything you can imagine with our flexible platform and powerful tools.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🤝</div>
            <h3>Community Support</h3>
            <p>Join a vibrant community of creators, share ideas, and get help when you need it.</p>
          </div>
        </div>
      </section>

      <section className={styles.learningSection}>
        <h2>Learning Path</h2>
        <div className={styles.learningGrid}>
          <div className={styles.learningCard}>
            <div className={styles.learningNumber}>1</div>
            <h3>Get Started</h3>
            <p>Create your account and explore our platform with guided tutorials.</p>
          </div>
          <div className={styles.learningCard}>
            <div className={styles.learningNumber}>2</div>
            <h3>Learn the Basics</h3>
            <p>Master fundamental concepts with our interactive learning materials.</p>
          </div>
          <div className={styles.learningCard}>
            <div className={styles.learningNumber}>3</div>
            <h3>Build Projects</h3>
            <p>Create your first AI project using our templates and tools.</p>
          </div>
          <div className={styles.learningCard}>
            <div className={styles.learningNumber}>4</div>
            <h3>Share & Grow</h3>
            <p>Share your work with the community and get feedback.</p>
          </div>
        </div>
      </section>

      <section className={styles.resourcesSection}>
        <h2>Learning Resources</h2>
        <div className={styles.resourcesGrid}>
          <div className={styles.resourceCard}>
            <h3>Tutorials</h3>
            <p>Step-by-step guides to help you build your first AI system.</p>
            <a href="/docs/tutorials" className={styles.resourceLink}>Start Learning →</a>
          </div>
          <div className={styles.resourceCard}>
            <h3>Documentation</h3>
            <p>Comprehensive guides and API references for advanced users.</p>
            <a href="/docs" className={styles.resourceLink}>Read Docs →</a>
          </div>
          <div className={styles.resourceCard}>
            <h3>Community</h3>
            <p>Join discussions, share projects, and get help from peers.</p>
            <a href="/community" className={styles.resourceLink}>Join Community →</a>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Start Your AI Journey Today</h2>
        <p>Join thousands of individuals building the future of AI.</p>
        <a href="/join" className={styles.primaryButton}>Get Started Free</a>
      </section>
    </Layout>
  );
} 
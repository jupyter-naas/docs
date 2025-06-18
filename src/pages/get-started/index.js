import React from 'react';
import Layout from '@theme/Layout';
import styles from './get-started.module.css';

export default function GetStarted() {
  return (
    <Layout
      title="Get Started | NaasAI"
      description="Start your AI journey with NaasAI. Choose your path and begin building powerful AI solutions."
    >
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Start Your AI Journey</h1>
          <p className={styles.heroSubtitle}>
            Choose your path and begin building powerful AI solutions with NaasAI.
            We'll guide you through every step of the way.
          </p>
        </div>
      </div>

      <section className={styles.pathsSection}>
        <h2>Choose Your Path</h2>
        <div className={styles.pathsGrid}>
          <div className={styles.pathCard}>
            <div className={styles.pathIcon}>🚀</div>
            <h3>Quick Start</h3>
            <p>Get up and running in minutes with our cloud platform.</p>
            <ul className={styles.pathList}>
              <li>Free trial available</li>
              <li>No credit card required</li>
              <li>Instant access to all features</li>
            </ul>
            <a href="/cloud" className={styles.primaryButton}>Start Free Trial</a>
          </div>

          <div className={styles.pathCard}>
            <div className={styles.pathIcon}>🔒</div>
            <h3>Enterprise</h3>
            <p>Deploy on your infrastructure with enterprise-grade security.</p>
            <ul className={styles.pathList}>
              <li>Custom deployment options</li>
              <li>Dedicated support team</li>
              <li>Advanced security features</li>
            </ul>
            <a href="/contact" className={styles.primaryButton}>Contact Sales</a>
          </div>

          <div className={styles.pathCard}>
            <div className={styles.pathIcon}>💻</div>
            <h3>Local Development</h3>
            <p>Build and test locally with our development tools.</p>
            <ul className={styles.pathList}>
              <li>Local development environment</li>
              <li>Comprehensive documentation</li>
              <li>Community support</li>
            </ul>
            <a href="/local" className={styles.primaryButton}>Download SDK</a>
          </div>
        </div>
      </section>

      <section className={styles.stepsSection}>
        <h2>Getting Started Guide</h2>
        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <h3>Create Your Account</h3>
            <p>Sign up for free and get instant access to our platform.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <h3>Choose Your Environment</h3>
            <p>Select between cloud, local, or enterprise deployment.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <h3>Follow the Tutorials</h3>
            <p>Learn the basics with our step-by-step guides.</p>
          </div>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>4</div>
            <h3>Build Your First Project</h3>
            <p>Start creating your AI solutions with our tools.</p>
          </div>
        </div>
      </section>

      <section className={styles.resourcesSection}>
        <h2>Learning Resources</h2>
        <div className={styles.resourcesGrid}>
          <div className={styles.resourceCard}>
            <h3>Documentation</h3>
            <p>Comprehensive guides and API references.</p>
            <a href="/docs" className={styles.resourceLink}>Read Docs →</a>
          </div>
          <div className={styles.resourceCard}>
            <h3>Tutorials</h3>
            <p>Step-by-step guides for beginners and experts.</p>
            <a href="/docs/tutorials" className={styles.resourceLink}>Start Learning →</a>
          </div>
          <div className={styles.resourceCard}>
            <h3>Community</h3>
            <p>Join discussions and get help from peers.</p>
            <a href="/community" className={styles.resourceLink}>Join Community →</a>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Begin?</h2>
        <p>Start your AI journey today with NaasAI.</p>
        <div className={styles.ctaContainer}>
          <a href="/cloud" className={styles.primaryButton}>Start Free Trial</a>
          <a href="/contact" className={styles.secondaryButton}>Contact Sales</a>
        </div>
      </section>
    </Layout>
  );
} 
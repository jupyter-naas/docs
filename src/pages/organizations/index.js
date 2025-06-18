import React from 'react';
import Layout from '@theme/Layout';
import styles from './organizations.module.css';

export default function Organizations() {
  return (
    <Layout
      title="For Organizations | NaasAI"
      description="Enterprise-grade AI infrastructure for organizations. Scale your AI operations with our powerful platform."
    >
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Enterprise AI Infrastructure</h1>
          <p className={styles.heroSubtitle}>
            Scale your AI operations with our enterprise-grade platform. 
            Built for organizations that demand performance, security, and reliability.
          </p>
          <div className={styles.ctaContainer}>
            <a href="/contact" className={styles.primaryButton}>Contact Sales</a>
            <a href="#features" className={styles.secondaryButton}>Explore Solutions</a>
          </div>
        </div>
      </div>

      <section className={styles.featuresSection} id="features">
        <h2>Enterprise Solutions</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔒</div>
            <h3>Enterprise Security</h3>
            <p>SOC 2 Type II certified, GDPR compliant, and end-to-end encryption for your data.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>High Performance</h3>
            <p>Optimized infrastructure for maximum throughput and minimal latency.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌐</div>
            <h3>Global Infrastructure</h3>
            <p>Deploy across multiple regions with automatic failover and load balancing.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3>Advanced Analytics</h3>
            <p>Comprehensive monitoring, logging, and analytics for your AI operations.</p>
          </div>
        </div>
      </section>

      <section className={styles.solutionsSection}>
        <h2>Industry Solutions</h2>
        <div className={styles.solutionsGrid}>
          <div className={styles.solutionCard}>
            <h3>Healthcare</h3>
            <p>HIPAA-compliant AI solutions for medical imaging, patient care, and research.</p>
            <ul className={styles.solutionList}>
              <li>Medical Image Analysis</li>
              <li>Patient Data Processing</li>
              <li>Research Automation</li>
            </ul>
          </div>
          <div className={styles.solutionCard}>
            <h3>Finance</h3>
            <p>Secure AI infrastructure for fraud detection, risk assessment, and trading.</p>
            <ul className={styles.solutionList}>
              <li>Fraud Detection</li>
              <li>Risk Analysis</li>
              <li>Algorithmic Trading</li>
            </ul>
          </div>
          <div className={styles.solutionCard}>
            <h3>Manufacturing</h3>
            <p>Industrial AI solutions for quality control, predictive maintenance, and automation.</p>
            <ul className={styles.solutionList}>
              <li>Quality Control</li>
              <li>Predictive Maintenance</li>
              <li>Process Automation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <h2>Enterprise Support</h2>
        <div className={styles.supportGrid}>
          <div className={styles.supportCard}>
            <h3>24/7 Support</h3>
            <p>Round-the-clock technical support with dedicated account managers.</p>
          </div>
          <div className={styles.supportCard}>
            <h3>Custom Integration</h3>
            <p>Seamless integration with your existing systems and workflows.</p>
          </div>
          <div className={styles.supportCard}>
            <h3>Training & Onboarding</h3>
            <p>Comprehensive training programs for your team and documentation.</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Transform Your Organization</h2>
        <p>Join leading enterprises using NaasAI to power their AI operations.</p>
        <a href="/contact" className={styles.primaryButton}>Contact Sales</a>
      </section>
    </Layout>
  );
} 
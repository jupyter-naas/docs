import React from 'react';
import Layout from '@theme/Layout';
import styles from './local.module.css';

export default function Local() {
  return (
    <Layout
      title="Local Deployment | NaasAI"
      description="Deploy Naas AI infrastructure on your own hardware. Full control, maximum security, and complete data sovereignty."
    >
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Deploy AI Infrastructure On-Premises</h1>
          <p className={styles.heroSubtitle}>
            Take full control of your AI infrastructure with our on-premises solution. 
            Keep your data within your walls while leveraging enterprise-grade AI capabilities.
          </p>
          <div className={styles.ctaContainer}>
            <a href="/join" className={styles.primaryButton}>Request Demo</a>
            <a href="#features" className={styles.secondaryButton}>Learn More</a>
          </div>
        </div>
      </div>

      <section className={styles.featuresSection} id="features">
        <h2>Complete Control, Maximum Security</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔐</div>
            <h3>Data Sovereignty</h3>
            <p>Keep your data within your infrastructure. No data leaves your premises, ensuring complete control and compliance.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚙️</div>
            <h3>Custom Integration</h3>
            <p>Seamlessly integrate with your existing infrastructure, security systems, and workflows.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📈</div>
            <h3>Scalable Architecture</h3>
            <p>Scale your AI infrastructure as needed, from single-server deployments to multi-node clusters.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🛡️</div>
            <h3>Advanced Security</h3>
            <p>Enterprise-grade security features including encryption, access control, and audit logging.</p>
          </div>
        </div>
      </section>

      <section className={styles.requirementsSection}>
        <h2>System Requirements</h2>
        <div className={styles.requirementsGrid}>
          <div className={styles.requirementCard}>
            <h3>Minimum</h3>
            <ul>
              <li>8 CPU cores</li>
              <li>32GB RAM</li>
              <li>500GB SSD</li>
              <li>NVIDIA GPU (8GB VRAM)</li>
              <li>Ubuntu 20.04 LTS</li>
            </ul>
          </div>
          <div className={styles.requirementCard}>
            <h3>Recommended</h3>
            <ul>
              <li>16 CPU cores</li>
              <li>64GB RAM</li>
              <li>1TB NVMe SSD</li>
              <li>NVIDIA GPU (16GB VRAM)</li>
              <li>Ubuntu 22.04 LTS</li>
            </ul>
          </div>
          <div className={styles.requirementCard}>
            <h3>Enterprise</h3>
            <ul>
              <li>32+ CPU cores</li>
              <li>128GB+ RAM</li>
              <li>2TB+ NVMe SSD</li>
              <li>Multiple NVIDIA GPUs</li>
              <li>Custom OS Support</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <h2>Enterprise Support</h2>
        <div className={styles.supportGrid}>
          <div className={styles.supportCard}>
            <h3>Installation & Setup</h3>
            <p>Our team handles the complete installation and configuration of your on-premises deployment.</p>
          </div>
          <div className={styles.supportCard}>
            <h3>24/7 Support</h3>
            <p>Round-the-clock technical support with guaranteed response times and dedicated engineers.</p>
          </div>
          <div className={styles.supportCard}>
            <h3>Training & Documentation</h3>
            <p>Comprehensive training programs and detailed documentation for your team.</p>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Deploy On-Premises?</h2>
        <p>Contact our team to discuss your requirements and get started.</p>
        <a href="/join" className={styles.primaryButton}>Contact Sales</a>
      </section>
    </Layout>
  );
} 
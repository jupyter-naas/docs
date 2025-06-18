import React from 'react';
import Layout from '@theme/Layout';
import styles from './cloud.module.css';

export default function Cloud() {
  return (
    <Layout
      title="Cloud Solutions | NaasAI"
      description="Enterprise-grade AI infrastructure in the cloud. Scale your AI operations with our secure, high-performance cloud platform."
    >
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Enterprise AI Infrastructure in the Cloud</h1>
          <p className={styles.heroSubtitle}>
            Scale your AI operations with our secure, high-performance cloud platform. 
            Built for enterprises that demand reliability, security, and performance.
          </p>
          <div className={styles.ctaContainer}>
            <a href="/join" className={styles.primaryButton}>Start Free Trial</a>
            <a href="#features" className={styles.secondaryButton}>Explore Features</a>
          </div>
        </div>
      </div>

      <section className={styles.featuresSection} id="features">
        <h2>Why Choose Naas Cloud?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔒</div>
            <h3>Enterprise Security</h3>
            <p>Bank-grade encryption, SOC 2 compliance, and zero-trust architecture. Your data is protected at every layer.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>High Performance</h3>
            <p>Optimized for AI workloads with GPU acceleration and intelligent resource allocation.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌐</div>
            <h3>Global Infrastructure</h3>
            <p>Deploy across multiple regions with automatic failover and low-latency access.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3>Advanced Analytics</h3>
            <p>Real-time monitoring, detailed metrics, and AI-powered insights for optimal performance.</p>
          </div>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <h2>Simple, Transparent Pricing</h2>
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3>Starter</h3>
            <div className={styles.price}>$499<span>/month</span></div>
            <ul>
              <li>Up to 10 AI models</li>
              <li>100GB storage</li>
              <li>Basic support</li>
              <li>Standard security</li>
            </ul>
            <a href="/join" className={styles.pricingButton}>Get Started</a>
          </div>
          <div className={styles.pricingCard}>
            <h3>Professional</h3>
            <div className={styles.price}>$1,999<span>/month</span></div>
            <ul>
              <li>Up to 50 AI models</li>
              <li>500GB storage</li>
              <li>Priority support</li>
              <li>Advanced security</li>
            </ul>
            <a href="/join" className={styles.pricingButton}>Get Started</a>
          </div>
          <div className={styles.pricingCard}>
            <h3>Enterprise</h3>
            <div className={styles.price}>Custom</div>
            <ul>
              <li>Unlimited AI models</li>
              <li>Custom storage</li>
              <li>24/7 dedicated support</li>
              <li>Enterprise security</li>
            </ul>
            <a href="/join" className={styles.pricingButton}>Contact Sales</a>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to Transform Your AI Operations?</h2>
        <p>Join leading enterprises that trust Naas for their AI infrastructure.</p>
        <a href="/join" className={styles.primaryButton}>Start Your Journey</a>
      </section>
    </Layout>
  );
} 
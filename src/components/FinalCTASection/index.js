import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './style.module.css';
import globalStyles from '../../pages/index.module.css';

function FinalCTASection() {
  return (
    <div className="container">
      <div className={styles.gradientBackground}>
        <div className={styles.gridOverlay}></div>
        <div className={styles.glowEffect}></div>
        <div className="row">
          <div className="col col--10 col--offset-1">
            <Heading as="h2" className={styles.sectionTitle}>
              Deploy Your Strategic AI <span className={styles.highlight}>Infrastructure</span>
            </Heading>
            
            <div className={styles.messageContainer}>
              <p className={styles.message}>
                Architect intelligence systems with structural integrity.<br/>
                Transform unstructured data into actionable knowledge.<br/>
                Deploy AI that serves your strategic <strong>objectives</strong> with full governance control.
              </p>
            </div>
            
            <div className={styles.ctaContainer}>
              <Link
                className={clsx("button button--lg", globalStyles.heroButtonPrimary)}
                to="/join">
                <svg className={styles.ctaIconSvg} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={styles.ctaText}>Get Started</span>
                <svg className={styles.ctaArrowSvg} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link
                className={clsx("button button--lg", globalStyles.heroButtonSecondary)}
                to="/docs/about/mission">
                <svg className={styles.ctaIconSvg} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className={styles.ctaText}>Schedule Technical Briefing</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalCTASection; 
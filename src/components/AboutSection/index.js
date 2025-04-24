import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function AboutSection() {
  return (
    <div className="container padding-vert--xl">
      <div className="row">
        <div className="col col--5">
          <div style={{ paddingRight: '2rem' }}>
            <h2 className={styles.sectionTitle}>
              About NCOR
            </h2>
            <p className={styles.sectionText}>
              NCOR is dedicated to promoting interdisciplinary research on ontologies and their applications, especially in the context of AI.
            </p>
            <p className={styles.sectionText}>
              NCOR brings together researchers and practitioners from various
              disciplines including philosophy, computer science, artificial
              intelligence, information science, and domain experts from medicine,
              biology, geography, and other fields.
            </p>
            <Link
              className={clsx('button', styles.learnMoreButton)}
              style={{ color: '#9e7418' }}
              to="/docs/about/mission">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrowIcon}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
        <div className="col col--7">
          <div className="row">
            <div className="col col--12" style={{ marginBottom: '2rem' }}>
              <div className={styles.featureCard}>
                <div className={styles.featureIconContainer} style={{ backgroundColor: 'rgba(158, 116, 24, 0.1)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9e7418" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle} style={{ color: '#9e7418' }}>
                    Ontological Theory
                  </h3>
                  <p className={styles.featureText}>
                    Advancing theoretical frameworks and formal
                    methods for ontological research across disciplines.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--12" style={{ marginBottom: '2rem' }}>
              <div className={styles.featureCard}>
                <div className={styles.featureIconContainer} style={{ backgroundColor: 'rgba(158, 116, 24, 0.1)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9e7418" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle} style={{ color: '#9e7418' }}>
                    Applied Ontologies
                  </h3>
                  <p className={styles.featureText}>
                    Developing and implementing ontologies for
                    scientific research, healthcare, engineering, and
                    more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--12">
              <div className={styles.featureCard}>
                <div className={styles.featureIconContainer} style={{ backgroundColor: 'rgba(158, 116, 24, 0.1)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9e7418" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className={styles.featureContent}>
                  <h3 className={styles.featureTitle} style={{ color: '#9e7418' }}>
                    Community Building
                  </h3>
                  <p className={styles.featureText}>
                    Fostering international collaboration among
                    researchers, practitioners, and institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
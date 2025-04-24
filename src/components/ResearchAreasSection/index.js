import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function ResearchAreasSection() {
  const researchAreas = [
    {
      title: 'Foundational Ontology',
      description: 'Research on top-level categories and relations for building consistent domain ontologies.',
      link: '/docs/research/areas#foundational-ontology'
    },
    {
      title: 'Biomedical Ontologies',
      description: 'Development and application of ontologies in medicine, biology, and healthcare.',
      link: 'docs/research/areas#biomedical-ontologies'
    },
    {
      title: 'Semantic Interoperability',
      description: 'Enabling effective communication between different systems and ontologies.',
      link: '/docs/research/areas#semantic-interoperability'
    },
    {
      title: 'Ontology Methodology',
      description: 'Principles and methods for designing, evaluating, and applying ontologies.',
      link: '/docs/research/areas#ontology-methodology'
    },
    {
      title: 'Ontology Engineering',
      description: 'Tools and techniques for building, maintaining, and evolving ontologies.',
      link: '/docs/research/areas#ontology-engineering'
    },
    {
      title: 'Industrial Ontologies',
      description: 'Ontologies for industrial applications, including manufacturing, supply chain, and product lifecycle management.',
      link: '/docs/research/areas#industrial-ontologies'
    }
  ];

  return (
    <div className={styles.researchAreasContainer}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Research <span className={styles.highlight}>Areas</span>
          </h2>
          <p className={styles.sectionDescription}>
            NCOR promotes research in various aspects of ontology, from theoretical foundations to
            practical applications across diverse domains.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          {researchAreas.map((area, index) => (
            <div key={index} className={styles.researchCard}>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDescription}>{area.description}</p>
              <Link to={area.link} className={styles.learnMoreLink}>
                Learn more{' '}
                <svg
                  className={styles.arrowIcon}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.viewAllContainer}>
          <Link
            to="/docs/research/areas"
            className={styles.viewAllButton}
          >
            View All Research{' '}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.buttonArrow}
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 
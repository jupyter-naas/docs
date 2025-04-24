import React from 'react';
import Link from '@docusaurus/Link';
import styles from './AboutSection.module.css';

function AboutSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col--8 col--offset-2">
          <h2 className={styles.sectionTitle}>About NCOR Network</h2>
          <div className={styles.sectionSubtitle}>Universal Data Integration & Knowledge Representation</div>
          
          <div className={styles.aboutContent}>
            <p>
              The NCOR Network is a collaboration of National Centers for Ontological Research worldwide, 
              dedicated to developing, enhancing, and promoting ontology-based approaches to data organization 
              and knowledge representation.
            </p>
            <p>
              NCOR Network facilitates collaboration between academic institutions, government agencies, and industry partners worldwide. 
              Our work supports critical applications in defense, intelligence, healthcare, manufacturing, and emerging AI systems where precise 
              data-driven representation and interoperability are essential for global cooperation.
            </p>
            <div className="text--center margin-top--lg" style={{ position: 'relative', zIndex: 5 }}>
              <Link
                className="button button--primary button--lg"
                style={{ 
                  backgroundColor: '#4cdf88', 
                  borderColor: '#4cdf88', 
                  color: '#181a1c',
                  position: 'relative',
                  zIndex: 10,
                  pointerEvents: 'auto'
                }}
                to="/docs/about/mission">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection; 
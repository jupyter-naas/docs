import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './style.module.css';

function NetworkedFutureSection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col--8 col--offset-2">
          <Heading as="h2" className={styles.sectionTitle}>
            AI Networks as a Service (Naas)
          </Heading>
          
          <div className={styles.networkIntro}>
            <p className={styles.leadText}>
              You're not building in a silo — you're building a <strong>node in an intelligent, interconnected web</strong>.
            </p>
          </div>
          
          <div className={styles.capabilities}>
            <p className={styles.capabilitiesIntro}>Naas lets you design and deploy:</p>
            
            <ul className={styles.capabilitiesList}>
              <li className={styles.capabilityItem}>
                AI systems that understand your internal world
              </li>
              <li className={styles.capabilityItem}>
                Ontologies that align with external standards (BFO, ISO, XBRL, etc.)
              </li>
              <li className={styles.capabilityItem}>
                Assistants that talk to each other across teams, orgs, or ecosystems
              </li>
            </ul>
          </div>
          
          <div className={styles.highlight}>
            <blockquote className={styles.highlightQuote}>
              <strong>Naas enables semantic interoperability for the AI-powered world.</strong>
            </blockquote>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default NetworkedFutureSection; 
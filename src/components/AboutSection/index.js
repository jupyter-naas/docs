import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import Heading from '@theme/Heading';
import NetworkGraph from './NetworkGraph';

export default function AboutSection() {
  return (
    <div className="container padding-vert--xl">
      <div className={styles.sectionHeader}>
        <Heading as="h2" className={styles.sectionTitle}>
          Your Knowledge <span className={styles.highlight}>Operating System</span> for AI
        </Heading>
        <p className={styles.sectionSubtitle}>
          Naas is the universal Data & AI platform built on ontological infrastructure.
        </p>
      </div>
      
      <div className="row">
        <div className="col col--6">
          <div className={styles.visualizationContainer}>
            <NetworkGraph />
          </div>
        </div>
        <div className="col col--6">
          <div className={styles.mainDescription}>
            <p className={styles.sectionText}>
              It transforms your organization's knowledge into a semantic graph — powering intelligent agents that act, adapt, and align with your world.
            </p>
            
            <div className={styles.capabilityGrid}>
              <div className={styles.capabilityItem}>
                <div className={styles.capabilityIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12.5H5L7.5 10L9.5 14L12.5 8L14.5 14L16.5 11L19 14L22 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.capabilityContent}>
                  <h3 className={styles.capabilityTitle}>Executable ontologies</h3>
                  <p className={styles.capabilityText}>Transform static knowledge into dynamic, executable structures</p>
                </div>
              </div>
              
              <div className={styles.capabilityItem}>
                <div className={styles.capabilityIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 11L11 13.5L15.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8C4 5.79086 5.79086 4 8 4Z" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className={styles.capabilityContent}>
                  <h3 className={styles.capabilityTitle}>Workflow + analytics integration</h3>
                  <p className={styles.capabilityText}>Seamlessly connect knowledge systems with operational flows</p>
                </div>
              </div>
              
              <div className={styles.capabilityItem}>
                <div className={styles.capabilityIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.7 9.3C8.8 7.2 12.1 7.2 14.2 9.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17.3 6.7C12.9 2.3 6.1 2.3 1.7 6.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18.5C12.8284 18.5 13.5 17.8284 13.5 17C13.5 16.1716 12.8284 15.5 12 15.5C11.1716 15.5 10.5 16.1716 10.5 17C10.5 17.8284 11.1716 18.5 12 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.capabilityContent}>
                  <h3 className={styles.capabilityTitle}>AI model orchestration</h3>
                  <p className={styles.capabilityText}>Coordinate and optimize multiple AI systems through unified control</p>
                </div>
              </div>
              
              <div className={styles.capabilityItem}>
                <div className={styles.capabilityIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.32 15.27L14.74 8.85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.73 10.37C9.40274 10.37 9.95 9.82274 9.95 9.15C9.95 8.47726 9.40274 7.93 8.73 7.93C8.05726 7.93 7.51 8.47726 7.51 9.15C7.51 9.82274 8.05726 10.37 8.73 10.37Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.13 16.77C15.8027 16.77 16.35 16.2227 16.35 15.55C16.35 14.8773 15.8027 14.33 15.13 14.33C14.4573 14.33 13.91 14.8773 13.91 15.55C13.91 16.2227 14.4573 16.77 15.13 16.77Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.capabilityContent}>
                  <h3 className={styles.capabilityTitle}>Trust, transparency & traceability</h3>
                  <p className={styles.capabilityText}>Enterprise-grade governance built into every layer</p>
                </div>
              </div>
            </div>
            
            <div className={styles.resultStatement}>
              <p><strong>Result:</strong> You don't just plug in AI, you build the <strong>digital brain</strong> of your business.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
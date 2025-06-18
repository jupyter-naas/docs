import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './style.module.css';

function WhatIsNaasSection() {
  return (
    <div className={styles.sectionWrapper}>
      <div className="container">
        <div className={styles.aboutWrapper}>
          <div className="row">
            <div className="col col--6">
              <div className={styles.contentContainer}>
                <div className={styles.eyebrow}>Enterprise-Grade Architecture</div>
                <Heading as="h2" className={styles.sectionTitle}>
                  Ontology-Driven <span className={styles.highlight}>Intelligence Infrastructure</span>
                </Heading>
                
                <p className={styles.description}>
                  Naas is a structured knowledge and reasoning platform that enables organizations to build AI systems with enterprise-grade foundations. 
                  Unlike black-box systems, our ontology-first approach ensures complete transparency, governance, and semantic correctness.
                </p>
                
                <div className={styles.featureList}>
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={styles.featureText}>Connect structured data, LLMs, and domain expertise</div>
                  </div>
                  
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 8L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.5 15H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={styles.featureText}>Deploy verifiable, explainable reasoning systems</div>
                  </div>
                  
                  <div className={styles.featureItem}>
                    <div className={styles.featureIcon}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18.7273 14.7273C18.6063 15.0909 18.6273 15.4818 18.7891 15.8333C18.9509 16.1848 19.2441 16.4712 19.6127 16.6364L19.6145 16.6373C19.9873 16.8027 20.2982 17.0766 20.5065 17.4225C20.7148 17.7684 20.8113 18.1701 20.7855 18.5747C20.7598 18.9793 20.6128 19.3636 20.3627 19.6837C20.1125 20.0038 19.7708 20.2459 19.3855 20.3782L19.3827 20.3791C19.0068 20.5085 18.6837 20.7569 18.4611 21.0887C18.2384 21.4205 18.1281 21.8171 18.1459 22.2184C18.1637 22.6198 18.3088 23.0053 18.5635 23.3171C18.8182 23.6288 19.1695 23.8495 19.5582 23.9464L19.56 23.9469C19.9542 24.0511 20.3018 24.2741 20.5535 24.5845C20.805 24.8948 20.9466 25.2768 20.9572 25.6732C20.9678 26.0695 20.8468 26.4587 20.6123 26.7823C20.3778 27.1058 20.0432 27.3471 19.6564 27.4719L19.6545 27.4726C19.2686 27.5953 18.9379 27.8451 18.7075 28.1841C18.477 28.5232 18.3588 28.9324 18.3706 29.3488C18.3823 29.7651 18.5235 30.1659 18.7736 30.4897C19.0236 30.8135 19.3695 31.0424 19.76 31.1427" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5.25 12C5.25 12.4142 5.58579 12.75 6 12.75C6.41421 12.75 6.75 12.4142 6.75 12C6.75 11.5858 6.41421 11.25 6 11.25C5.58579 11.25 5.25 11.5858 5.25 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.25 12C17.25 12.4142 17.5858 12.75 18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25C17.5858 11.25 17.25 11.5858 17.25 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.25 6C11.25 6.41421 11.5858 6.75 12 6.75C12.4142 6.75 12.75 6.41421 12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.25 18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18C12.75 17.5858 12.4142 17.25 12 17.25C11.5858 17.25 11.25 17.5858 11.25 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={styles.featureText}>Maintain complete governance and provenance</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col col--6">
              <div className={styles.visualContainer}>
                <div className={styles.visualElement}>
                  <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.topologyGraph}>
                    <path d="M200 50V350" stroke="rgba(76, 223, 136, 0.2)" strokeWidth="1.5" strokeDasharray="8 8"/>
                    <path d="M50 200H350" stroke="rgba(76, 223, 136, 0.2)" strokeWidth="1.5" strokeDasharray="8 8"/>
                    <path d="M120 80L280 320" stroke="rgba(76, 223, 136, 0.2)" strokeWidth="1.5" strokeDasharray="8 8"/>
                    <path d="M120 320L280 80" stroke="rgba(76, 223, 136, 0.2)" strokeWidth="1.5" strokeDasharray="8 8"/>
                    
                    {/* Knowledge Node */}
                    <circle cx="200" cy="120" r="30" fill="rgba(76, 223, 136, 0.1)" stroke="rgba(76, 223, 136, 0.6)" strokeWidth="2"/>
                    <text x="200" y="125" textAnchor="middle" fill="rgba(76, 223, 136, 0.9)" fontSize="12" fontWeight="500">Knowledge</text>
                    
                    {/* Reasoning Node */}
                    <circle cx="280" cy="200" r="30" fill="rgba(76, 223, 136, 0.1)" stroke="rgba(76, 223, 136, 0.6)" strokeWidth="2"/>
                    <text x="280" y="205" textAnchor="middle" fill="rgba(76, 223, 136, 0.9)" fontSize="12" fontWeight="500">Reasoning</text>
                    
                    {/* Data Node */}
                    <circle cx="120" cy="200" r="30" fill="rgba(76, 223, 136, 0.1)" stroke="rgba(76, 223, 136, 0.6)" strokeWidth="2"/>
                    <text x="120" y="205" textAnchor="middle" fill="rgba(76, 223, 136, 0.9)" fontSize="12" fontWeight="500">Data</text>
                    
                    {/* LLM Node */}
                    <circle cx="200" cy="280" r="30" fill="rgba(76, 223, 136, 0.1)" stroke="rgba(76, 223, 136, 0.6)" strokeWidth="2"/>
                    <text x="200" y="285" textAnchor="middle" fill="rgba(76, 223, 136, 0.9)" fontSize="12" fontWeight="500">LLM</text>
                    
                    {/* Ontology Node (Center) */}
                    <circle cx="200" cy="200" r="40" fill="rgba(76, 223, 136, 0.15)" stroke="rgba(76, 223, 136, 0.8)" strokeWidth="2.5"/>
                    <text x="200" y="205" textAnchor="middle" fill="rgba(76, 223, 136, 1)" fontSize="14" fontWeight="600">Ontology</text>
                    
                    {/* Connecting Lines */}
                    <path d="M200 160L200 240" stroke="rgba(76, 223, 136, 0.6)" strokeWidth="1.5"/>
                    <path d="M160 200L240 200" stroke="rgba(76, 223, 136, 0.6)" strokeWidth="1.5"/>
                    <path d="M228 172L172 228" stroke="rgba(76, 223, 136, 0.6)" strokeWidth="1.5"/>
                    <path d="M172 172L228 228" stroke="rgba(76, 223, 136, 0.6)" strokeWidth="1.5"/>
                  </svg>
                  
                  <div className={styles.glowEffect}></div>
                  <div className={styles.gridLines}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIsNaasSection; 
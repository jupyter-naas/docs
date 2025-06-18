import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './about.module.css';

export default function About() {
  return (
    <Layout
      title="About Naas"
      description="We're building the semantic backbone for the Knowledge Era">
      
      {/* Hero Section */}
      <header className={styles.aboutHero}>
        <div className={styles.aboutHeroOverlay}></div>
        <div className="container">
          <div className={clsx('row', styles.aboutHeroRow)}>
            <div className="col col--10 col--offset-1">
              <div className={styles.aboutHeroContent}>
                <span className={styles.eyebrow}>About Naas</span>
                <Heading as="h1" className={styles.aboutHeroTitle}>
                  We build the <span className={styles.highlight}>Semantic Backbone</span> for the Knowledge Era
                </Heading>
                
                <div className={styles.missionStatement}>
                  <p className={styles.aboutLead}>
                    We believe the future belongs to those who build knowledge, not just models.
                  </p>
                  <p className={styles.aboutText}>
                    With the right data, the right infrastructure, and the right philosophy, organizations can design AI systems 
                    that are transparent, trustworthy, and transformative.
                  </p>
                  <p className={styles.aboutText}>
                    But today's AI is fragmented, opaque, and isolated — built on disconnected models rather than connected meaning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Origin Story Section */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className={styles.storyContainer}>
                <div className={styles.timelineMarker}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineLine}></div>
                </div>
                <div className={styles.storyContent}>
                  <p className={styles.aboutTextLarge}>
                    In 2021, when we looked at the available technology, we saw models racing ahead without understanding. 
                    We saw workflows and data pipelines stitched together with brittle code, leaving no semantic foundation 
                    to reason across systems. We saw businesses and institutions handing over their intelligence to closed black-box platforms.
                  </p>
                  <p className={styles.aboutTextLarge}>
                    We knew the world needed a new kind of foundation — a Knowledge Operating System for AI.
                  </p>
                  <p className={styles.aboutEmphasis}>
                    That's why we founded Naas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className={clsx(styles.aboutSection, styles.altBackground)}>
        <div className="container">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className={styles.sectionHeadingContainer}>
                <div className={styles.sectionNumber}>01</div>
                <Heading as="h2" className={styles.sectionTitle}>
                  What We Do
                </Heading>
              </div>
              
              <div className={styles.missionCard}>
                <Heading as="h3" className={styles.statementHeading}>
                  We build the ontological infrastructure for AI systems.
                </Heading>
                <p className={styles.aboutText}>
                  Naas is the Universal Data & AI Platform that enables any organization to build their own AI systems — 
                  structured, interoperable, and deeply aligned with reality.
                </p>
                <p className={styles.aboutText}>
                  Through executable ontologies, we unify data, models, workflows, and analytics into a semantic backbone.
                  The result: agents and assistants that understand your domain, adapt to your needs, and connect meaningfully to the world around them.
                </p>
                
                <div className={styles.cardCta}>
                  <Link to="/docs/platform">
                    <span className={styles.ctaText}>Learn about the Naas AI Stack</span>
                    <svg className={styles.ctaArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* More value propositions */}
              <div className={styles.valuePropositionGrid}>
                {/* Value Proposition 1 */}
                <div className={styles.valueCard}>
                  <Heading as="h3" className={styles.valueHeading}>
                    We engineer for execution, not theory.
                  </Heading>
                  <p className={styles.valueSubheading}>
                    We are builders, not spectators.
                  </p>
                  <p className={styles.aboutText}>
                    At Naas, we've assembled a team at the intersection of ontology engineering, AI systems design, 
                    semantic architecture, and enterprise data operations. We obsess over one thing: turning ideas 
                    into working, scalable, trusted AI systems.
                  </p>
                  <div className={styles.cardCta}>
                    <Link to="/team">
                      <span className={styles.ctaText}>Meet the Naas Team</span>
                      <svg className={styles.ctaArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Value Proposition 2 */}
                <div className={styles.valueCard}>
                  <Heading as="h3" className={styles.valueHeading}>
                    We meet complexity where it lives.
                  </Heading>
                  <p className={styles.valueSubheading}>
                    Your workflows. Your data. Your reality.
                  </p>
                  <p className={styles.aboutText}>
                    Naas isn't a black box you plug in. It's a knowledge graph you shape, an AI system you orchestrate, 
                    a semantic network you own. We partner closely with builders, enterprises, governments, and institutions 
                    to model their world — and bring it to intelligent life.
                  </p>
                  <div className={styles.cardCta}>
                    <Link to="/use-cases">
                      <span className={styles.ctaText}>See Use Cases</span>
                      <svg className={styles.ctaArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
                
                {/* Value Proposition 3 */}
                <div className={styles.valueCard}>
                  <Heading as="h3" className={styles.valueHeading}>
                    We design for sovereignty, privacy, and interoperability.
                  </Heading>
                  <p className={styles.valueSubheading}>
                    Technology should empower, not entrap.
                  </p>
                  <p className={styles.aboutText}>
                    Naas is built with ontological governance at its core. Our systems are auditable, explainable, 
                    and open — giving you total control over your knowledge, your models, and your workflows. 
                    We work to ensure AI is trustworthy by design, and interoperable by default.
                  </p>
                  <div className={styles.cardCta}>
                    <Link to="/trust">
                      <span className={styles.ctaText}>Learn More</span>
                      <svg className={styles.ctaArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <div className={styles.sectionHeadingContainer}>
                <div className={styles.sectionNumber}>02</div>
                <Heading as="h2" className={styles.sectionTitle}>
                  Where We're Going
                </Heading>
              </div>
              
              <div className={styles.visionContent}>
                <p className={styles.aboutText}>
                  Organizations around the world are using Naas to architect the future of AI:
                </p>
                
                <div className={styles.useCaseGrid}>
                  <div className={styles.useCase}>
                    <svg className={styles.useCaseIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69752 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69752 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.5 4.21L12 6.81L16.5 4.21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.5 19.79V14.6L3 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12L16.5 14.6V19.79" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22.08V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className={styles.useCaseText}>
                      <strong>Enterprises</strong> designing AI twins for finance, operations, and marketing.
                    </p>
                  </div>
                  
                  <div className={styles.useCase}>
                    <svg className={styles.useCaseIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className={styles.useCaseText}>
                      <strong>Governments</strong> building semantic intelligence systems for security, regulation, and policy.
                    </p>
                  </div>
                  
                  <div className={styles.useCase}>
                    <svg className={styles.useCaseIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className={styles.useCaseText}>
                      <strong>Innovators</strong> creating personalized AI assistants that reason across unique worldviews, yet stay connected to shared meaning.
                    </p>
                  </div>
                  
                  <div className={styles.useCase}>
                    <svg className={styles.useCaseIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className={styles.useCaseText}>
                      <strong>Auditors</strong> developing transparent, ontologically-governed AI frameworks to ensure compliance in the age of automation.
                    </p>
                  </div>
                </div>
                
                <div className={styles.visionFooter}>
                  <p className={styles.aboutText}>And this is just the beginning.</p>
                  <p className={styles.aboutTextLarge}>
                    We envision a future where every institution, every builder, every human can craft their own AI systems —
                    aligned to their values, grounded in truth, and connected to a Universal Knowledge Network.
                  </p>
                  
                  <div className={styles.finalStatement}>
                    <p className={styles.aboutEmphasis}>This is Naas.</p>
                    <p className={styles.tagline}>We're building the semantic backbone for the Knowledge Era.</p>
                  </div>
                  
                  <div className={styles.aboutCta}>
                    <Link
                      className={clsx("button button--lg", styles.heroButtonPrimary)}
                      to="/join">
                      <svg className={styles.buttonIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Get Started</span>
                      <svg className={styles.ctaArrow} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 
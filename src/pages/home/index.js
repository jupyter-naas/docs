import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// Import components
import AboutSection from '@site/src/components/AboutSection';
import WhatIsNaasSection from '@site/src/components/WhatIsNaasSection';
import HomepageFeatures from '../../components/HomepageFeatures';
import PeopleSection from '@site/src/components/PeopleSection';
import HowItWorksSection from '@site/src/components/HowItWorksSection';
import UseCasesSection from '@site/src/components/UseCasesSection';
import NetworkedFutureSection from '@site/src/components/NetworkedFutureSection';
import AudienceSection from '@site/src/components/AudienceSection';
import WhyTrustSection from '@site/src/components/WhyTrustSection';
import FinalCTASection from '@site/src/components/FinalCTASection';


import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  // Video background logic
  const videoRef = React.useRef(null);
  
  React.useEffect(() => {
    if (videoRef.current) {
      console.log("Video element exists:", videoRef.current);
      videoRef.current.addEventListener('error', (e) => {
        console.error("Video load error:", e);
      });
      
      videoRef.current.addEventListener('loadeddata', () => {
        console.log("Video loaded successfully");
      });
      
      videoRef.current.style.pointerEvents = 'none';
    }
    
    // Ensure overlays don't block clicks
    const overlays = document.querySelectorAll('.videoOverlay, [class*="overlay"]');
    overlays.forEach(overlay => {
      if (overlay) overlay.style.pointerEvents = 'none';
    });
    
    // Make content elements clickable
    const contentElements = document.querySelectorAll('a, button, .button, .navbar-join-button');
    contentElements.forEach(el => {
      if (el) el.style.pointerEvents = 'auto';
    });
  }, []);
  
  return (
    <header className={styles.heroBanner} style={{position: 'relative', overflow: 'hidden'}}>
      <div 
        className={styles.videoBackground}
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        }}
      >
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            transform: 'translate(-50%, -50%)',
            objectFit: 'cover',
            zIndex: '-1'
          }}
        >
          <source src="/videos/background-hero.mp4" type="video/mp4" />
        </video>
        
        <div 
          className={styles.videoOverlay}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)'
          }}
        ></div>
      </div>
      
      {/* Updated hero content - removing buttons */}
      <div className={styles.container} style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}>
        <div className={styles.heroContent} style={{ textAlign: 'center' }}>
          <Heading
            as="h1"
            className={clsx('hero__title', styles.heroTitle)}
            style={{ textAlign: 'center' }}
          >
            {siteConfig.title}
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)} style={{ textAlign: 'center', margin: '0 auto' }}>
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | NaasAI`}
      description="Naas provides the semantic backbone to transform your data into secure, connected, and trustworthy AI. Build your own AI system that aligns with your knowledge, workflows, and values."
      className="homepage">
      <header id="hero" className={styles.heroBanner}>
        <HomepageHeader />
      </header>
      
      <section id="about" className={styles.contentSection}>
        <AboutSection />
      </section>
      
      <section id="what-is-naas" className={styles.contentSection}>
        <WhatIsNaasSection />
      </section>

      <section id="how-it-works" className={clsx(styles.contentSection, styles.altBackground)}>
        <HowItWorksSection />
      </section>
      
      <section id="networked-future" className={styles.contentSection}>
        <NetworkedFutureSection />
      </section>
      
      <section id="who-its-for" className={clsx(styles.contentSection, styles.altBackground)}>
        <AudienceSection />
      </section>
      
      <section id="use-cases" className={styles.contentSection}>
        <UseCasesSection />
      </section>
      
      <section id="why-trust" className={clsx(styles.contentSection, styles.altBackground)}>
        <WhyTrustSection />
      </section>
      
      <section id="final-cta" className={styles.finalCtaSection}>
        <FinalCTASection />
      </section>
    </Layout>
  );
}

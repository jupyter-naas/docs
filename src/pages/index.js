import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// Import the new component
import AboutSection from '@site/src/components/AboutSection';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PeopleSection from '@site/src/components/PeopleSection';
import ResearchAreasSection from '@site/src/components/ResearchAreasSection';
import EventsSection from '@site/src/components/EventsSection';
import FeaturedVideosSection from '@site/src/components/FeaturedVideosSection';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  // Use ref to access the video element directly
  const videoRef = React.useRef(null);
  
  // Log video loading status once component mounts
  React.useEffect(() => {
    if (videoRef.current) {
      console.log("Video element exists:", videoRef.current);
      
      // Add event listeners
      videoRef.current.addEventListener('error', (e) => {
        console.error("Video load error:", e);
      });
      
      videoRef.current.addEventListener('loadeddata', () => {
        console.log("Video loaded successfully");
      });
      
      // Add pointer-events: none directly to the video element for extra safety
      videoRef.current.style.pointerEvents = 'none';
    }
    
    // Add pointer-events: none to any overlays that might block clicks
    const overlays = document.querySelectorAll('.videoOverlay, [class*="overlay"]');
    overlays.forEach(overlay => {
      if (overlay) overlay.style.pointerEvents = 'none';
    });
    
    // Make sure content elements have pointer-events: auto
    const contentElements = document.querySelectorAll('a, button, .button, .navbar-join-button');
    contentElements.forEach(el => {
      if (el) el.style.pointerEvents = 'auto';
    });
  }, []);
  
  return (
    <header className={styles.heroBanner}>
      {/* Absolute div containing the video - KEEP THIS */}
      <div 
        className={styles.videoBackground}
        style={{ pointerEvents: 'none' }} // Direct style for extra safety
      >
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            objectFit: 'cover',
            pointerEvents: 'none', // Direct style for extra safety
          }}
        >
          {/* Keep all existing video sources */}
          <source src="/videos/background-hero.mp4" type="video/mp4" />
          <source src="videos/background-hero.mp4" type="video/mp4" />
          <source src="static/videos/background-hero.mp4" type="video/mp4" />
        </video>
        
        {/* Keep the grey overlay but make it not block clicks */}
        <div 
          className={styles.videoOverlay}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(30, 35, 40, 0.65)',
            zIndex: 1,
            pointerEvents: 'none', // Direct style for extra safety
          }}
        ></div>
      </div>
      
      {/* Hero content - ensure it's above video and clickable */}
      <div className={styles.container} style={{ position: 'relative', zIndex: 10, pointerEvents: 'auto' }}>
        {/* Keep your existing content structure */}
        <div className={styles.heroContent}>
          <Heading
            as="h1"
            className={clsx('hero__title', styles.heroTitle)}
          >
            {siteConfig.title}
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            {siteConfig.tagline}
          </p>
          <div>
            <a
              className="button button--lg"
              style={{ 
                backgroundColor: '#9e7418', 
                borderColor: '#9e7418',
                color: 'white',
                margin: '0 0.75rem',
                padding: '0.75rem 1.5rem',
                fontWeight: '500',
                borderRadius: '4px',
                textDecoration: 'none'
              }}
              href="/join">
              Get Started
            </a>
            <a
              className="button button--lg"
              style={{ 
                backgroundColor: 'transparent',
                borderColor: '#9e7418',
                color: '#ffffff', // Changed to white for better visibility
                margin: '0 0.75rem',
                padding: '0.75rem 1.5rem',
                fontWeight: '500',
                borderRadius: '4px',
                textDecoration: 'none'
              }}
              href="/docs/get-started">
              Learn More
            </a>
          </div>
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
      description="Naas - The Universal Data & AI Platform that helps organizations create powerful ecosystems of AI assistants to transform operations and drive business growth."
      className="homepage">
      <HomepageHeader />
      
      {/* About Section */}
      <section style={{ 
        background: '#fff',
        padding: '60px 0', 
        borderBottom: '1px solid #eee',
        position: 'relative'
      }}>
        <AboutSection />
      </section>
      
      {/* Research Areas Section */}
      <ResearchAreasSection />
      
      {/* The rest of your page content */}
      <main>
        {/* Network Vision section */}
        <div className="container padding-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h2" className="text--center margin-bottom--lg">⚡️ On a Mission to Build the Universal Data & AI Platform</Heading>
              <div className="margin-bottom--xl" style={{ textAlign: 'justify' }}>
                <p>
                  Naas is your Knowledge Operating System for AI, transforming models into meaningful Assistants and Agents 
                  that are deeply aware of your data, workflows, and world.
                </p>
                <p>
                  With Naas, you don't just build AI — you architect AI Networks: distributed, connected, and purpose-driven. 
                  Through executable ontologies, we unify data, models, analytics, and systems into a semantic infrastructure 
                  that scales understanding across people, teams, and machines.
                </p>
                <p>
                  Design your own AI system. Model your unique perspective of reality. Connect it to a shared world of knowledge 
                  through the ontological backbone that powers interoperable intelligence. 
                  This is secure, interpretable, networked AI. 
                  This is Naas.
                </p>
                <div className="text--center margin-top--lg">
                  <Link
                    className="button button--primary button--lg"
                    style={{ backgroundColor: '#4cdf88', borderColor: '#4cdf88', color: '#181a1c' }}
                    to="/docs/about/mission">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Events section */}
        <EventsSection />
        
        {/* Featured Videos section */}
        <FeaturedVideosSection />
        
        <HomepageFeatures />
        <PeopleSection />
      </main>
    </Layout>
  );
}

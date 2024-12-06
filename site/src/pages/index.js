import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <div className={styles.heroBanner}>
        <h1 className={clsx(styles.title, styles.textRight)}>NaasAI Documentation</h1>
        <p className={clsx(styles.tagline, styles.textRight)}>NaasAI is revolutionizing how organizations operate with our Universal Data & AI Platform. We seamlessly integrate data, AI models, workflows, analytics, ontologies, and external systems to create a powerful ecosystem of AI assistants. Our mission is to empower entities of all sizes and sectors to harness the full potential of their data and AI capabilities, driving unprecedented efficiency, insight, and innovation across every aspect of their operations.</p>
        <div className={clsx(styles.buttonContainer, styles.textRight)}>
          <a
            className={styles.cta}
            href="/mission/building-trust-in-ai"
          >
            Learn more →
          </a>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Naas Docs`}
      description="On a mission to build trust in AI">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}

import React from 'react';
import  { Redirect } from 'react-router-dom';

// export default function Home() {
//   return <Redirect to='/platform/introduction' />;
// }
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
        <h1 className={clsx(styles.title, styles.Center)}>NaasAI Documentation</h1>
        <p className={clsx(styles.tagline, styles.Center)}>Naas is a Universal Data & AI Platform helping any organization create a powerful ecosystem of AI assistants. It leverages ontologies as a unifying field integrating data, AI models, workflows, analytics, and external systems to focus on outcomes over outputs.</p>
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
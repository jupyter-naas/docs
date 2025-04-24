// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Build your own AI System. Question Everything.',
  tagline: 'Naas provides the semantic backbone to transform your data into secure, connected, and trustworthy AI.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://naas.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NaasAI', 
  projectName: 'naas-website',
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/NaasAI/naas-website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/NaasAI/naas-website/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  
  // Add the wiki as a separate plugin instead of in the preset
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wiki',
        path: 'wiki',
        routeBasePath: 'wiki',
        sidebarPath: require.resolve('./wikiSidebars.js'),
        editUrl: 'https://github.com/NaasAI/naas-website/tree/main/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Add this fontFamily configuration
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen', 
          'Ubuntu',
          'Cantarell',
          'Helvetica Neue',
          'sans-serif'
        ],
      },
      // Replace with your project's social card
      image: 'img/logos/naas.png',
      navbar: {
        logo: {
          alt: 'Naas Logo',
          src: 'img/logos/naas.png',
          srcDark: 'img/logos/naas.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'right',
            label: 'Get Started',
          },
          {
            type: 'dropdown',
            label: 'About',
            position: 'right',
            items: [
              {
                label: 'Mission',
                to: '/docs/about/mission',
              },
              {
                label: 'What is Ontology',
                to: '/docs/about/what-is-ontology',
              },
              {
                label: 'Ontology for AI',
                to: '/docs/about/ontology-for-ai',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Research',
            position: 'right',
            items: [
              {
                label: 'Areas',
                to: '/docs/research/areas',
              },
              {
                label: 'Projects',
                to: '/docs/research/projects',
              },
              {
                label: 'Publications',
                to: '/docs/research/publications',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Wiki',
            position: 'right',
            items: [
              {
                label: 'Ontology 101',
                to: '/wiki/ontology-101',
              },
              {
                label: 'Courses',
                to: '/wiki/courses/barry-smith',
              },
              {
                label: 'Ontologies',
                to: '/wiki/ontologies/basic-formal-ontology',
              },
              {
                label: 'Books',
                to: '/wiki/books/why-machines-will-never-rule-the-world',
              },
              {
                label: 'Glossary',
                to: '/wiki/glossary',
              },
            ],
          },
          {
            to: '/docs/events/office-hours',
            position: 'right',
            label: 'Events',
            activeBasePath: '/docs/events',
          },
          {
            to: '/docs/affiliates/individuals',
            position: 'right',
            label: 'Affiliates',
            activeBasePath: '/docs/affiliates',
          },
          {
            href: 'https://github.com/NaasAI',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/join',
            label: 'Get Started',
            position: 'right',
            className: 'button button--primary navbar-join-button',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Naas',
            items: [
              {
                html: `
                  <p style="text-align: left; max-width: 300px; margin-top: -5px;">
                    Naas is the Universal Data & AI Platform that helps organizations create powerful ecosystems of AI assistants to transform operations and drive business growth.
                  </p>
                `,
              },
            ],
          },
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'About',
                to: '/docs/about/mission',
              },
              {
                label: 'Research',
                to: '/docs/research/publications',
              },
              {
                label: 'Events',
                to: '/docs/events/office-hours',
              },
              {
                label: 'People',
                to: '/docs/affiliates/individuals',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Publications',
                to: '/docs/research/publications',
              },
              {
                label: 'Ontologies',
                to: '/docs/get-started',
              },
              {
                label: 'Tools',
                to: '/docs/events/useful-links',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/NaasAI',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                html: `
                  <div style="display: flex; align-items: flex-start; margin-bottom: 8px;">
                    <svg style="min-width: 20px; margin-right: 8px; margin-top: 4px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#adbac7"/>
                    </svg>
                    <span>
                      500 Seneca Street<br/>
                      Buffalo, NY 14204<br/>
                      United States
                    </span>
                  </div>
                  <div style="display: flex; align-items: center;">
                    <svg style="min-width: 20px; margin-right: 8px;" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#adbac7"/>
                    </svg>
                    <a href="mailto:support@naas.ai">support@naas.ai</a>
                  </div>
                `,
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} NAASAI, Inc. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      announcementBar: {
        id: 'wip_announcement',
        content: 
          '🚧 <strong>WORK IN PROGRESS:</strong> The Naas website is currently under development. Some features and content may be incomplete. 🚧',
        backgroundColor: '#181a1c', // Dark background
        textColor: 'white',       // Green text to match Naas theme
        isCloseable: false,         // Make it persistent
      },
    }),
  stylesheets: [
    // System fonts are configured in custom.css
  ],
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
        src: 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        (function(){
          emailjs.init("YOUR_USER_ID"); // Replace with your actual EmailJS user ID
        })();
      `,
    },
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
        (function() {
          // Force dark mode on page load
          document.documentElement.dataset.theme = 'dark';
          localStorage.setItem('theme', 'dark');
        })();
      `,
    },
  ],
};

export default config;

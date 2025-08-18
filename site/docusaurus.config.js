// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Naas - Universal Data & AI Platform",
  tagline: "Build AI Networks as a Service with ontology-powered intelligence. Create, deploy, and scale AI assistants that understand relationships across your data, models, and workflows.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.naas.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jupypter-naas", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: '/', // Serve docs from root URL
          // Remove this to remove the "sedit this page" links.
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social sharing configuration
      image: "img/landing-screensaver.gif",
      metadata: [
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:image', content: 'https://docs.naas.ai/img/landing-screensaver.gif'},
        {property: 'og:image', content: 'https://docs.naas.ai/img/landing-screensaver.gif'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'og:type', content: 'website'},
      ],
      // Algolia search configuration
      algolia: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',
        indexName: 'naas-docs',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
      fontFamily: {
        sans: ["San Francisco", "Arial", "sans-serif"],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      navbar: {
        style: "dark",
        title: "",
        // For the scrollbar to be sticky or hide while scrolled down
        // hideOnScroll: true,
        logo: {
          alt: "Naas",
          href: "/",
          src: "/img/naas.png",
        },
        items: [
          // Left side: Core user journey
          {
            to: "get-started/quickstart",
            position: "left",
            label: "Get Started",
          },
          {
            to: "customize",
            position: "left", 
            label: "Customize",
          },
          {
            to: "scale/overview",
            position: "left",
            label: "Scale",
          },
          // Right side: External actions & resources
          {
            to: "https://naas.ai/",
            label: "Try Platform",
            position: "right",
            className: "navbar__item--cta",
          },
          {
            type: "dropdown",
            label: "Resources",
            position: "right",
            items: [
              {
                to: "https://api.naas.ai/redoc",
                label: "API Reference",
              },
              {
                to: "https://github.com/jupyter-naas",
                label: "GitHub",
              },
              {
                to: "https://join.slack.com/t/naas-club/shared_invite/zt-1970s5rie-dXXkigAdEJYc~LPdQIEaLA",
                label: "Community (Slack)",
              },
            ],
          },
        ],
      },
      footer: {
        style: "light",
        copyright: `<div style="text-align: center;"><div style="margin-bottom: 1rem;"><a href="https://github.com/jupyter-naas" target="_blank" style="margin: 0 0.5rem;">GitHub</a> | <a href="https://join.slack.com/t/naas-club/shared_invite/zt-1970s5rie-dXXkigAdEJYc~LPdQIEaLA" target="_blank" style="margin: 0 0.5rem;">Slack</a> | <a href="https://www.linkedin.com/company/naas-ai/" target="_blank" style="margin: 0 0.5rem;">LinkedIn</a> | <a href="https://twitter.com/JupyterNaas" target="_blank" style="margin: 0 0.5rem;">Twitter</a></div>Copyright © ${new Date().getFullYear()} <a href="https://home.naas.ai" target="_blank" rel="noopener noreferrer">NaasAI</a>, Inc.</div>`,
      },
      //   navbar: {
      //   items: [
      //     {
      //       type: 'html',
      //       position: 'right',
      //       value: `<a href="https://www.naas.ai/auth/login" target="_blank"><button>Sign in</button><a>`,
      //     },
      //   ],
      // },
    }),
};

module.exports = config;
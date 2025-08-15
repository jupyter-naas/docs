// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "️️Universal Data & AI Platform",
  tagline:
    "Naas is Universal Data & AI Platform helping any organization create a powerful ecosystem of AI assistants. It leverages ontologies as a unifying field integrating data, AI models, workflows, analytics, and external systems to focus on outcomes over outputs.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.naas.ai",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "jupypter-naas", // Usually your GitHub org/user name.
  projectName: "site", // Usually your repo name.

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
      fontFamily: {
        sans: ["San Francisco", "Arial", "sans-serif"],
      },
      // Replace with your project's social card
      image: "img/landing-screensaver.gif",
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
            to: "development",
            position: "left",
            label: "Develop",
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
        copyright: `<br><br>Copyright © ${new Date().getFullYear()} <a href="https://home.naas.ai" target="_blank" rel="noopener noreferrer">NaasAI</a>, Inc.`,
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
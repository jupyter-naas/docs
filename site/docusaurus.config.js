// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require("prism-react-renderer/themes/github");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "️️Universal Data & AI Platform",
  tagline:
    "Naas is an open alternative to Palantir that you can customize to your own needs. It unifies AI models, workflows, analytics, ontologies, integrations into to transform how organizations operate",
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
          routeBasePath: '/', // Add this line to serve docs from the base URL
          // Remove this to remove the "sedit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/jupyter-naas/site",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

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
          {
            to: "usage/foundation-ai-models",
            position: "left",
            label: `Capabilities`,
          },
          {
            to: "mission/building-trust-in-ai",
            position: "left",
            label: `Getting Started`,
          },
          {
            to: "platform/introduction",
            position: "left",
            label: `Platform Overview`,
          },
          {
            to: "category/resources",
            position: "left",
            label: `Resources`,
          },
          {
            to: "https://api.naas.ai/redoc#tag/AI-Model-API",
            position: "right",
            label: `API Reference`,
          },
          {
            to: "https://github.com/jupyter-naas",
            label: "GitHub",
            position: "right",
          },
          {
            to: "https://naas.ai/",
            label: "Platform Access",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Goals",
            items: [
              {
                label: "Build Trust in AI",
                to: "mission/building-trust-in-ai",
              },
              {
                label: "Map Business Knowledge",
                to: "mission/mapping-business-knowledge",
              },
              {
                label: "Unlock Monetization",
                to: "mission/unlocking-monetization-opportunities",
              },
            ],
          },
          {
            title: "Platform",
            items: [
              {
                label: "Architecture",
                to: "platform/introduction",
              },
              {
                label: "Frameworks",
                to: "platform/frameworks",
              },
              {
                label: "Features",
                to: "platform/key-features",
              },
              {
                label: "Components",
                to: "platform/platform-components",
              },
            ],
          },
          {
            title: "Usage",
            items: [
              {
                label: "Generative AI Models",
                to: "usage/foundation-ai-models",
              },
              {
                label: "AIA: Personal AI Assistant",
                to: "usage/aia-personal-ai-assistant",
              },
              {
                label: "ABI: Mixture of Assistants",
                href: "usage/abi/introduction",
              },
              {
                label: "Custom Assistants",
                to: "usage/custom-ai-assistants",
              },
            ],
          },
          {
            title: "Developers",
            items: [
              {
                label: "Quickstart",
                to: "resources/developers/overview",
              },
              {
                label: "Notebook Templates",
                to: "resources/developers/templates",
              },
              {
                label: "Build Data & AI Products",
                to: "resources/developers/jobs/space",
              },
              {
                label: "Development Environment",
                to: "resources/developers/development",
              },
              {
                label: "Schedule Workflows",
                to: "resources/developers/jobs/scheduler",
              },
              {
                label: "Generate Assets",
                to: "resources/developers/jobs/asset",
              },
              {
                label: "Trigger Webhooks",
                to: "resources/developers/jobs/webhook",
              },
              {
                label: "Send Notifications",
                to: "resources/developers/jobs/notification",
              },
              {
                label: "Build Pipelines",
                to: "resources/developers/jobs/pipeline",
              },
              {
                label: "Manage Secrets",
                to: "resources/developers/jobs/secret",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Join our Slack",
                href: "https://join.slack.com/t/naas-club/shared_invite/zt-1970s5rie-8udGv9TsAw9StcI8SB8eqw",
              },
              {
                label: "GitHub",
                href: "https://github.com/jupyter-naas",
              },
              {
                label: "How to contribute?",
                href: "resources/community/how-to-contribute",
              },
              {
                label: "Roadmap",
                href: "https://github.com/orgs/jupyter-naas/projects/12/views/2",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "Request a demo",
                href: "https://calendly.com/jeremyravenel",
              },
              {
                label: "Enterprise Plan",
                href: "https://share.hsforms.com/11Ie8odLzQdO6ggAtrXFcTg1h10o",
              },
              {
                label: "Teams",
                href: "https://github.com/orgs/jupyter-naas/teams",
              },
              {
                label: "Terms of Service",
                to: "policies/terms",
              },
              {
                label: "Privacy",
                to: "policies/privacy",
              },
              {
                label: "Github",
                href: "https://github.com/jupyter-naas",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/jupyternaas",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/naas-ai/",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UCKKG5hzjXXU_rRdHHWQ8JHQ",
              },
            ],
          },
        ],
        copyright: `<br><br>Copyright © ${new Date().getFullYear()} <a href="#" target="_blank" rel="noopener noreferrer">NaasAI</a>, Inc.`,
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
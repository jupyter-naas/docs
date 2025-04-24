// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {any} SidebarsConfig
 */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'get-started',
    },
    {
      type: 'category',
      label: 'About',
      items: ['about/mission', 'about/what-is-ontology', 'about/ontology-for-ai'],
    },
    {
      type: 'category',
      label: 'Events',
      items: ['events/office-hours', 'events/working-groups', 'events/meetings-workshops'],
    },
    {
      type: 'category',
      label: 'Research',
      items: ['research/areas', 'research/projects', 'research/publications'],
    },
    {
      type: 'category',
      label: 'Affiliates',
      items: ['affiliates/individuals', 'affiliates/organizations', 'affiliates/institutions'],
    },
    {
      type: 'doc',
      id: 'faq',
    },
    {
      type: 'doc',
      id: 'useful-links',
    },
    {
      type: 'doc',
      id: 'support',
    },
  ],
}

module.exports = sidebars;

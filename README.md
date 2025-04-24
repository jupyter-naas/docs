# NCOR Network Website

![NCOR Banner](./static/img/ncor-banner.png)

[![Deployed with Cloudflare Pages](https://img.shields.io/badge/Deployed_with-Cloudflare_Pages-orange?logo=cloudflare)](https://pages.cloudflare.com/)

This repository contains the website for The Universal Data & AI Platform, an international non-profit organization fostering ontology engineering best practices that enable interoperability for robust AI systems.

## What is NCOR?

The NCOR Network is a global federation of ontology centers driving precision, interoperability, and standardization across data systems. We unite researchers, engineers, and domain experts to solve the foundational knowledge representation challenges that underpin effective AI, defense systems, biomedical research, and cross-domain data integration.

As the world's foremost ontology engineering collaborative, we maintain critical standards like the Basic Formal Ontology (ISO/IEC 21838) and the Common Core Ontologies suite, which serve as the semantic backbone for high-stakes systems where ambiguity and misalignment cannot be tolerated. Our approach captures unique domain knowledge while ensuring rigorous adherence to logical principles that enable machine reasoning at scale.

## Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18.0.0
- npm (comes with Node.js)

## Step-by-Step Setup

### 1. Clone the Repository

```bash
git clone https://github.com/NCOR-Organization/NCOR-Network.git
cd NCOR-Network
```

### 2. Install Dependencies

```bash
# Install from the root directory (this will install dependencies for the website workspace)
npm install
```

### 3. Start the Development Server

```bash
# From the project root
npm run start
```

This will start the server at http://localhost:3000/

### 4. Development Workflow

1. Edit files in the following directories:
   - `website/docs/` - Documentation content (Markdown)
   - `website/src/` - React components and styling
   - `website/static/` - Images and other static assets

2. The browser will automatically refresh to show your changes

3. To test a production build locally:
   ```bash
   npm run build
   npm run serve
   ```

### 5. Deployment

This website is deployed using Cloudflare Pages with automatic deployments triggered whenever changes are pushed to the main branch.

### Deployment Configuration

- **Build Command**: `npm run build`
- **Build Output Directory**: `build`
- **Node.js Version**: 18

Cloudflare Pages automatically detects changes to the repository and builds/deploys the site, providing:
- Global CDN distribution
- Automatic HTTPS
- Preview deployments for pull requests

## Project Structure

```
NCOR-Network/
├── .github/workflows/  # GitHub Actions workflow files
├── docs/              # Documentation markdown files
├── src/               # React components and custom CSS
│   ├── components/    # Reusable components
│   ├── css/          # Custom CSS styles
│   └── pages/        # Custom React pages
├── static/            # Static assets (images, etc.)
├── wiki/             # Wiki content and documentation
├── docusaurus.config.js  # Main configuration
├── sidebars.js       # Main sidebar configuration
├── wikiSidebars.js   # Wiki sidebar configuration
└── package.json      # Project configuration
```

## Troubleshooting

### Port 3000 Already in Use

If port 3000 is already in use:
```bash
# Find and kill the process
lsof -i :3000
kill -9 <PID>

# Or use this one-liner
kill -9 $(lsof -ti:3000)
```

### Cannot Find Module Error

If you encounter "Cannot find module" errors:
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules
npm install
```

### Build Errors

If the build fails due to broken links:
1. Check all links in your documentation
2. Verify that `baseUrl` in `website/docusaurus.config.js` is set correctly
3. Ensure all internal links start with `/`


## Adding and Editing Content

### How to Add a New Documentation Page

1. Create a new Markdown file in the appropriate subdirectory within `website/docs/`
   ```bash
   # Example: Creating a new page about data modeling
   touch website/docs/design-patterns/data-modeling.md
   ```

2. Add proper frontmatter at the top of the file:
   ```markdown
   ---
   sidebar_position: 3  # Controls the order in the sidebar
   title: Data Modeling with NCOR  # Page title
   description: Learn how to model your data using NCOR principles
   slug: /design-patterns/data-modeling  # Optional: custom URL
   ---

   # Data Modeling with NCOR

   This is the content of your new page...
   ```

3. The page will automatically appear in the sidebar navigation based on its location in the docs directory hierarchy

### How to Add a Regular Page (non-documentation)

1. Create a new JavaScript/JSX file in `website/src/pages/`:
   ```bash
   # Example: Creating a new standalone page
   touch website/src/pages/roadmap.js
   ```

2. Use this template for the new page:
   ```jsx
   import React from 'react';
   import Layout from '@theme/Layout';
   import Heading from '@theme/Heading';

   export default function Roadmap() {
     return (
       <Layout
         title="CCO Roadmap"
         description="Future plans and roadmap for Common Core Ontologies">
         <main className="container margin-vert--lg">
           <Heading as="h1">CCO Development Roadmap</Heading>
           <p>Content of your page goes here...</p>
         </main>
       </Layout>
     );
   }
   ```

3. The page will be available at `/roadmap`

### How to Edit the Homepage

The homepage is defined in `website/src/pages/index.js`. To modify it:

1. Open `website/src/pages/index.js` in your editor
2. Main sections to edit:
   - Hero section (title, subtitle, buttons): Inside the `HomepageHeader` component
   - About section: Inside the main content area
   - Feature cards: Edit `website/src/components/HomepageFeatures/index.js`
   - People section: Edit `website/src/components/PeopleSection/index.js`

3. Example of editing the hero section subtitle:
   ```jsx
   <p className={styles.heroSubtitle}>
     Updated subtitle text goes here...
   </p>
   ```

4. The CSS styles for the homepage are in `website/src/pages/index.module.css`

## License

This project is licensed under the BSD-3 License.

## Contact

For questions about NCOR, please contact the team at info@ncor.us

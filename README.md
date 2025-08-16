# Naas Documentation

Universal Data & AI Platform for building AI assistants and automating business workflows.

[![Node.js](https://img.shields.io/badge/Node.js->=20.0-green.svg)](https://nodejs.org/)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.6.3-blue.svg)](https://docusaurus.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**🚀 [Live Documentation](https://docs.naas.ai)** | **🔧 [API Docs](https://api.naas.ai/redoc)** | **💬 [Community](https://join.slack.com/t/naas-club/shared_invite/zt-1970s5rie-dXXkigAdEJYc~LPdQIEaLA)**

## Table of Contents

- [Naas Documentation](#naas-documentation)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Quick Start](#quick-start)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Development](#development)
    - [Building for Production](#building-for-production)
    - [Testing the Build](#testing-the-build)
  - [Project Structure](#project-structure)
    - [Key Directories](#key-directories)
  - [Available Scripts](#available-scripts)
  - [Docker Setup (Optional)](#docker-setup-optional)
  - [Contributing](#contributing)
    - [Making Changes](#making-changes)
    - [Writing Guidelines](#writing-guidelines)
    - [File Organization](#file-organization)
  - [Support](#support)

## Overview

This repository contains the official documentation for Naas (AI Networks as a Service), a comprehensive platform that enables teams to build AI assistants, automate business workflows, and create data-driven applications.

## Quick Start

### Prerequisites

- **Node.js** >= 20.0
- **npm** or **yarn**
- **Docker** (optional, for containerized development across multiple codebases)


### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jupyter-naas/docs.git
   cd docs
   ```

2. **Install dependencies**
   ```bash
   cd site
   npm install
   ```

3. **Start development server** (from the `site/` directory)
   ```bash
   cd site
   npm run start
   ```

4. **Open your browser**
   
   [http://localhost:3000](http://localhost:3000)

The site will automatically reload when you make changes to the documentation files.

## Development

The development server from the installation steps above provides hot reloading - changes are reflected live without restarting the server.

### Building for Production

```bash
cd site
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Testing the Build

```bash
cd site
npm run serve
```

Serves the production build locally for testing purposes.

## Project Structure

This documentation site is built with Docusaurus. The blog functionality exists but is currently hidden from the UI.

```
docs/
├── site/                   # Docusaurus application
│   ├── docs/              # Documentation content
│   │   ├── get-started/   # Getting started guides
│   │   ├── customize/     # Customization docs
│   │   └── scale/         # Scaling and API docs
│   ├── blog/              # Blog content (not yet active in UI)
│   ├── src/               # Custom React components
│   └── static/            # Static assets
├── docker-compose.yaml    # Docker configuration for workspace
└── README.md             # This file
```

### Key Directories

- **`site/docs/`** - Main documentation content in Markdown
- **`site/blog/`** - Blog content (hidden in UI, planned for future activation)
- **`site/src/`** - Custom React components and pages
- **`site/static/`** - Images, assets, and downloadable files
- **`site/docusaurus.config.js`** - Docusaurus configuration

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run start` | Start development server |
| `npm run build` | Build for production |
| `npm run serve` | Serve production build locally |
| `npm run clear` | Clear Docusaurus cache |
| `npm run swizzle` | Customize Docusaurus components |
| `npm run deploy` | Deploy to GitHub Pages |

## Docker Setup (Optional)

For teams working across multiple codebases in this workspace, Docker provides environment consistency:

```bash
# Start documentation site in container
docker-compose up docusaurus

# Access at http://localhost:3003
```

The Docker setup is particularly useful when:
- Working across multiple codebases with different runtime requirements
- Onboarding new team members
- Ensuring consistent environments across development machines

## Contributing

We welcome contributions to improve the documentation!

### Making Changes

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/improve-docs
   ```
3. **Make your changes**
4. **Test locally**
   ```bash
   npm run start -- --port 3003
   ```
5. **Submit a pull request**

### Writing Guidelines

- Use clear, concise language
- Include code examples where applicable
- Follow the existing structure and formatting
- Test all links and references
- Optimize images for web delivery

### File Organization

- Place new documentation in the appropriate `docs/` subdirectory
- Use descriptive filenames with hyphens (e.g., `api-integration.md`)
- Update navigation in `sidebars.js` when adding new sections

## Support

- **Documentation**: [docs.naas.ai](https://docs.naas.ai)
- **API Reference**: [api.naas.ai/redoc](https://api.naas.ai/redoc)
- **Community Slack**: [Join Here](https://join.slack.com/t/naas-club/shared_invite/zt-1970s5rie-dXXkigAdEJYc~LPdQIEaLA)
- **GitHub Issues**: [Report bugs or request features](https://github.com/jupyter-naas/docs/issues)

---

**Built with ❤️ using [Docusaurus](https://docusaurus.io/)**
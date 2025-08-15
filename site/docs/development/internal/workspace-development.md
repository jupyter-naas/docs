---
sidebar_position: 1
---

# Workspace Development (Private)

:::warning Private Repository
The workspace repository is private and only accessible to Naas team members.
:::

## Overview

The Naas workspace is the React-based web application that provides the main user interface for the platform.

**Repository**: [workspace](https://github.com/jupyter-naas/workspace) *(Private)*

## Development Setup

```bash
# Team members only - requires repository access
git clone https://github.com/jupyter-naas/workspace.git
cd workspace

# Install dependencies
npm install

# Start development server
npm run dev
```

## Architecture

- **Technology**: React, TypeScript, Vite
- **State Management**: Redux Toolkit
- **UI Components**: Custom design system
- **Build Tool**: Vite with hot reload

## Key Components

```
src/
├── components/     # Reusable UI components
├── pages/          # Application pages
├── store/          # Redux state management
├── hooks/          # Custom React hooks
├── api/            # API client integration
└── utils/          # Utility functions
```

## Development Guidelines

### API Integration
```typescript
// Example API call
import { useApiClient } from '@/hooks/useApiClient';

const MyComponent = () => {
  const api = useApiClient();
  
  const handleCreateAgent = async (data) => {
    const response = await api.agents.create(data);
    // Handle response
  };
};
```

### Component Standards
- Use TypeScript for all components
- Follow atomic design principles
- Implement proper error boundaries
- Add loading states for async operations

## Access Requirements

- **Naas team membership** required
- **GitHub repository access** 
- **Development environment** setup by DevOps team

Contact the development team for access requests.

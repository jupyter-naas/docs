---
sidebar_position: 1
slug: /development
---

# Platform Services

Deep dive into developing with and integrating the complete Naas platform ecosystem.

## Overview

The Naas platform consists of several interconnected services that work together to provide a comprehensive AI development and deployment environment. This guide covers how to develop with, integrate, and extend these services.

## Platform Services Architecture

### Core Repositories

| Service | Repository | Purpose | Technology |
|---------|------------|---------|------------|
| **API Gateway** | [naas-api-ce](https://github.com/jupyter-naas/naas-api-ce) | Enterprise microservices | FastAPI, PostgreSQL |
| **Workspace** | [workspace](https://github.com/jupyter-naas/workspace) | Web interface | React, TypeScript |
| **Chrome Extension** | [chrome-extension](https://github.com/jupyter-naas/chrome-extension) | Browser integration | JavaScript, WebExtensions |
| **Python SDK** | [naas-python](https://github.com/jupyter-naas/naas-python) | Programmatic access | Python, CLI |
| **Protocol Models** | [naas-models](https://github.com/jupyter-naas/naas-models) | Data schemas | Protocol Buffers |
| **Credits API** | [credits-api](https://github.com/jupyter-naas/credits-api) | Billing management | FastAPI, PostgreSQL |
| **ABI Core** | [abi](https://github.com/jupyter-naas/abi) | AI engine | Python, Docker |

## API Gateway Development

### Repository: [naas-api-ce](https://github.com/jupyter-naas/naas-api-ce)

The API Gateway serves as the central hub for all platform interactions.

#### Local Development Setup

```bash
git clone https://github.com/jupyter-naas/naas-api-ce.git
cd naas-api-ce

# Start with Docker Compose
docker-compose up
```

#### Domain Architecture

The API is organized using Domain-Driven Design:

**Auth Domain** (`src/domains/auth/`)
- User authentication and authorization
- JWT token management
- Role-based access control

**Space Domain** (`src/domains/space/`)
- Computational environment management
- Container orchestration
- Resource allocation

**Registry Domain** (`src/domains/registry/`)
- Container registry management
- Module publishing and discovery
- Version control

**Analytics Domain** (`src/domains/analytics/`)
- Usage tracking and metrics
- Performance monitoring
- Business intelligence

#### API Development Patterns

**Handler Structure**:
```python
# Example: space creation handler
from fastapi import APIRouter, Depends
from src.domains.space.schemas import SpaceCreate, SpaceResponse
from src.domains.space.service import SpaceService

router = APIRouter(prefix="/space", tags=["spaces"])

@router.post("/", response_model=SpaceResponse)
async def create_space(
    space_data: SpaceCreate,
    service: SpaceService = Depends(),
    current_user: User = Depends(get_current_user)
):
    return await service.create_space(space_data, current_user)
```

**Service Layer**:
```python
from src.domains.space.repository import SpaceRepository
from src.domains.space.models import Space

class SpaceService:
    def __init__(self, repo: SpaceRepository):
        self.repo = repo
    
    async def create_space(self, space_data: SpaceCreate, user: User) -> Space:
        # Business logic
        space = Space(
            name=space_data.name,
            owner_id=user.id,
            containers=space_data.containers
        )
        return await self.repo.create(space)
```

#### Testing

```bash
# Run tests
pytest

# Test specific domain
pytest src/domains/space/tests/

# Integration tests
pytest tests/integration/
```

## Workspace Development

### Repository: [workspace](https://github.com/jupyter-naas/workspace)

React-based web application providing the main user interface.

#### Local Development

```bash
git clone https://github.com/jupyter-naas/workspace.git
cd workspace

# Install dependencies
npm install

# Start development server
npm start
```

#### Architecture

**Component Structure**:
```
src/
├── components/          # Reusable UI components
│   ├── agents/         # Agent interaction components
│   ├── chat/           # Chat interface
│   └── common/         # Shared components
├── hooks/              # Custom React hooks
├── services/           # API integration
├── stores/             # State management
└── utils/              # Helper functions
```

#### Key Components

**Agent Chat Interface**:
```tsx
import React, { useState } from 'react';
import { useAgent } from '../hooks/useAgent';

export const AgentChat: React.FC<{ agentName: string }> = ({ agentName }) => {
  const [messages, setMessages] = useState([]);
  const { sendMessage, isLoading } = useAgent(agentName);

  const handleSend = async (content: string) => {
    const response = await sendMessage(content);
    setMessages(prev => [...prev, { type: 'user', content }, response]);
  };

  return (
    <div className="agent-chat">
      <MessageList messages={messages} />
      <MessageInput onSend={handleSend} disabled={isLoading} />
    </div>
  );
};
```

**API Integration Hook**:
```tsx
import { useCallback } from 'react';
import { apiClient } from '../services/api';

export const useAgent = (agentName: string) => {
  const sendMessage = useCallback(async (content: string) => {
    return await apiClient.post(`/agents/${agentName}/completion`, {
      prompt: content,
      thread_id: 1
    });
  }, [agentName]);

  return { sendMessage };
};
```

#### Building and Deployment

```bash
# Build for production
npm run build

# Test build locally
npm run preview

# Docker build
docker build -t workspace .
```

## Chrome Extension Development

### Repository: [chrome-extension](https://github.com/jupyter-naas/chrome-extension)

Browser extension for universal AI assistance.

#### Development Setup

```bash
git clone https://github.com/jupyter-naas/chrome-extension.git
cd chrome-extension

# Install dependencies
npm install

# Build extension
npm run build

# Load in Chrome
# 1. Go to chrome://extensions/
# 2. Enable Developer mode
# 3. Click "Load unpacked" and select dist/ folder
```

#### Extension Architecture

**Manifest v3 Structure**:
```json
{
  "manifest_version": 3,
  "name": "Naas AI Assistant",
  "permissions": [
    "activeTab",
    "storage",
    "identity"
  ],
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ],
  "background": {
    "service_worker": "background.js"
  }
}
```

**Content Script Integration**:
```javascript
// content.js - Inject AI overlay
class NaasOverlay {
  constructor() {
    this.initializeOverlay();
    this.setupEventListeners();
  }

  initializeOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'naas-ai-overlay';
    overlay.innerHTML = `
      <div class="naas-widget">
        <button id="naas-trigger">Ask AI</button>
        <div id="naas-interface" class="hidden">
          <textarea placeholder="Ask about this page..."></textarea>
          <button id="naas-submit">Submit</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  async askAI(question, context) {
    const response = await chrome.runtime.sendMessage({
      action: 'completion',
      data: { question, context }
    });
    return response;
  }
}

new NaasOverlay();
```

#### Testing Extension

```bash
# Run tests
npm test

# Manual testing
# Load extension in Chrome and test on various websites
```

## Python SDK Development

### Repository: [naas-python](https://github.com/jupyter-naas/naas-python)

Python library for programmatic platform access.

#### Development Setup

```bash
git clone https://github.com/jupyter-naas/naas-python.git
cd naas-python

# Install in development mode
pip install -e .

# Install development dependencies
pip install -r requirements-dev.txt
```

#### SDK Architecture

**Client Structure**:
```python
# naas_python/client.py
class NaasClient:
    def __init__(self, base_url: str, token: str):
        self.base_url = base_url
        self.token = token
        self.session = self._create_session()
        
        # Initialize service clients
        self.agents = AgentClient(self)
        self.spaces = SpaceClient(self)
        self.registry = RegistryClient(self)

    def _create_session(self):
        session = requests.Session()
        session.headers.update({
            'Authorization': f'Bearer {self.token}',
            'Content-Type': 'application/json'
        })
        return session
```

**Service Clients**:
```python
# naas_python/agents.py
class AgentClient:
    def __init__(self, client: NaasClient):
        self.client = client

    def complete(self, agent: str, prompt: str, **kwargs) -> dict:
        response = self.client.session.post(
            f'{self.client.base_url}/agents/{agent}/completion',
            json={'prompt': prompt, **kwargs}
        )
        response.raise_for_status()
        return response.json()

    async def stream_complete(self, agent: str, prompt: str, **kwargs):
        async with aiohttp.ClientSession() as session:
            async with session.post(
                f'{self.client.base_url}/agents/{agent}/stream-completion',
                json={'prompt': prompt, **kwargs},
                headers=self.client.session.headers
            ) as response:
                async for line in response.content:
                    if line.startswith(b'data: '):
                        yield json.loads(line[6:])
```

#### CLI Development

```python
# naas_python/cli.py
import click
from .client import NaasClient

@click.group()
@click.option('--token', envvar='NAAS_TOKEN', required=True)
@click.option('--base-url', envvar='NAAS_BASE_URL', 
              default='https://api.naas.ai')
@click.pass_context
def cli(ctx, token, base_url):
    ctx.obj = NaasClient(base_url, token)

@cli.command()
@click.argument('agent')
@click.argument('prompt')
@click.pass_obj
def chat(client, agent, prompt):
    response = client.agents.complete(agent, prompt)
    click.echo(response['content'])

if __name__ == '__main__':
    cli()
```

## Protocol Buffer Models

### Repository: [naas-models](https://github.com/jupyter-naas/naas-models)

Shared data models and API contracts.

#### Development Workflow

```bash
git clone https://github.com/jupyter-naas/naas-models.git
cd naas-models

# Install Protocol Buffer compiler
# macOS: brew install protobuf
# Ubuntu: apt-get install protobuf-compiler

# Generate code for all languages
make generate

# Generate for specific language
make generate-python
make generate-typescript
make generate-go
```

#### Schema Definition

```protobuf
// protos/agent.proto
syntax = "proto3";

package naas.agent.v1;

message CompletionRequest {
  string agent = 1;
  string prompt = 2;
  int32 thread_id = 3;
  map<string, string> parameters = 4;
}

message CompletionResponse {
  string content = 1;
  string agent = 2;
  int32 thread_id = 3;
  int64 timestamp = 4;
  Usage usage = 5;
}

message Usage {
  int32 prompt_tokens = 1;
  int32 completion_tokens = 2;
  int32 total_tokens = 3;
}

service AgentService {
  rpc Complete(CompletionRequest) returns (CompletionResponse);
  rpc StreamComplete(CompletionRequest) returns (stream CompletionResponse);
}
```

## Credits API Development

### Repository: [credits-api](https://github.com/jupyter-naas/credits-api)

Usage tracking and billing management.

#### Local Development

```bash
git clone https://github.com/jupyter-naas/credits-api.git
cd credits-api

# Start with Docker Compose
docker-compose up
```

#### Usage Tracking

```python
# Track API usage
@app.middleware("http")
async def track_usage(request: Request, call_next):
    start_time = time.time()
    
    response = await call_next(request)
    
    # Calculate usage
    duration = time.time() - start_time
    cost = calculate_cost(request, response, duration)
    
    # Log usage
    await usage_service.track_usage(
        user_id=request.user.id,
        endpoint=request.url.path,
        cost=cost,
        duration=duration
    )
    
    return response
```

## Integration Development

### Building Custom Integrations

All platform services can be extended with custom integrations:

#### API Gateway Extensions

Add new domains following the DDD pattern:

```python
# src/domains/custom/
├── __init__.py
├── models.py          # SQLAlchemy models
├── schemas.py         # Pydantic schemas
├── repository.py      # Data access layer
├── service.py         # Business logic
├── handlers.py        # FastAPI routes
└── tests/            # Unit tests
```

#### Workspace Plugins

Extend the React interface:

```tsx
// src/plugins/custom/
├── index.ts           # Plugin export
├── components/        # React components
├── hooks/            # Custom hooks
├── services/         # API integration
└── types.ts          # TypeScript types
```

#### Extension APIs

Add new Chrome extension capabilities:

```javascript
// extensions/custom/
├── manifest.json      # Extension configuration
├── content.js        # Content script
├── background.js     # Service worker
└── popup/           # Extension popup UI
```

## Testing Strategy

### Integration Testing

```bash
# Run full platform integration tests
cd platform-tests/
docker-compose up -d  # Start all services
pytest tests/integration/
```

### End-to-End Testing

```bash
# Playwright tests for complete user flows
npm run e2e-test
```

## Deployment

### Development Environment

```bash
# Start all services locally
git clone https://github.com/jupyter-naas/naas-platform-dev.git
cd naas-platform-dev
docker-compose up
```

### Production Deployment

```bash
# Kubernetes deployment
kubectl apply -f k8s/
helm install naas-platform ./helm/naas-platform
```

This development guide provides the foundation for building with and extending the complete Naas platform ecosystem. Each service can be developed independently while maintaining integration capabilities through well-defined APIs and protocols.

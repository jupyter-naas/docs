---
sidebar_position: 1
---

# API Gateway Integration

The Naas API Gateway at [https://api.naas.ai/redoc](https://api.naas.ai/redoc) provides comprehensive platform services for building applications and scaling infrastructure.

## Overview

The Naas API Gateway offers **16 major service APIs** for complete platform integration:

### Core Platform APIs

**Infrastructure & Management**:
- **[Workspace API](#workspace-api)**: Multi-user workspace management with roles and permissions
- **[Space API](#space-api)**: Serverless application deployment with auto-scaling
- **[Object Storage API](#object-storage-api)**: S3-compatible file storage with CRUD operations
- **[Registry API](#registry-api)**: Secure Docker container registry management

**AI & Intelligence**:
- **[AI Model API](#ai-model-api)**: Access to ChatGPT, Claude, Stable Diffusion, Meta, Midjourney
- **[Chat API](#chat-api)**: Multi-model chat interface with plugin integration
- **[Memory API](#memory-api)**: Auto-RAG vector database for conversation memory
- **[Vector Database API](#vector-database-api)**: LLM embeddings and retrieval-augmented generation

**Data & Processing**:
- **[Asset API](#asset-api)**: File sharing and public asset management
- **[Ontology API](#ontology-api)**: Knowledge graph and semantic data operations
- **[Graph Database API](#graph-database-api)**: Neo4j-compatible graph storage ($100/month)
- **[Pipeline API](#pipeline-api)**: DAG-based workflow orchestration

**Development & Automation**:
- **[Lab API](#lab-api)**: JupyterLab development environments (free)
- **[Webhook API](#webhook-api)**: Transform notebooks into web applications
- **[Template API](#template-api)**: Open-source notebook template catalog (free)

**Operations & Security**:
- **[Secret API](#secret-api)**: AWS-backed secure credential management
- **[Event API](#event-api)**: Comprehensive activity logging and auditing
- **[Credit API](#credit-api)**: Platform usage and billing management (free access)

## Authentication

All APIs use OAuth2 with scoped permissions:

```bash
# Get your token from https://naas.ai → Settings → API Keys
curl -H "Authorization: Bearer YOUR_TOKEN" \
     -H "Content-Type: application/json" \
     https://api.naas.ai/
```

## Service Details

### Workspace API
Complete workspace management with user roles and permissions:

```python
import requests

# Create workspace
response = requests.post(
    "https://api.naas.ai/workspace",
    headers={"Authorization": "Bearer YOUR_TOKEN"},
    json={
        "workspace": {
            "name": "Production Environment",
            "is_personal": False
        }
    }
)

# Invite user to workspace
requests.post(
    f"https://api.naas.ai/workspace/{workspace_id}/user/",
    headers={"Authorization": "Bearer YOUR_TOKEN"},
    json={
        "user_id": "user-uuid",
        "email": "user@company.com", 
        "role": "admin"  # owner, admin, member
    }
)
```

### AI Model API
Access to multiple AI providers with unified interface:

```python
# Get available models
models = requests.get(
    "https://api.naas.ai/aimodel",
    headers={"Authorization": "Bearer YOUR_TOKEN"}
).json()

# Generate completion
completion = requests.post(
    f"https://api.naas.ai/aimodel/{model_id}/completion",
    headers={"Authorization": "Bearer YOUR_TOKEN"},
    json={
        "payload": '{"messages": [{"role": "user", "content": "Hello"}]}'
    }
).json()
```

**Supported Models**: OpenAI GPT, Claude, Stable Diffusion, Meta Llama, Midjourney

### Space API
Serverless application deployment with auto-scaling:

```python
# Deploy containerized application
space = requests.post(
    "https://api.naas.ai/space",
    headers={"Authorization": "Bearer YOUR_TOKEN"},
    json={
        "name": "my-api",
        "domain": "custom-domain.com",
        "containers": [{
            "name": "api",
            "image": "my-registry/my-app:latest",
            "port": 8080,
            "cpu": "500m",
            "memory": "1Gi",
            "env": {"API_KEY": "secret-value"}
        }]
    }
).json()
```

**Features**: Auto-scaling, custom domains, HTTPS endpoints, cost optimization

### Object Storage API
S3-compatible storage with automatic organization:

```python
# Create storage bucket
storage = requests.post(
    f"https://api.naas.ai/workspace/{workspace_id}/storage",
    headers={"Authorization": "Bearer YOUR_TOKEN"},
    json={"storage": {"name": "data-lake"}}
).json()

# Upload file
with open("data.csv", "rb") as f:
    requests.post(
        f"https://api.naas.ai/workspace/{workspace_id}/storage/object",
        headers={"Authorization": "Bearer YOUR_TOKEN"},
        data={
            "storage_name": "data-lake",
            "prefix": "datasets/"
        },
        files={"file": f}
    )
```

**Auto-organized structure**: `chats/`, `assistants/`, `documents/` with S3 compatibility

### Chat API
Multi-model chat with plugin integration:

```python
# Create chat
chat = requests.post(
    f"https://api.naas.ai/workspace/{workspace_id}/chat",
    headers={"Authorization": "Bearer YOUR_TOKEN"},
    json={"name": "Data Analysis Chat"}
).json()

# Send message with AI model
completion = requests.post(
    f"https://api.naas.ai/workspace/{workspace_id}/chat/{chat_id}/completion",
    headers={"Authorization": "Bearer YOUR_TOKEN"},
    json={
        "model_id": "gpt-4o",
        "payload": '{"messages": [{"role": "user", "content": "Analyze trends"}]}',
        "plugin_id": "analytics-plugin-uuid"
    }
).json()
```

## Pricing Overview

For current pricing information, see [Usage and Billing](/get-started/quickstart#usage-and-billing).

## Documentation

**Complete API Reference**: [https://api.naas.ai/redoc](https://api.naas.ai/redoc)  
**Interactive Testing**: [https://api.naas.ai/docs](https://api.naas.ai/docs)

For local development, combine with:
- **[ABI API](/scale/api-integration/abi-api)**: Local AI orchestration
- **[naas-python SDK](/scale/client-sdks/python)**: Infrastructure automation

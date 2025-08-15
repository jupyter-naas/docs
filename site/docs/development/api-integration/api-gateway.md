---
sidebar_position: 1
---

# API Gateway Integration

**Note**: This section covers the theoretical API Gateway integration. For actual working APIs, see:
- **[ABI API](/development/api-integration/abi-api)**: Local AI agent system (working)
- **[Python SDK](/development/client-sdks/python)**: naas-python for infrastructure management (working)

## Overview

The Naas platform includes multiple API endpoints across different services:

### Available APIs

1. **ABI API**: Local AI agent orchestration ([working](/development/api-integration/abi-api))
2. **naas-python SDK**: Infrastructure and asset management ([working](/development/client-sdks/python))
3. **naas-models**: Protocol buffer definitions for gRPC services
4. **Platform API Gateway**: Central API (status unclear)

## Platform Integration Patterns

Based on the actual repository structure:

### Protocol Models Integration

The [naas-models repository](https://github.com/jupyter-naas/naas-models) provides:
- **Protocol Buffer definitions** for gRPC services
- **Multi-language support**: Python, Go, and other language bindings
- **Version management**: Latest release v1.27.1 with 54 releases
- **License**: AGPL-3.0

### Infrastructure Management

The [naas-python SDK](https://github.com/jupyter-naas/naas-python) handles:
- **Space Operations**: Cloud environment management
- **Storage Operations**: Data and asset storage
- **Asset Management**: Application resource handling

## Working Integrations

### 1. ABI API (Local AI Agents)

For actual AI agent integration:

```python
import requests

# Chat with ABI agents
response = requests.post(
    "http://localhost:9879/agents/abi/chat",
    headers={"Authorization": "Bearer your_key"},
    json={"message": "Analyze this data"}
)
```

See [ABI API documentation](/development/api-integration/abi-api) for complete examples.

### 2. Infrastructure Management

For cloud infrastructure and asset management:

```python
import naas_python as naas

# Manage spaces and storage
naas.space.add(space_name="production")
naas.storage.create(workspace_id="123", storage_name="data-lake")
```

See [Python SDK documentation](/development/client-sdks/python) for complete examples.

### 3. Protocol Buffer Integration

For service communication using [naas-models](https://github.com/jupyter-naas/naas-models):

```python
# gRPC service integration
from naas_models import service_pb2
from naas_models import service_pb2_grpc

# Use generated protocol buffer classes
request = service_pb2.ServiceRequest()
response = client.ServiceMethod(request)
```

## Multi-Language Support

The naas-models repository provides bindings for:
- **Python**: `pip install naas-models`  
- **Go**: Generated Go packages
- **gRPC**: Service definitions for any gRPC-compatible language

## Development Status

- ✅ **ABI API**: Fully functional local development
- ✅ **naas-python SDK**: Working infrastructure management  
- ✅ **naas-models**: Protocol definitions (v1.27.1)
- ❓ **Central API Gateway**: Status unclear, verify before integration

For production integrations, start with the working ABI API and naas-python SDK.

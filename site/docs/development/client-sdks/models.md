---
sidebar_position: 3
---

# naas-models

Protocol buffer definitions and multi-language bindings for Naas platform services, from the [naas-models repository](https://github.com/jupyter-naas/naas-models).

## Overview

**naas-models** provides type-safe service definitions using Protocol Buffers for:
- **gRPC Service Communication**: Cross-language service integration
- **Multi-language Support**: Python, Go, and other language bindings
- **Version Management**: Semantic versioning with 54+ releases
- **Type Safety**: Compile-time validation of service contracts

## Installation

### Python
```bash
pip install naas-models
```

### Go
```bash
go get github.com/jupyter-naas/naas-models/go/github.com/jupyter-naas/naas-models
```

## Repository Structure

Based on the actual [repository structure](https://github.com/jupyter-naas/naas-models):

```
naas-models/
├── protos/           # Protocol buffer definitions
├── python/           # Generated Python packages  
├── go/              # Generated Go packages
├── lib/             # Common libraries
└── .docker/         # Docker build environment
```

## Protocol Buffer Integration

### Service Definitions

```protobuf
// Example service definition
service PlatformService {
  rpc CreateSpace(CreateSpaceRequest) returns (CreateSpaceResponse);
  rpc GetSpace(GetSpaceRequest) returns (GetSpaceResponse);
  rpc ListSpaces(ListSpacesRequest) returns (ListSpacesResponse);
}

message CreateSpaceRequest {
  string name = 1;
  string workspace_id = 2;
  map<string, string> metadata = 3;
}

message CreateSpaceResponse {
  string space_id = 1;
  string status = 2;
}
```

### Python Integration

```python
# Import generated protocol buffer classes
from naas_models import platform_pb2
from naas_models import platform_pb2_grpc

# Create gRPC client
import grpc

channel = grpc.insecure_channel('localhost:50051')
client = platform_pb2_grpc.PlatformServiceStub(channel)

# Create request
request = platform_pb2.CreateSpaceRequest(
    name="production",
    workspace_id="workspace-123",
    metadata={"environment": "prod", "team": "platform"}
)

# Make service call
response = client.CreateSpace(request)
print(f"Space created: {response.space_id}")
```

### Go Integration

```go
package main

import (
    "context"
    "log"
    
    pb "github.com/jupyter-naas/naas-models/go/github.com/jupyter-naas/naas-models"
    "google.golang.org/grpc"
)

func main() {
    // Connect to gRPC service
    conn, err := grpc.Dial("localhost:50051", grpc.WithInsecure())
    if err != nil {
        log.Fatal(err)
    }
    defer conn.Close()
    
    // Create client
    client := pb.NewPlatformServiceClient(conn)
    
    // Create request
    request := &pb.CreateSpaceRequest{
        Name:        "production",
        WorkspaceId: "workspace-123",
        Metadata: map[string]string{
            "environment": "prod",
            "team":        "platform",
        },
    }
    
    // Make service call
    response, err := client.CreateSpace(context.Background(), request)
    if err != nil {
        log.Fatal(err)
    }
    
    log.Printf("Space created: %s", response.SpaceId)
}
```

## Development Workflow

### Local Development

```bash
# Clone repository
git clone https://github.com/jupyter-naas/naas-models.git
cd naas-models

# Generate language bindings
make generate

# Build packages
make build

# Run tests
make test
```

### Docker Development

```bash
# Use Docker for consistent build environment
docker-compose up --build

# Generate bindings in Docker
docker-compose run generator make generate
```

## Multi-Language Support

The repository provides bindings for:

- **Python**: Full package with pip installation
- **Go**: Go modules with proper imports
- **gRPC**: Service definitions for any gRPC-compatible language
- **Future**: TypeScript, Java, Rust bindings as needed

## Version Management

**Current Status**:
- **Latest Release**: v1.27.1
- **Total Releases**: 54 releases
- **License**: AGPL-3.0
- **Primary Language**: Python 94.2%

**Semantic Versioning**:
- **Major**: Breaking protocol changes
- **Minor**: New service definitions  
- **Patch**: Bug fixes and improvements

## Integration with naas-python

The naas-python SDK uses naas-models for type-safe service communication:

```python
import naas_python as naas
from naas_models import service_definitions

# The SDK internally uses protocol buffer definitions
# for communication with platform services
space_result = naas.space.add(space_name="production")
```

## Service Communication Patterns

### Synchronous gRPC

```python
import grpc
from naas_models import platform_pb2_grpc

# Direct gRPC service calls
with grpc.insecure_channel('platform-service:50051') as channel:
    client = platform_pb2_grpc.PlatformServiceStub(channel)
    response = client.CreateSpace(request)
```

### Asynchronous Communication

```python
import asyncio
import grpc.aio
from naas_models import platform_pb2_grpc

async def create_space_async():
    async with grpc.aio.insecure_channel('platform-service:50051') as channel:
        client = platform_pb2_grpc.PlatformServiceStub(channel)
        response = await client.CreateSpace(request)
        return response
```

## Repository & Contributing

**Repository**: [jupyter-naas/naas-models](https://github.com/jupyter-naas/naas-models)
- **Stars**: 3⭐ on GitHub
- **Forks**: 0 forks  
- **Issues**: 3 open issues
- **Pull Requests**: 1 open PR

**Contributing**:
1. Fork the repository
2. Create protocol buffer definitions in `protos/`
3. Run `make generate` to create language bindings
4. Test across supported languages
5. Submit pull request with semantic versioning

The naas-models repository is essential for type-safe platform integration across multiple programming languages.

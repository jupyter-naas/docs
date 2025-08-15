---
sidebar_position: 1
---

# Python SDK

The official Python SDK for managing cloud-native applications and infrastructure through Naas services, from the [naas-python repository](https://github.com/jupyter-naas/naas-python).

## Overview

**naas-python** is built using hexagonal (ports and adapters) architecture and provides:
- **Space Operations**: Manage cloud environments
- **Storage Operations**: Handle data storage and assets
- **Asset Management**: Create and manage application assets

## Installation

```bash
# Install from PyPI
pip install naas-python

# Or with Poetry
poetry add naas-python
```

## Quick Start

### As a Library

```python
import naas_python as naas

# Space operations
naas.space.add(space_name="my-space")

# Storage operations  
naas.storage.create(workspace_id="123", storage_name="my-storage")

# Asset operations
naas.asset.create(workspace_id="123", asset_creation=asset_data)
```

### Command Line Interface

```bash
# Space operations
naas-python space add --name my-space

# Storage operations
naas-python storage create --workspace-id 123 --name my-storage

# Asset operations
naas-python asset create --workspace-id 123 --data asset_data.json
```

## Development

### Dependencies

Based on the actual [pyproject.toml](https://github.com/jupyter-naas/naas-python):

```toml
[tool.poetry.dependencies]
python = "^3.9"
typer = { extras = ["all"], version = "^0.9.0" }
requests = "^2.31.0"
cachetools = "^5.3.1"
jinja2 = "^3.0.1"
naas-models = "^1.11.2"
grpcio = "^1.60.0"
pydash = "^7.0.7"
boto3 = "^1.34.128"
pydantic = "<2.9"
```

### Local Development

```bash
# Clone repository
git clone https://github.com/jupyter-naas/naas-python.git
cd naas-python

# Install with Poetry
poetry install

# Run tests
make test
```

## Architecture

The SDK uses **hexagonal (ports and adapters) architecture** for clean separation of concerns:

- **Domain Layer**: Core business logic
- **Application Layer**: Use cases and workflows  
- **Infrastructure Layer**: External integrations (API, storage, etc.)
- **Ports**: Interfaces for external communication
- **Adapters**: Concrete implementations of ports

## Error Handling

The SDK implements custom exceptions for different scenarios:

```python
from naas_python.exceptions import (
    AssetNotFound,
    AssetConflictError, 
    AssetRequestError,
    NaasException
)

try:
    naas.asset.create(workspace_id="123", asset_creation=data)
except AssetNotFound:
    print("Asset not found")
except AssetConflictError:
    print("Asset already exists")
except AssetRequestError as e:
    print(f"Request error: {e}")
```

## Testing

The SDK includes comprehensive tests using pytest:

```python
import pytest

def test_lib_add_import():
    import naas_python as naas
    
    # Test if naas.space.add is callable
    assert callable(naas.space.add)

def test_missing_keys_call():
    import naas_python as naas
    
    # Test error handling for missing parameters
    with pytest.raises(TypeError):
        naas.space.add()
```

### Git Hooks

Pre-commit hooks ensure code quality:

```bash
#!/bin/sh
# Execute the make target
make test

# Capture the exit status
STATUS=$?

# If tests fail, prevent commit
if [ $STATUS -ne 0 ]; then
    echo "Pre-commit hook failed: make test failed with status $STATUS"
    exit $STATUS
fi

exit 0
```

## Repository & License

**Repository**: [jupyter-naas/naas-python](https://github.com/jupyter-naas/naas-python)
- **License**: AGPL-3.0
- **Status**: 4⭐ on GitHub
- **Language**: Python 99.4%
- **Latest Release**: v1.4.2

**Semantic Release**: Automated versioning with conventional commits

Contribute by forking the repository and submitting pull requests.


# Naas Documentation

Universal Data & AI Platform for building AI assistants and automating business workflows.

**🚀 [Get Started](https://docs.naas.ai)** | **🔧 [API Docs](https://api.naas.ai/redoc)** | **💬 [Community](https://join.slack.com/t/naas-club/shared_invite/zt-1970s5rie-dXXkigAdEJYc~LPdQIEaLA)**

## Quick Start

1. **Try the Platform**: [naas.ai](https://naas.ai) - No installation required
2. **Install CLI**: `pip install naas` 
3. **Build Custom Agents**: See [development guides](https://docs.naas.ai/development)

## Documentation Development

This documentation is synchronized with the actual Naas codebase to ensure accuracy and completeness.

### Updating Codebase References

To sync with the latest changes from all Naas repositories:

```bash
cd codebases && ./update_codebases.sh
```

Or use the make target:

```bash
make update-codebases
```

This script updates the following repositories:
- **abi** - Agentic Brain Infrastructure (AI Operating System)
- **workspace** - React-based Web Application  
- **naas-python** - Python SDK & CLI Tools
- **chrome-extension** - Browser Integration
- **naas-models** - Protocol Definitions & Model Management
- **naas-api-ce** - Community Edition API Gateway
- **credits-api** - Billing & Usage Management System

The codebases are stored in `codebases/` and excluded from version control via `.gitignore`.
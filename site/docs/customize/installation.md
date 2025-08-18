---
sidebar_position: 1
slug: /customize
---

# ABI Installation

Install ABI (Agentic Brain Infrastructure) locally for development, customization, and full control over your AI applications.

## What is ABI?

**ABI is your local AI development framework** - the open source core that powers the Naas platform. While the cloud platform gives you immediate access to AI capabilities, ABI lets you:

🔧 **Customize everything** - Build custom agents for your specific needs  
🏠 **Run locally** - Keep sensitive data on your infrastructure  
⚙️ **Full control** - Modify, extend, and integrate however you want  
🚀 **Open source** - Complete transparency and community contributions  

Think of ABI as the **CLI and development framework** that complements the cloud platform experience.

## When to Use ABI

### ✅ Use ABI When You Need:
- **Custom AI agents** for specific business processes
- **Local data processing** for sensitive information
- **Deep customization** of AI behavior and tools
- **Offline capabilities** without internet dependency
- **Full control** over AI models and data
- **Development environment** for building platform integrations

### 🌐 Use Cloud Platform When You Need:
- **Quick start** without any setup
- **Team collaboration** and sharing
- **Managed infrastructure** and scaling
- **Browser-based interface** for non-technical users
- **Immediate productivity** with pre-built agents

Most users start with the [cloud platform](/get-started/quickstart) and add ABI for customization later.

## Prerequisites

Before installing ABI, ensure you have:

- **[Docker Desktop](https://www.docker.com/products/docker-desktop/)** - Required for Oxigraph triple store
- **[uv](https://docs.astral.sh/uv/getting-started/installation/)** - Modern Python package manager
- **Python 3.11+** - For running ABI components
- **Git** - For cloning repositories

Optional but recommended:
- **[Naas Platform Account](https://naas.ai)** - For cloud storage and publishing

## Installation Options

Choose the approach that best fits your needs:

### 1. Clone Repository (Recommended)
Best for: Exploring ABI and following tutorials

```bash
git clone https://github.com/jupyter-naas/abi.git
cd abi
```

### 2. Fork Repository  
Best for: Contributing back to the project

```bash
# 1. Fork via GitHub UI: https://github.com/jupyter-naas/abi/fork
# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/abi.git
cd abi
```

### 3. Private Fork
Best for: Private customization with upstream sync

```bash
# 1. Create private repository via GitHub UI
# 2. Clone your private repository
git clone https://github.com/YOUR-USERNAME/abi-private.git
cd abi-private

# 3. Add upstream for updates
git remote add upstream https://github.com/jupyter-naas/abi.git
git pull --rebase upstream main
git push
```

## Environment Setup

### 1. Configure Environment Variables

Copy the example environment file:
```bash
cp .env.example .env
```

Edit `.env` with your preferred editor and configure:

**AI Model Providers** (at least one required):
```bash
# OpenAI (recommended for getting started)
OPENAI_API_KEY=sk-your-openai-api-key

# Anthropic Claude
ANTHROPIC_API_KEY=your-anthropic-api-key

# Google Gemini  
GOOGLE_API_KEY=your-google-api-key

# Mistral
MISTRAL_API_KEY=your-mistral-api-key
```

**Optional Cloud Integration**:
```bash
# Naas Platform integration (optional)
NAAS_API_URL=https://api.naas.ai
NAAS_API_TOKEN=your-naas-token

# Local vs Cloud AI mode
AI_MODE=cloud  # or 'local' for Ollama
```

💡 **Tip**: The `.env` file should never be committed to version control as it contains sensitive credentials.

### 2. Configure Project Settings

Copy the configuration template:
```bash
cp config.yaml.example config.yaml
```

Edit `config.yaml` to customize your installation:

```yaml
# Project identification
workspace_id: "your-workspace-id"  # From naas.ai/account/settings
github_project_repository: "your-username/your-abi-project"
github_support_repository: "your-username/your-abi-project" 
github_project_id: 12  # GitHub project number

# Storage configuration
triple_store_path: "storage/triplestore"
storage_name: "your-project-abi"
space_name: "your-project-abi"

# API documentation
api_title: "Your Project ABI API"
api_description: "Custom ABI instance for your organization"
logo_path: "assets/logo.png"
favicon_path: "assets/favicon.ico"
```

## Quick Start

### Start Your First Agent

Once configured, start chatting with the core ABI agent:

```bash
make chat-abi-agent
```

This command will:
1. **Set up the environment** and install Python dependencies
2. **Start Docker services** (Oxigraph triple store)
3. **Initialize the knowledge graph** with base ontologies
4. **Launch the interactive agent** in your terminal

The first run may take a few minutes as it downloads and starts the Oxigraph Docker container.

### Expected Output

You should see something like:
```
🚀 Starting ABI Agent...
🐳 Starting Oxigraph triple store...
🧠 Initializing knowledge graph...
💬 ABI Agent ready! Type your message below:

ABI Agent: Hello! I'm your ABI agent. I can help you with:
- Building custom AI agents
- Managing ontologies and knowledge graphs  
- Creating integrations with external services
- Developing workflows and pipelines

What would you like to work on today?

You: 
```

## Verification

### Test Core Functionality

Try these commands to verify your installation:

```bash
# Test agent interaction
echo "What agents are available?" | make chat-abi-agent-prompt

# Test API server (in another terminal)
make api
# Then visit http://localhost:8000/docs

# Test knowledge graph
make chat-ontology-agent
```

### Check Services

Verify Docker services are running:
```bash
docker ps
```

You should see the Oxigraph container running on port 7878.

### Browse Documentation

Access the local API documentation:
```bash
make api
# Visit http://localhost:8000/docs for interactive API docs
```

## Next Steps

Now that ABI is installed, explore its capabilities:

### 🤖 **Explore Built-in Agents**
```bash
# Chat with different specialized agents
make chat-growth-agent
make chat-finance-agent  
make chat-content-agent
```

### 🧠 **Learn the Ontology System**
```bash
# Explore the knowledge graph
make chat-ontology-agent
```

### 🔧 **Build Your First Custom Agent**
Follow our guide: [Creating Custom Agents](/customize/agents)

### 🔗 **Add Integrations**
Connect to external services: [Integration Development](/customize/integrations)

### 📊 **Create Workflows**
Automate complex processes: [Workflow Development](/customize/workflows)

## Development Tools

ABI includes comprehensive development tools:

### Available Make Commands
```bash
# Core functionality
make chat-abi-agent          # Main agent interface
make api                     # Start API server
make setup                   # Install dependencies

# Agent testing
make chat-{agent-name}       # Chat with specific agents
make test-agents             # Run agent tests

# Development
make lint                    # Code linting
make format                  # Code formatting
make test                    # Run test suite

# Ontology management
make ontology-update         # Update knowledge graph
make ontology-backup         # Backup ontologies

# Publishing
make publish-module          # Publish to marketplace
make docker-build           # Build Docker images
```

### Development Workflow
1. **Modify agents** in `src/modules/`
2. **Test changes** with `make test-agents`
3. **Update ontologies** if needed
4. **Publish modules** to share with others

## Troubleshooting

### Common Issues

**Docker not running?**
```bash
# Start Docker Desktop and verify
docker --version
docker ps
```

**Python dependencies failing?**
```bash
# Ensure uv is installed and updated
uv --version
uv self update

# Clean and reinstall
rm -rf .venv
make setup
```

**Oxigraph connection errors?**
```bash
# Check if container is running
docker ps | grep oxigraph

# Restart if needed
docker-compose down
docker-compose up -d oxigraph
```

**Agent not responding?**
```bash
# Check environment variables
cat .env | grep API_KEY

# Verify API key validity
curl -H "Authorization: Bearer $OPENAI_API_KEY" \
     https://api.openai.com/v1/models
```

### Getting Help

**Documentation**:
- [ABI Repository](https://github.com/jupyter-naas/abi) - Full documentation
- [Agent Development](/customize/agents) - Creating custom agents
- [Integration Guides](/customize/integrations) - Connecting external services

**Community Support**:
- [GitHub Discussions](https://github.com/jupyter-naas/abi/discussions) - Community Q&A
- [Slack](https://naas-club.slack.com) - Real-time community chat

**Direct Support**:
- Email: [support@naas.ai](mailto:support@naas.ai)
- Create issue: [GitHub Issues](https://github.com/jupyter-naas/abi/issues)

## Updating ABI

Keep your ABI installation current:

### Regular Updates
```bash
# Pull latest changes
git pull origin main

# Update dependencies
make setup

# Restart services
make chat-abi-agent
```

### For Private Forks
```bash
# Sync with upstream
git fetch upstream
git rebase upstream/main
git push origin main

# Update dependencies
make setup
```

Your ABI installation is now ready! Start building custom AI solutions that integrate perfectly with the broader Naas platform ecosystem.

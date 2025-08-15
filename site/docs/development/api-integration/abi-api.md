---
sidebar_position: 2
---

# ABI API Integration

The Agentic Brain Infrastructure (ABI) API provides direct access to the AI operating system from the [ABI repository](https://github.com/jupyter-naas/abi).

## Overview

**ABI** is an organizational multi-agent system that uses ontologies to unify data, AI models, and workflows. The API provides access to:

- **Multi-AI Agents**: ChatGPT, Claude, Gemini, Grok, Llama, Mistral, DeepSeek agents
- **Ontology Management**: SPARQL queries and semantic data operations  
- **Workflows**: Complex business process automation
- **Pipelines**: Data processing and transformation

## Setup & Authentication

**Local Installation**:
```bash
git clone https://github.com/jupyter-naas/abi.git
cd abi

# Setup environment variables
cp .env.example .env
# Add your API keys: OPENAI_API_KEY, ANTHROPIC_API_KEY, etc.

# Run API server
make api
```

**Authentication**:
```bash
# Set your ABI API key
export ABI_API_KEY="your_api_key"

# Test connection (default port 9879)
curl -H "Authorization: Bearer $ABI_API_KEY" \
     http://localhost:9879/docs
```

## Available Agents

ABI provides multiple AI agents, each specialized for different use cases:

### Core Agents
- **ABI Agent**: Smart routing across all AI models with ontology integration
- **ChatGPT Agent**: GPT-4o powered agent with web search capabilities  
- **Claude Agent**: Claude 3.5 Sonnet for complex reasoning
- **Gemini Agent**: Google's Gemini 2.0/2.5 Flash models
- **Grok Agent**: X.AI's Grok-4 for real-time insights
- **Llama Agent**: Meta's Llama 3.3 70B model
- **Mistral Agent**: Mistral Large 2 for European compliance
- **DeepSeek Agent**: DeepSeek R1 for reasoning tasks

### Agent Execution

**Chat with ABI Agent** (smart routing):
```bash
curl -X POST \
     -H "Authorization: Bearer $ABI_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "message": "Analyze customer data and recommend next actions"
     }' \
     http://localhost:9879/agents/abi/chat
```

**Chat with Specific Agent**:
```bash
# Claude for complex analysis
curl -X POST \
     -H "Authorization: Bearer $ABI_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "message": "Explain quantum computing concepts"
     }' \
     http://localhost:9879/agents/claude/chat

# ChatGPT with web search
curl -X POST \
     -H "Authorization: Bearer $ABI_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "message": "What are the latest developments in AI?"
     }' \
     http://localhost:9879/agents/chatgpt/chat
```

## Workflows & Pipelines

ABI supports complex workflow automation and data pipelines:

### Available Workflows
- **Agent Recommendation**: Intelligently route requests to optimal AI models
- **Artificial Analysis**: Multi-step analytical workflows  
- **Image Generation & Storage**: AI image creation with ontology storage
- **Pull Request Description**: Automated code documentation

### Workflow Execution
```bash
# Execute agent recommendation workflow
curl -X POST \
     -H "Authorization: Bearer $ABI_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "workflow": "agent_recommendation",
       "input": {
         "query": "I need to analyze financial data",
         "context": "quarterly_reports"
       }
     }' \
     http://localhost:9879/workflows/execute

# Image generation workflow  
curl -X POST \
     -H "Authorization: Bearer $ABI_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "workflow": "image_generation_storage",
       "input": {
         "prompt": "Create a data visualization chart",
         "style": "professional"
       }
     }' \
     http://localhost:9879/workflows/execute
```

### Available Pipelines
- **AI Agent Ontology Generation**: Automatically create semantic models
- **Image URL to Asset**: Process and store image resources
- **Ontology Entity Processing**: Handle semantic data transformations

### Pipeline Execution
```bash
# Execute ontology generation pipeline
curl -X POST \
     -H "Authorization: Bearer $ABI_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "pipeline": "ai_agent_ontology_generation",
       "input": {
         "domain": "sales_analytics",
         "entities": ["Customer", "Product", "Transaction"]
       }
     }' \
     http://localhost:9879/pipelines/execute

# Image processing pipeline
curl -X POST \
     -H "Authorization: Bearer $ABI_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "pipeline": "image_url_to_asset",
       "input": {
         "image_url": "https://example.com/chart.png",
         "metadata": {"type": "visualization", "category": "analytics"}
       }
     }' \
     http://localhost:9879/pipelines/execute
```

## Python Integration

Based on the actual [ABI repository](https://github.com/jupyter-naas/abi) structure:

```python
import requests
import json

class ABIClient:
    def __init__(self, api_key, base_url="http://localhost:9879"):
        self.api_key = api_key
        self.base_url = base_url
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
    
    def chat_with_agent(self, agent_name, message):
        """Chat with a specific ABI agent"""
        response = requests.post(
            f"{self.base_url}/agents/{agent_name}/chat",
            headers=self.headers,
            json={"message": message}
        )
        return response.json()
    
    def execute_workflow(self, workflow_name, input_data):
        """Execute an ABI workflow"""
        response = requests.post(
            f"{self.base_url}/workflows/{workflow_name}/execute",
            headers=self.headers,
            json={"input": input_data}
        )
        return response.json()
    
    def run_pipeline(self, pipeline_name, input_data):
        """Run an ABI pipeline"""
        response = requests.post(
            f"{self.base_url}/pipelines/{pipeline_name}/execute", 
            headers=self.headers,
            json={"input": input_data}
        )
        return response.json()

# Usage examples
client = ABIClient("your_abi_api_key")

# Smart agent routing
abi_response = client.chat_with_agent("abi", 
    "Analyze this sales data and recommend actions")

# Specific AI model
claude_response = client.chat_with_agent("claude",
    "Explain machine learning concepts for beginners")

# Complex workflow
workflow_result = client.execute_workflow("agent_recommendation", {
    "query": "I need financial analysis",
    "context": "quarterly_earnings"
})

# Data pipeline
pipeline_result = client.run_pipeline("ai_agent_ontology_generation", {
    "domain": "customer_analytics",
    "entities": ["Customer", "Purchase", "Product"]
})
```

### JavaScript Integration
```javascript
class ABIClient {
    constructor(apiKey, baseURL = 'http://localhost:9879') {
        this.apiKey = apiKey;
        this.baseURL = baseURL;
    }

    async chatWithAgent(agentName, message) {
        const response = await fetch(`${this.baseURL}/agents/${agentName}/chat`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        return response.json();
    }

    async executeWorkflow(workflowName, inputData) {
        const response = await fetch(`${this.baseURL}/workflows/${workflowName}/execute`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input: inputData })
        });
        return response.json();
    }
}

// Usage
const client = new ABIClient('your_abi_api_key');

// Chat with different agents
const abiResult = await client.chatWithAgent('abi', 
    'What AI model should I use for financial analysis?');

const chatgptResult = await client.chatWithAgent('chatgpt',
    'Research the latest trends in renewable energy');

// Execute workflows
const workflowResult = await client.executeWorkflow('image_generation_storage', {
    prompt: 'Create a professional business chart',
    style: 'corporate'
});
```

## Local Development

### Installation Requirements

1. **Clone Repository**: `git clone https://github.com/jupyter-naas/abi.git`
2. **Python 3.11+**: Required for ABI framework
3. **AI Model API Keys**: Add to `.env` file
   - `OPENAI_API_KEY`: For ChatGPT agents
   - `ANTHROPIC_API_KEY`: For Claude agents  
   - `GOOGLE_API_KEY`: For Gemini agents
   - `XAI_API_KEY`: For Grok agents
   - `MISTRAL_API_KEY`: For Mistral agents

### Running Different Agents

```bash
# Smart routing agent (recommended)
make chat-abi-agent

# Specific AI models
make chat-chatgpt-agent    # GPT-4o
make chat-claude-agent     # Claude 3.5 Sonnet  
make chat-gemini-agent     # Gemini 2.0/2.5
make chat-grok-agent       # Grok-4
make chat-llama-agent      # Llama 3.3 70B
make chat-mistral-agent    # Mistral Large 2

# Start API server
make api                   # Runs on port 9879
```

## API Documentation

When running locally, access the interactive API documentation:

- **Swagger UI**: `http://localhost:9879/docs`
- **ReDoc**: `http://localhost:9879/redoc`
- **OpenAPI Schema**: `http://localhost:9879/openapi.json`

## Ontology Integration

ABI uses **Basic Formal Ontology (BFO)** standards for semantic data management:

- **Entity Management**: Automatic ontology generation for business entities
- **SPARQL Queries**: Semantic data retrieval and analysis
- **Relationship Mapping**: Connect data across different domains
- **Standards Compliance**: ISO/IEC 21838-2:2021 (BFO) and ISO/IEC 42001:2023 (AI Management)

## Repository & Development

**Core Repository**: [jupyter-naas/abi](https://github.com/jupyter-naas/abi)
- **License**: MIT
- **Version**: ABI-OS1 Beta  
- **Status**: 62⭐ on GitHub
- **Language**: Python 96.7%

**Research Collaboration**:
- University at Buffalo
- National Center for Ontological Research (NCOR)
- Forvis Mazars (governance & risk management)

For local development and self-hosted deployment, see the [ABI installation guide](/customize/installation).

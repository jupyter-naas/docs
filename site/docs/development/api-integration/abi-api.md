---
sidebar_position: 2
---

# ABI API Integration

The Agentic Brain Infrastructure (ABI) API provides direct access to the AI engine powering the Naas platform.

## Overview

**ABI** is the core AI operating system that manages:
- **AI Agent execution** and orchestration
- **Knowledge graph** operations and SPARQL queries
- **Data pipeline** processing and transformations
- **Workflow automation** and scheduling

## Authentication

```bash
# Set your ABI API key
export ABI_API_KEY="your_abi_api_key"

# Test connection
curl -H "Authorization: Bearer $ABI_API_KEY" \
     -H "Content-Type: application/json" \
     https://abi-api.naas.ai/v1/health
```

## Core Endpoints

### Agent Operations

**Execute Agent**
```bash
curl -X POST \
     -H "Authorization: Bearer $ABI_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "agent_id": "analyst",
       "input": "Analyze Q4 sales data and identify trends",
       "context": {
         "data_source": "sales_db",
         "format": "summary"
       }
     }' \
     https://abi-api.naas.ai/v1/agents/execute
```

**Create Custom Agent**
```bash
curl -X POST \
     -H "Authorization: Bearer $ABI_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Data Scientist",
       "system_prompt": "You are an expert data scientist specializing in statistical analysis and machine learning.",
       "tools": ["python", "sql", "visualization"],
       "knowledge_base": "data_science_kb"
     }' \
     https://abi-api.naas.ai/v1/agents
```

### Knowledge Graph Operations

**SPARQL Query**
```bash
curl -X POST \
     -H "Authorization: Bearer $ABI_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "query": "SELECT ?entity ?property ?value WHERE { ?entity ?property ?value } LIMIT 10",
       "format": "json"
     }' \
     https://abi-api.naas.ai/v1/sparql
```

**Insert Knowledge**
```bash
curl -X POST \
     -H "Authorization: Bearer $ABI_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "triples": [
         {
           "subject": "company:sales_2024",
           "predicate": "naas:hasValue", 
           "object": "2500000"
         }
       ]
     }' \
     https://abi-api.naas.ai/v1/knowledge/insert
```

### Data Pipeline Operations

**Create Pipeline**
```bash
curl -X POST \
     -H "Authorization: Bearer $ABI_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Sales Analysis Pipeline",
       "steps": [
         {
           "type": "data_extraction",
           "source": "postgres://sales_db",
           "query": "SELECT * FROM sales WHERE date >= current_date - interval 30 days"
         },
         {
           "type": "ai_analysis", 
           "agent": "analyst",
           "prompt": "Analyze sales trends and generate insights"
         },
         {
           "type": "output",
           "format": "report",
           "destination": "s3://reports/sales/"
         }
       ]
     }' \
     https://abi-api.naas.ai/v1/pipelines
```

**Execute Pipeline**
```bash
curl -X POST \
     -H "Authorization: Bearer $ABI_API_KEY" \
     https://abi-api.naas.ai/v1/pipelines/{pipeline_id}/execute
```

## Integration Examples

### Python Integration
```python
import requests
import json

class ABIClient:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://abi-api.naas.ai/v1"
        self.headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }
    
    def execute_agent(self, agent_id, input_text, context=None):
        """Execute an ABI agent with input"""
        payload = {
            "agent_id": agent_id,
            "input": input_text,
            "context": context or {}
        }
        
        response = requests.post(
            f"{self.base_url}/agents/execute",
            headers=self.headers,
            json=payload
        )
        
        return response.json()
    
    def sparql_query(self, query):
        """Execute SPARQL query against knowledge graph"""
        payload = {"query": query, "format": "json"}
        
        response = requests.post(
            f"{self.base_url}/sparql",
            headers=self.headers, 
            json=payload
        )
        
        return response.json()

# Usage
client = ABIClient("your_abi_api_key")

# Execute agent
result = client.execute_agent(
    "analyst", 
    "What are the key insights from our sales data?"
)

# Query knowledge graph
data = client.sparql_query("""
    SELECT ?company ?revenue WHERE {
        ?company naas:hasRevenue ?revenue .
        FILTER(?revenue > 1000000)
    }
""")
```

### JavaScript Integration
```javascript
class ABIClient {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://abi-api.naas.ai/v1';
    }

    async executeAgent(agentId, input, context = {}) {
        const response = await fetch(`${this.baseURL}/agents/execute`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                agent_id: agentId,
                input: input,
                context: context
            })
        });

        return response.json();
    }

    async sparqlQuery(query) {
        const response = await fetch(`${this.baseURL}/sparql`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: query,
                format: 'json'
            })
        });

        return response.json();
    }
}

// Usage
const client = new ABIClient('your_abi_api_key');

// Execute agent
const result = await client.executeAgent(
    'analyst',
    'Analyze customer churn patterns'
);
```

## WebSocket Streaming

For real-time agent responses:

```javascript
const ws = new WebSocket('wss://abi-api.naas.ai/v1/stream');

ws.onopen = function() {
    // Authenticate
    ws.send(JSON.stringify({
        type: 'auth',
        token: 'your_abi_api_key'
    }));
    
    // Execute streaming agent
    ws.send(JSON.stringify({
        type: 'agent_execute',
        agent_id: 'analyst',
        input: 'Generate a detailed market analysis report',
        stream: true
    }));
};

ws.onmessage = function(event) {
    const data = JSON.parse(event.data);
    
    if (data.type === 'agent_chunk') {
        // Handle streaming response chunks
        console.log(data.content);
    }
    
    if (data.type === 'agent_complete') {
        // Agent finished execution
        console.log('Analysis complete:', data.result);
    }
};
```

## Rate Limits & Pricing

- **Development**: 100 API calls/hour (free)
- **Production**: Based on compute usage
- **Enterprise**: Custom limits and SLA

## Error Codes

```json
{
  "error": {
    "code": "AGENT_NOT_FOUND",
    "message": "The specified agent does not exist",
    "details": {
      "agent_id": "invalid_agent",
      "available_agents": ["analyst", "writer", "researcher"]
    }
  }
}
```

Common error codes:
- `INVALID_API_KEY`: Authentication failed
- `RATE_LIMIT_EXCEEDED`: Too many requests
- `AGENT_EXECUTION_FAILED`: Agent runtime error
- `INVALID_SPARQL_QUERY`: Malformed SPARQL syntax

## Repository & Development

**Core Repository**: [abi](https://github.com/jupyter-naas/abi)

For local development and self-hosted deployment, see the [ABI installation guide](/customize/installation).

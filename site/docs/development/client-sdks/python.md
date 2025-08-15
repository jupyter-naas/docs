---
sidebar_position: 1
---

# Python SDK

The official Python SDK for building applications with the Naas platform.

## Installation

```bash
pip install naas
```

## Quick Start

```python
import naas

# Initialize client
client = naas.Client(api_key="your_api_key")

# Create an AI agent
agent = client.agents.create(
    name="Data Analyst",
    prompt="You are an expert data analyst. Help analyze datasets and provide insights."
)

# Use the agent
result = agent.complete("Analyze this sales data and find trends")
print(result.content)
```

## Authentication

```python
# Method 1: Environment variable
import os
os.environ['NAAS_API_KEY'] = 'your_api_key'
client = naas.Client()

# Method 2: Direct initialization
client = naas.Client(api_key="your_api_key")

# Method 3: Config file
client = naas.Client.from_config('~/.naas/config.yaml')
```

## Core Features

### Agent Management
```python
# List all agents
agents = client.agents.list()

# Get specific agent
agent = client.agents.get("agent_id")

# Update agent
agent.update(prompt="Updated system prompt")

# Delete agent
agent.delete()
```

### Data Operations
```python
# Upload data
dataset = client.data.upload("sales_data.csv")

# Query data
results = client.data.query("SELECT * FROM sales WHERE amount > 1000")

# Process with AI
insights = client.agents.analyze(dataset, prompt="Find key trends")
```

### Workflow Automation
```python
# Create workflow
workflow = client.workflows.create({
    "name": "Daily Report",
    "schedule": "0 9 * * *",  # Every day at 9 AM
    "steps": [
        {"type": "data_fetch", "source": "database"},
        {"type": "ai_analysis", "agent": "analyst"},
        {"type": "email_send", "to": "team@company.com"}
    ]
})

# Execute workflow
result = workflow.execute()
```

## CLI Tools

The SDK includes a command-line interface:

```bash
# Login
naas login

# List agents
naas agents list

# Create agent
naas agents create --name "Assistant" --prompt "You are helpful"

# Run agent
naas agents run "agent_id" --input "Hello world"

# Upload data
naas data upload sales.csv

# Start workflow
naas workflows start daily-report
```

## Error Handling

```python
from naas.exceptions import NaasAPIError, RateLimitError

try:
    result = client.agents.complete("prompt")
except RateLimitError as e:
    print(f"Rate limit exceeded. Reset at: {e.reset_time}")
except NaasAPIError as e:
    print(f"API error: {e.message}")
```

## Advanced Usage

### Custom Integrations
```python
# Extend agent with custom tools
@naas.tool
def get_weather(location: str) -> str:
    """Get current weather for a location"""
    # Your weather API integration
    return f"Weather in {location}: Sunny, 75°F"

agent = client.agents.create(
    name="Weather Assistant",
    tools=[get_weather]
)
```

### Streaming Responses
```python
# Stream agent responses
for chunk in client.agents.stream("Tell me a story"):
    print(chunk.content, end="")
```

## Repository

**Development**: [naas-python](https://github.com/jupyter-naas/naas-python)

Contribute to the SDK or report issues on GitHub.

---
sidebar_position: 1
---

# API Gateway Integration

The Naas API Gateway is your primary interface for building applications and integrations with the platform.

## Quick Start

### Authentication

```bash
# Get your API token from Settings → API Keys
curl -H "Authorization: Bearer YOUR_TOKEN" \
     -H "Content-Type: application/json" \
     https://api.naas.ai/v1/health
```

### Base URL
```
Production: https://api.naas.ai
Development: https://dev-api.naas.ai
```

## Core Endpoints

### AI Completions
```bash
curl -H "Authorization: Bearer YOUR_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"prompt": "Hello world", "agent": "universal"}' \
     https://api.naas.ai/v1/completion
```

### Agent Management
```bash
# List available agents
curl -H "Authorization: Bearer YOUR_TOKEN" \
     https://api.naas.ai/v1/agents

# Create custom agent
curl -X POST \
     -H "Authorization: Bearer YOUR_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"name": "My Agent", "prompt": "You are a helpful assistant"}' \
     https://api.naas.ai/v1/agents
```

### Data Integration
```bash
# Upload data
curl -X POST \
     -H "Authorization: Bearer YOUR_TOKEN" \
     -F "file=@data.csv" \
     https://api.naas.ai/v1/data/upload

# Query data
curl -H "Authorization: Bearer YOUR_TOKEN" \
     "https://api.naas.ai/v1/data/query?q=SELECT * FROM my_table"
```

## Integration Patterns

### Webhook Integration
```python
import requests

def process_naas_webhook(data):
    """Handle incoming webhook from Naas platform"""
    if data['event'] == 'agent.completed':
        result = data['result']
        # Process the AI agent result
        return {"status": "processed"}
```

### Real-time Updates
```javascript
const ws = new WebSocket('wss://api.naas.ai/v1/stream');

ws.onmessage = function(event) {
    const data = JSON.parse(event.data);
    // Handle real-time updates from agents
};
```

## Rate Limits

- **Free Tier**: 1,000 requests/month
- **Pro Plan**: 100,000 requests/month  
- **Enterprise**: Custom limits

## Error Handling

```json
{
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Monthly quota exceeded",
    "details": {
      "limit": 1000,
      "used": 1000,
      "reset_date": "2024-09-01T00:00:00Z"
    }
  }
}
```

## SDK Support

For easier integration, use our official SDKs:
- [Python SDK](/development/client-sdks/python)
- [JavaScript SDK](/development/client-sdks/chrome-extension)

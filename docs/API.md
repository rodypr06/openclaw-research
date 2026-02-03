# API Documentation

This document provides comprehensive API reference for integrating with OpenClaw.

## Table of Contents

1. [Overview](#overview)
2. [Authentication](#authentication)
3. [REST API](#rest-api)
4. [WebSocket API](#websocket-api)
5. [SDK Reference](#sdk-reference)
6. [Error Handling](#error-handling)
7. [Rate Limiting](#rate-limiting)

## Overview

OpenClaw provides two primary API interfaces:

- **REST API**: HTTP-based API for request-response interactions
- **WebSocket API**: Real-time bidirectional communication
- **SDK**: Language-specific libraries for easy integration

### Base URLs

- **Production**: `https://api.openclaw.ai/v1`
- **Staging**: `https://staging-api.openclaw.ai/v1`
- **Development**: `http://localhost:3000/v1`

## Authentication

### API Token Authentication

Include your API token in the `Authorization` header:

```http
Authorization: Bearer YOUR_API_TOKEN
```

### Generating API Tokens

```bash
# Using CLI
openclaw token create --name "My App"

# Response
Token created: ocl_live_xxxxxxxxxxxxxxxx
```

### Token Types

- **Live Tokens**: Start with `ocl_live_` (production use)
- **Test Tokens**: Start with `ocl_test_` (development only)

### OAuth 2.0

OpenClaw supports OAuth 2.0 for third-party applications:

1. Register your application
2. Get client ID and secret
3. Redirect users to authorization URL
4. Exchange authorization code for access token

**Authorization Endpoint**: `https://auth.openclaw.ai/authorize`
**Token Endpoint**: `https://auth.openclaw.ai/token`

## REST API

### Endpoints

#### 1. Agents

##### List Agents
```http
GET /agents
```

**Response**:
```json
{
  "agents": [
    {
      "id": "main",
      "name": "Main Agent",
      "type": "assistant",
      "status": "active",
      "capabilities": ["conversation", "task_delegation"]
    },
    {
      "id": "coder",
      "name": "Coder Agent",
      "type": "specialist",
      "status": "idle",
      "capabilities": ["code_generation", "debugging"]
    }
  ]
}
```

##### Get Agent Details
```http
GET /agents/{agentId}
```

##### Send Message to Agent
```http
POST /agents/{agentId}/messages
```

**Request Body**:
```json
{
  "message": "Hello, how can you help me?",
  "context": {
    "userId": "user123",
    "sessionId": "session456"
  }
}
```

**Response**:
```json
{
  "id": "msg789",
  "agentId": "main",
  "response": "I can help you with various tasks...",
  "metadata": {
    "modelUsed": "gpt-4",
    "latency": 1250,
    "tokensUsed": 150
  }
}
```

#### 2. Skills

##### List Skills
```http
GET /skills
```

**Response**:
```json
{
  "skills": [
    {
      "id": "browser",
      "name": "Browser Control",
      "version": "1.2.0",
      "status": "available"
    },
    {
      "id": "search",
      "name": "Web Search",
      "version": "2.0.1",
      "status": "available"
    }
  ]
}
```

##### Execute Skill
```http
POST /skills/{skillId}/execute
```

**Request Body**:
```json
{
  "action": "search",
  "parameters": {
    "query": "OpenClaw AI framework",
    "maxResults": 10
  }
}
```

#### 3. Sessions

##### Create Session
```http
POST /sessions
```

**Request Body**:
```json
{
  "userId": "user123",
  "metadata": {
    "client": "web-dashboard",
    "version": "1.0.0"
  }
}
```

**Response**:
```json
{
  "sessionId": "sess_abc123",
  "userId": "user123",
  "createdAt": "2026-02-02T21:59:00Z",
  "expiresAt": "2026-02-03T21:59:00Z"
}
```

##### Get Session
```http
GET /sessions/{sessionId}
```

##### Delete Session
```http
DELETE /sessions/{sessionId}
```

## WebSocket API

### Connection

```javascript
const ws = new WebSocket('wss://gateway.openclaw.ai/ws');

// Authentication
ws.send(JSON.stringify({
  type: 'auth',
  token: 'YOUR_API_TOKEN'
}));
```

### Message Format

All WebSocket messages follow this structure:

```typescript
interface WSMessage {
  id: string;
  type: 'request' | 'response' | 'event' | 'error';
  payload: any;
  timestamp: number;
}
```

### Message Types

#### Request
```json
{
  "id": "req_123",
  "type": "request",
  "payload": {
    "action": "message",
    "agentId": "main",
    "message": "Hello!"
  }
}
```

#### Response
```json
{
  "id": "req_123",
  "type": "response",
  "payload": {
    "response": "Hi there!",
    "metadata": {...}
  }
}
```

#### Event
```json
{
  "id": "evt_456",
  "type": "event",
  "payload": {
    "eventType": "agent_status",
    "agentId": "main",
    "status": "active"
  }
}
```

#### Error
```json
{
  "id": "req_123",
  "type": "error",
  "payload": {
    "code": "AUTH_FAILED",
    "message": "Invalid or expired token"
  }
}
```

### Supported Actions

- `message`: Send a message to an agent
- `skill_execute`: Execute a skill
- `session_create`: Create a new session
- `session_close`: Close an existing session

## SDK Reference

### JavaScript/TypeScript

```typescript
import { OpenClaw } from '@openclaw/sdk';

const client = new OpenClaw({
  apiKey: 'YOUR_API_TOKEN',
  baseURL: 'https://api.openclaw.ai/v1'
});

// Send message
const response = await client.agents.sendMessage('main', {
  message: 'Hello, OpenClaw!'
});

console.log(response.response);
```

### Python

```python
from openclaw import Client

client = Client(api_key="YOUR_API_TOKEN")

# Send message
response = client.agents.send_message(
    agent_id="main",
    message="Hello, OpenClaw!"
)

print(response.response)
```

### Go

```go
import "github.com/openclaw/openclaw-go"

client := openclaw.NewClient("YOUR_API_TOKEN")

// Send message
response, err := client.Agents.SendMessage("main", "Hello, OpenClaw!")
if err != nil {
    log.Fatal(err)
}

fmt.Println(response.Response)
```

## Error Handling

### Error Response Format

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {
      "field": "additional context"
    }
  }
}
```

### Common Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `AUTH_FAILED` | 401 | Invalid or expired authentication |
| `PERMISSION_DENIED` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `AGENT_UNAVAILABLE` | 503 | Agent is temporarily unavailable |
| `SKILL_FAILED` | 500 | Skill execution failed |
| `INVALID_REQUEST` | 400 | Invalid request parameters |

### Handling Errors

```javascript
try {
  const response = await client.agents.sendMessage('main', {...});
} catch (error) {
  if (error.code === 'RATE_LIMIT_EXCEEDED') {
    // Implement backoff
    await sleep(5000);
    retry();
  } else {
    // Log and handle error
    console.error(error.message);
  }
}
```

## Rate Limiting

### Default Limits

| Plan | Requests/Minute | Requests/Day |
|------|-----------------|--------------|
| Free | 60 | 1,000 |
| Pro | 600 | 10,000 |
| Enterprise | 6,000 | Unlimited |

### Rate Limit Headers

Every API response includes rate limit information:

```http
X-RateLimit-Limit: 600
X-RateLimit-Remaining: 599
X-RateLimit-Reset: 1706957400
```

### Exponential Backoff

When rate limited, implement exponential backoff:

```javascript
async function makeRequestWithRetry(request, maxRetries = 3) {
  let retryCount = 0;
  
  while (retryCount < maxRetries) {
    try {
      return await request();
    } catch (error) {
      if (error.code === 'RATE_LIMIT_EXCEEDED') {
        const delay = Math.pow(2, retryCount) * 1000;
        await sleep(delay);
        retryCount++;
      } else {
        throw error;
      }
    }
  }
  
  throw new Error('Max retries exceeded');
}
```

## Best Practices

1. **Use WebSockets** for real-time interactions
2. **Cache responses** when appropriate
3. **Implement retries** with exponential backoff
4. **Monitor rate limits** to avoid disruptions
5. **Use the appropriate agent** for each task
6. **Close sessions** when no longer needed
7. **Validate input** before sending to API
8. **Handle errors gracefully** with user-friendly messages

---

For more information, see our [architecture documentation](ARCHITECTURE.md) or [research papers](RESEARCH.md).

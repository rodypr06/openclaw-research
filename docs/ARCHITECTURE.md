# Architecture Documentation

This document provides a comprehensive overview of the OpenClaw system architecture.

## Table of Contents

1. [Overview](#overview)
2. [System Components](#system-components)
3. [Data Flow](#data-flow)
4. [Security Model](#security-model)
5. [Deployment Architecture](#deployment-architecture)
6. [Scalability Considerations](#scalability-considerations)

## Overview

OpenClaw uses a modular, layered architecture designed for flexibility, security, and scalability.

```
┌─────────────────────────────────────────────────────────┐
│                    User Interface Layer                   │
│  (Web Dashboard | CLI Tools | REST API | WebSocket)      │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                      Gateway Layer                      │
│  (Message Router | Session Management | Auth | Rate Limit)│
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                      Agent Layer                        │
│  (Main Agent | Specialist Agents | Coder | Security)    │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                     Skills Layer                        │
│  (Browser | Files | Search | System | Custom Plugins)   │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                     Model Layer                         │
│  (OpenAI | Claude | Local Ollama | Model Router)       │
└─────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────┐
│                  Storage & State Layer                  │
│  (File System | Vector DB | Context Memory | Settings)  │
└─────────────────────────────────────────────────────────┘
```

## System Components

### 1. User Interface Layer

#### Web Dashboard
- **Technology**: React + Vite
- **Purpose**: Primary interface for web users
- **Features**: Widget-based UI, real-time updates, interactive terminal

#### CLI Tools
- **Technology**: Node.js
- **Purpose**: Command-line interface for power users
- **Features**: Command completion, scriptable output, configuration management

#### REST API
- **Technology**: Express.js
- **Purpose**: HTTP-based API for external integrations
- **Endpoints**: `/api/v1/*` namespace

#### WebSocket
- **Technology**: ws library
- **Purpose**: Real-time bidirectional communication
- **Use Cases**: Live updates, streaming responses

### 2. Gateway Layer

#### Message Router
```javascript
interface Message {
  id: string;
  type: 'request' | 'response' | 'event';
  source: string;
  target: string;
  timestamp: number;
  payload: any;
}
```

**Responsibilities**:
- Route messages to appropriate agents
- Handle message queuing and delivery
- Implement priority queues for urgent requests
- Manage message acknowledgments

#### Session Management
- **Session Duration**: 24 hours default
- **Storage**: In-memory with periodic persistence
- **Cleanup**: Expired sessions removed every hour

#### Authentication
- **Methods**: API tokens, OAuth 2.0, JWT
- **Token Storage**: Encrypted database
- **Token Expiration**: Configurable (default: 7 days)

#### Rate Limiting
- **Strategy**: Token bucket algorithm
- **Default Limits**: 100 requests/minute per user
- **Burst Allowance**: Up to 200 requests in a burst

### 3. Agent Layer

#### Main Agent
- **Role**: Primary conversational agent
- **Capabilities**: General conversation, task delegation, coordination
- **Model**: Primary LLM (GPT-4 or Claude)

#### Specialist Agents
- **Research Agent**: Information gathering and analysis
- **Coder Agent**: Code generation and debugging
- **Security Agent**: Security checks and compliance
- **Creative Agent**: Content generation and ideation

**Agent Communication Protocol**:
```
1. Main Agent receives user request
2. Main Agent analyzes and determines if delegation needed
3. Main Agent forwards request to specialist agent
4. Specialist agent processes and returns result
5. Main Agent integrates result and responds to user
```

### 4. Skills Layer

#### Skill Interface
```typescript
interface Skill {
  name: string;
  version: string;
  description: string;
  execute: (context: SkillContext) => Promise<SkillResult>;
  permissions: string[];
}

interface SkillContext {
  userId: string;
  sessionId: string;
  input: any;
  tools: ToolRegistry;
}

interface SkillResult {
  success: boolean;
  data: any;
  error?: string;
  metadata?: Record<string, any>;
}
```

#### Built-in Skills
- **Browser**: Web page control and interaction
- **Files**: File system operations
- **Search**: Web search and information retrieval
- **System**: System commands and monitoring
- **Database**: Data persistence and querying

#### Custom Skills
Skills can be added as plugins:
1. Create skill directory in `skills/`
2. Implement skill interface
3. Register skill in `skills/index.json`
4. Restart gateway

### 5. Model Layer

#### Model Router
The model router intelligently routes requests to the best model:

```javascript
function selectModel(request) {
  // High security tasks → Local model
  if (request.requiresPrivacy) {
    return 'ollama';
  }
  
  // Complex reasoning → GPT-4/Claude
  if (request.complexity > 0.8) {
    return 'gpt-4';
  }
  
  // Fast responses → Smaller model
  if (request.priority === 'urgent') {
    return 'gpt-3.5-turbo';
  }
  
  // Default → Claude
  return 'claude-3';
}
```

#### Supported Models
- **OpenAI**: GPT-4, GPT-3.5-turbo
- **Anthropic**: Claude 3 Opus, Claude 3 Sonnet
- **Local**: Ollama (hermes3, llama2, etc.)

### 6. Storage & State Layer

#### File System
- **User Workspace**: `/users/{userId}/workspace/`
- **Shared Resources**: `/shared/`
- **Temporary Files**: `/tmp/` (cleaned daily)

#### Vector Database
- **Purpose**: Semantic search and retrieval
- **Technology**: Pinecone or Chroma
- **Indexing**: Automatic for documents and code

#### Context Memory
- **Short-term**: In-memory, recent conversation
- **Long-term**: Persistent database, user preferences
- **Compression**: Automatic summarization of old context

## Data Flow

### Typical Request Flow

```
1. User → Web Dashboard
       ↓
2. Dashboard → Gateway (WebSocket)
       ↓
3. Gateway → Auth (Validate)
       ↓
4. Gateway → Main Agent (Route)
       ↓
5. Main Agent → Model Router (Select Model)
       ↓
6. Model Router → LLM API (Inference)
       ↓
7. LLM API → Model Router (Response)
       ↓
8. Model Router → Main Agent (Result)
       ↓
9. Main Agent → Skills (Execute if needed)
       ↓
10. Skills → Main Agent (Tool Result)
        ↓
11. Main Agent → Gateway (Final Response)
        ↓
12. Gateway → Dashboard (WebSocket)
        ↓
13. Dashboard → User (Display)
```

## Security Model

### Defense in Depth

OpenClaw implements security at every layer:

1. **Transport Layer**: TLS 1.3 for all connections
2. **Authentication Layer**: Multi-factor auth for sensitive operations
3. **Authorization Layer**: RBAC (Role-Based Access Control)
4. **Application Layer**: Input validation, output encoding
5. **Data Layer**: Encryption at rest, field-level encryption for sensitive data

### Sandbox Model

Agent executions run in sandboxed environments:

```javascript
const sandbox = {
  filesystem: 'isolated',
  network: 'restricted',
  process: 'containerized',
  resources: 'limited'
};
```

### Security Audit Trail

All actions are logged with:
- Timestamp
- User ID
- Agent ID
- Action performed
- Resources accessed
- Success/Failure status

## Deployment Architecture

### Development Environment
```
┌────────────────────────────────────┐
│    Developer Workstation           │
│  ┌──────────────────────────────┐ │
│  │   Vite Dev Server (5173)     │ │
│  └──────────────────────────────┘ │
│           │                       │
│           ▼                       │
│  ┌──────────────────────────────┐ │
│  │   OpenClaw Gateway (18789)   │ │
│  └──────────────────────────────┘ │
└────────────────────────────────────┘
```

### Production Environment
```
┌─────────────────────────────────────────────────┐
│                Load Balancer                     │
└─────────────────────────────────────────────────┘
              │         │         │
              ▼         ▼         ▼
      ┌──────────┐ ┌──────────┐ ┌──────────┐
      │  Gateway │ │  Gateway │ │  Gateway │
      │  Node 1  │ │  Node 2  │ │  Node 3  │
      └──────────┘ └──────────┘ └──────────┘
              │         │         │
              └─────────┴─────────┘
                        │
                ┌───────┴───────┐
                ▼               ▼
          ┌──────────┐   ┌──────────┐
          │  Shared  │   │  Shared  │
          │   Cache  │   │ Database │
          └──────────┘   └──────────┘
```

## Scalability Considerations

### Horizontal Scaling
- **Stateless Services**: Gateway nodes are stateless
- **Shared Cache**: Redis for shared state
- **Database Sharding**: User data distributed across shards

### Vertical Scaling
- **Resource Allocation**: Agents can request more resources
- **Dynamic Scaling**: Auto-scale based on load
- **Priority Queues**: Important tasks get resources first

### Performance Targets
- **Response Time (P95)**: < 2 seconds
- **Throughput**: 10,000 requests/second per gateway node
- **Availability**: 99.9% uptime
- **Recovery Time**: < 5 minutes from failure

---

For more information, see our [API documentation](API.md) or [research papers](RESEARCH.md).

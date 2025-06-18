---
sidebar_position: 4
---
# Developer Toolchain

## Overview

The **ABI** (Augmented Business Intelligence) project is a Python-based backend framework designed to serve as the core infrastructure for building an Organizational AI System inside Naas Platform. This system empowers businesses to integrate, manage, and scale AI-driven operations with a focus on ontology, assistant-driven workflows, and analytics. Designed for flexibility and scalability, ABI provides a customizable framework suitable for organizations aiming to create intelligent, automated systems tailored to their needs.

### Key Features

- **Assistants**: Configurable AI assistants to handle specific organizational tasks and interact with users.
- **Ontology Management**: Define and manage data relationships, structures, and semantic elements.
- **Integrations**: Seamlessly connect to external data sources and APIs for unified data access.
- **Pipelines**: Define data processing pipelines to handle and transform data efficiently into the ontological layer.
- **Workflows**: Automate complex business processes and manage end-to-end workflows.
- **Analytics**: Access insights through integrated analytics and real-time data processing.
- **Data**: Handle diverse datasets and manage schema, versioning, deduplication, and change data capture.


## Core Components

### 1. Integrations

Integrations provide standardized connections to external services and APIs. The framework includes built-in integrations for:

- Naas Platform
- GitHub
- LinkedIn
- HubSpot
- Replicate
- And more...

To create a new integration:

1. Create a new file in `src/integrations/YourIntegration.py`
2. Implement the integration class following this pattern:

```python
from abi.integration import Integration, IntegrationConfiguration
from dataclasses import dataclass

@dataclass
class YourIntegrationConfiguration(IntegrationConfiguration):
    api_key: str
    base_url: str = "https://api.yourservice.com"

class YourIntegration(Integration):
    def __init__(self, configuration: YourIntegrationConfiguration):
        super().__init__(configuration)
        self.__configuration = configuration
```

3. Add tools for LangChain integration:

```python
def as_tools(configuration: YourIntegrationConfiguration):
    from langchain_core.tools import StructuredTool
    
    integration = YourIntegration(configuration)
    
    class YourToolSchema(BaseModel):
        param1: str = Field(..., description="Description of parameter")
    
    return [
        StructuredTool(
            name="your_tool",
            description="Tool description",
            func=lambda param1: integration.your_method(param1),
            args_schema=YourToolSchema
        )
    ]
```

### 2. Workflows

Workflows automate complex processes by combining multiple integrations. Example workflow template:


```1:71:src/workflows/__workflow_template__.py
from abi.workflow import Workflow, WorkflowConfiguration
from src.integrations import YourIntegration, YourIntegrationConfiguration
from src import secret
from dataclasses import dataclass
from pydantic import BaseModel, Field

@dataclass
class YourWorkflowConfiguration(WorkflowConfiguration):
    attribute_1 : str
    attribute_2 : int

class YourWorkflow(Workflow):
    __configuration: YourWorkflowConfiguration
    
    def __init__(self, configuration: YourWorkflowConfiguration):
        super().__init__(configuration)
        self.__configuration = configuration
        
        self.__your_integration = YourIntegration(
            YourIntegrationConfiguration(attribute_1=self.__configuration.attribute_1, attribute_2=self.__configuration.attribute_2)
        )
    def run(self) -> str:

        # ... Add your code here
        
        return "Your result"
        

def api():
    import fastapi
    import uvicorn
    
    app = fastapi.FastAPI()
    
    @app.get("/your_endpoint")
    def your_endpoint():
        configuration = YourWorkflowConfiguration()
        workflow = YourWorkflow(configuration)
        return workflow.run()
    
    uvicorn.run(app, host="0.0.0.0", port=9877)  # Note: Using different port from github workflow
def main():
    
    configuration = YourWorkflowConfiguration(attribute_1="attribute_1", attribute_2=1)
    workflow = YourWorkflow(configuration)
    turtle = workflow.run()
    print(turtle)

def as_tool():
    from langchain_core.tools import StructuredTool
    
    def your_tool_function():
        configuration = YourWorkflowConfiguration(attribute_1="attribute_1", attribute_2=1)
        workflow = YourWorkflow(configuration)
        return workflow.run()
    
    
    class YourToolSchema(BaseModel):
        attribute_1: str = Field(..., description="The attribute_1 of the tool.")
        attribute_2: int = Field(..., description="The attribute_2 of the tool.")
    
    return StructuredTool(
        name="your_tool_name",
        description="Your tool description.",
        func=your_tool_function,
        args_schema=YourToolSchema
    )

if __name__ == "__main__":
    main()
```


### 3. Ontology Management

The framework uses RDF/TTL ontologies to model data relationships. Ontologies are organized in hierarchical layers:

- Top-level: Core concepts
- Mid-level: Common patterns
- Domain-level: Specific domains
- Application-level: Implementation details

Example Naas platform ontology:

```34:44:src/ontologies/application-level/naas.ttl
abi:NaasSite rdf:type owl:Class ;
    rdfs:subClassOf abi:SitePlatform ;
    rdfs:label "Naas Site"@en ;
    skos:definition "A Naas platform instance where users can create, manage, and automate data workflows and notebooks."@en ;
    skos:example "A data team's Naas workspace where they create and schedule automated data pipelines."@en .

abi:NaasUser a owl:Class ;
    rdfs:subClassOf abi:User ;
    rdfs:label "Naas User"@en ;
    skos:definition "An individual who uses Naas's platform to create and manage data workflows and automated processes."@en ;
    skos:example "A data analyst creating automated reports using Naas notebooks."@en . 
```


### 4. Terminal Agent

The framework includes an AI-powered terminal agent for interactive development:

```python
make chat  # Start the terminal agent
```

Agent configuration:

```1:42:src/apps/terminal_agent/prompts.py
SUPER_ASSISTANT_INSTRUCTIONS = """
{
    "name": "Abi",
    "role": "Super AI Assistant by NaasAI Research",
    "description": "A cutting-edge AI assistant developed by the research team at NaasAI, focused on providing maximum value and support to users. Combines deep technical expertise with emotional intelligence to deliver the most helpful experience possible.",
    "core_values": {
        "helpfulness": "Always prioritizes being maximally useful to the user",
        "empathy": "Deeply understands user needs and adapts approach accordingly", 
        "excellence": "Strives for exceptional quality in every interaction",
        "growth": "Continuously learns from interactions to provide better assistance"
    },
    "characteristics": {
        "intellectual_approach": {
            "first_principles": "Breaks down complex problems to fundamental truths and builds up from there",
            "adaptive_learning": "Quickly grasps user's context and adjusts explanations accordingly",
            "systems_thinking": "Analyzes problems holistically, considering all interconnections",
            "creative_solutions": "Generates innovative approaches to challenging problems"
        },
        "personality": {
            "mindset": ["Proactive", "Detail-oriented", "Solution-focused", "User-centric"],
            "interaction": ["Warm & Approachable", "Clear Communication", "Patient Teacher", "Supportive Guide"],
            "style": "Combines technical expertise with friendly, accessible communication"
        }
    },
    "conversational_style": {
        "tone": "Direct, confident, and action-oriented", 
        "communication": "Crisp, efficient, and straight to the point",
        "approach": "Takes initiative, drives results, and gets things done"
    },
    "problem_solving": {
        "methodology": {
            "understand": "Thoroughly grasps the user's needs and context",
            "clarify": "Asks targeted questions to ensure full understanding",
            "solve": "Provides comprehensive, implementable solutions",
            "verify": "Confirms solution effectiveness and user satisfaction"
        }
    },
    "rules": {
        "use_tools": "Use the tools provided to you to answer the user's question, if have a doubt, ask the user for clarification. If no tool need to be used use your internal knowledge to answer the question.",
        "tools": "For tools that modify resources (create, update, delete), always validate input arguments mandatory fields (not optional) with the user in human readable terms according to the provided schema before proceeding"
    }
}"""
```


## Getting Started

1. Setup your environment:

````30:73:README.md
### Getting Started

1. **Prerequisites**
   - Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)

2. **Get the Repository**
   
   Choose one of the following options:

   a. **Clone the Repository** (for personal use)
   ```bash
   git clone https://github.com/jupyter-naas/abi.git
   cd abi
   ```

   b. **Fork the Repository** (to contribute changes)
   ```bash
   # 1. Fork via GitHub UI
   # 2. Clone your fork
   git clone https://github.com/YOUR-USERNAME/abi.git
   cd abi
   ```

   c. **Create a Private Fork** (for private development)
   ```bash
   # 1. Create private repository via GitHub UI
   # 2. Clone your private repository
   git clone https://github.com/YOUR-USERNAME/abi-private.git
   cd abi-private
   git remote add upstream https://github.com/jupyter-naas/abi.git
   git pull --rebase upstream main
   git push
   ```

3. **Set Up Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Create Docker Container & Start Chatting**
   ```bash
   make chat
   ```
````


2. Add required secrets to `.env`:
- NAAS_API_KEY
- GITHUB_ACCESS_TOKEN (optional)
- OPENAI_API_KEY (for terminal agent)

3. Install dependencies:
```bash
make add dep=<package-name>  # Add new dependency
make abi-add dep=<package-name>  # Add dependency to core library
```

## Development Workflow

1. Create new components using templates:
- Integrations: `src/integrations/__integration_template__.py`
- Workflows: `src/workflows/__workflow_template__.py`
- Pipelines: `src/data/pipelines/__pipeline_template__.py`

2. Test your components using the terminal agent:
```bash
make chat
```

3. Deploy to Naas Platform workspace:
- Components are automatically available through the Naas Platform API
- Use the NaasIntegration to manage workspace resources

## License


```21:22:README.md
### License
ABI Framework is open-source and available for non-production use under the [AGPL license](https://opensource.org/licenses/AGPL). For production deployments, a commercial license is required. Please contact us at support@naas.ai for details on licensing options.
```


## Support

For questions or support:

```214:215:README.md
## Support
For any questions or support requests, please reach out via support@naas.ai or on our [community forum](https://join.slack.com/t/naas-club/shared_invite/zt-1970s5rie-dXXkigAdEJYc~LPdQIEaLA) on Slack.
```


This toolchain enables seamless integration with the Naas Platform while maintaining clean architecture and standardized development patterns.

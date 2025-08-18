---
sidebar_position: 2
---

# LangGraph Foundation

LangGraph provides the core state management and workflow orchestration for Naas agents. This framework enables complex, multi-step AI applications that can reason, use tools, and maintain context across interactions.

## State Machine Architecture

LangGraph implements a sophisticated state machine that manages the flow between AI model reasoning and tool execution:

```mermaid
stateDiagram-v2
    [*] --> AgentNode
    AgentNode --> ToolNode : Tool Required
    AgentNode --> End : Task Complete
    ToolNode --> AgentNode : Tool Result
    ToolNode --> MemoryCheckpoint : Store State
    MemoryCheckpoint --> AgentNode
    
    state AgentNode {
        [*] --> ProcessMessage
        ProcessMessage --> GenerateResponse
        GenerateResponse --> CheckToolCalls
        CheckToolCalls --> [*]
    }
    
    state ToolNode {
        [*] --> ValidateInputs
        ValidateInputs --> ExecuteTool
        ExecuteTool --> FormatOutput
        FormatOutput --> [*]
    }
```

**The state machine ensures:**
- **Reliable Execution**: Each step is tracked and can be resumed if interrupted
- **Tool Integration**: Seamless handoff between AI reasoning and external tool execution
- **Context Preservation**: State is maintained across the entire workflow
- **Error Recovery**: Failed operations can be retried or routed to alternative paths

## Core Agent Creation Pattern

Every Naas agent follows a standardized creation pattern that ensures consistency and maintainability:

```python
from langchain_openai import ChatOpenAI
from abi.services.agent.Agent import Agent, AgentConfiguration, AgentSharedState, MemorySaver

def create_agent(agent_shared_state=None, agent_configuration=None) -> Agent:
    """
    Standard pattern for creating Naas agents with LangGraph integration.
    
    This pattern ensures all agents have consistent:
    - Model configuration
    - Tool integration
    - Memory management
    - State handling
    """
    
    # Configure the underlying LLM model
    model = ChatOpenAI(
        model="gpt-4o", 
        temperature=0,  # Deterministic responses
        api_key=secret.get('OPENAI_API_KEY')
    )
    
    # Initialize tools and sub-agents
    tools = []
    agents = []
    
    # Configure agent behavior and prompts
    if agent_configuration is None:
        agent_configuration = AgentConfiguration(
            system_prompt=SYSTEM_PROMPT,
            max_iterations=10,
            timeout_seconds=30
        )
    
    # Set up shared state for multi-agent coordination
    if agent_shared_state is None:
        agent_shared_state = AgentSharedState(
            thread_id=generate_thread_id(),
            user_context={},
            conversation_history=[]
        )
    
    # Create the agent with memory persistence
    return BusinessAgent(
        name="Business Agent",
        chat_model=model,
        tools=tools,
        agents=agents,
        state=agent_shared_state,
        configuration=agent_configuration,
        memory=MemorySaver()  # Persistent conversation history
    )
```

## Agent Workflow Execution

The LangGraph framework orchestrates complex workflows through a series of nodes and edges:

```mermaid
graph TD
    START([Start]) --> INPUT[Receive Input]
    INPUT --> PARSE[Parse Request]
    PARSE --> ROUTE{Route Decision}
    
    ROUTE -->|Direct Answer| GENERATE[Generate Response]
    ROUTE -->|Need Tools| PLAN[Plan Tool Usage]
    ROUTE -->|Need Agent| DELEGATE[Delegate to Sub-Agent]
    
    PLAN --> EXECUTE[Execute Tools]
    EXECUTE --> INTEGRATE[Integrate Results]
    INTEGRATE --> GENERATE
    
    DELEGATE --> SUBAGENT[Sub-Agent Processing]
    SUBAGENT --> COLLECT[Collect Results]
    COLLECT --> GENERATE
    
    GENERATE --> VALIDATE[Validate Output]
    VALIDATE --> MEMORY[Store in Memory]
    MEMORY --> RESPONSE[Return Response]
    RESPONSE --> END([End])
    
    VALIDATE -->|Invalid| ROUTE
    
    style ROUTE fill:#e1f5fe
    style EXECUTE fill:#f3e5f5
    style SUBAGENT fill:#fff3e0
    style MEMORY fill:#e8f5e8
```

**Key workflow capabilities:**
- **Dynamic Routing**: Intelligent decision-making about how to handle each request
- **Tool Orchestration**: Coordinated execution of multiple tools in sequence or parallel
- **Sub-Agent Delegation**: Complex tasks can be broken down and delegated
- **Result Integration**: Multiple data sources and tool outputs are synthesized
- **Quality Validation**: Output validation before returning results to users

## Memory and State Management

LangGraph provides sophisticated memory management that enables agents to maintain context across interactions:

```python
from abi.services.agent.Agent import MemorySaver, AgentSharedState

class EnhancedMemoryAgent(Agent):
    """
    Agent with comprehensive memory management capabilities.
    """
    
    def __init__(self):
        # Initialize memory with persistence
        memory = MemorySaver(
            connection_string="postgresql://user:pass@localhost/agent_memory",
            table_name="conversation_checkpoints"
        )
        
        # Shared state for multi-agent coordination
        shared_state = AgentSharedState(
            thread_id=self.generate_thread_id(),
            user_context={
                "preferences": {},
                "history": [],
                "ontology_context": {}
            },
            conversation_history=[],
            tool_results_cache={}
        )
        
        super().__init__(
            name="Enhanced Memory Agent",
            memory=memory,
            state=shared_state
        )
    
    def remember_interaction(self, user_input, agent_response, tools_used):
        """
        Store interaction details for future reference.
        """
        interaction = {
            "timestamp": datetime.utcnow(),
            "user_input": user_input,
            "agent_response": agent_response,
            "tools_used": tools_used,
            "context": self.state.user_context
        }
        
        # Store in both short-term (conversation) and long-term (persistent) memory
        self.state.conversation_history.append(interaction)
        self.memory.store_checkpoint(self.state.thread_id, interaction)
    
    def retrieve_relevant_context(self, current_query):
        """
        Retrieve relevant context from previous interactions.
        """
        # Semantic search through conversation history
        relevant_interactions = self.memory.semantic_search(
            query=current_query,
            thread_id=self.state.thread_id,
            top_k=5
        )
        
        return relevant_interactions
```

## Error Handling and Recovery

Robust error handling ensures reliable agent operation even when external systems fail:

```mermaid
graph TD
    EXEC[Execute Action] --> CHECK{Success?}
    CHECK -->|Yes| SUCCESS[Return Result]
    CHECK -->|No| ERROR[Handle Error]
    
    ERROR --> TYPE{Error Type}
    TYPE -->|Retryable| RETRY[Retry with Backoff]
    TYPE -->|Tool Failure| ALTERNATE[Try Alternate Tool]
    TYPE -->|Agent Failure| FALLBACK[Fallback Strategy]
    TYPE -->|Critical| ESCALATE[Escalate to Human]
    
    RETRY --> COUNT{Retry Count}
    COUNT -->|< Max| EXEC
    COUNT -->|>= Max| ALTERNATE
    
    ALTERNATE --> AVAILABLE{Tool Available?}
    AVAILABLE -->|Yes| EXEC
    AVAILABLE -->|No| FALLBACK
    
    FALLBACK --> DEGRADE[Graceful Degradation]
    DEGRADE --> PARTIAL[Return Partial Result]
    
    SUCCESS --> MEMORY[Update Memory]
    PARTIAL --> MEMORY
    ESCALATE --> LOG[Log for Review]
    
    style ERROR fill:#ffebee
    style RETRY fill:#fff3e0
    style FALLBACK fill:#e8f5e8
    style ESCALATE fill:#fce4ec
```

```python
class ResilientAgent(Agent):
    """
    Agent with comprehensive error handling and recovery strategies.
    """
    
    def __init__(self):
        super().__init__()
        self.retry_config = {
            "max_retries": 3,
            "backoff_factor": 2,
            "retryable_errors": [ConnectionError, TimeoutError, RateLimitError]
        }
        self.fallback_tools = {}  # Mapping of primary to fallback tools
    
    async def execute_with_recovery(self, action, *args, **kwargs):
        """
        Execute action with automatic retry and fallback strategies.
        """
        last_error = None
        
        for attempt in range(self.retry_config["max_retries"]):
            try:
                result = await action(*args, **kwargs)
                
                # Log successful execution
                self.log_success(action.__name__, attempt)
                return result
                
            except Exception as error:
                last_error = error
                
                # Check if error is retryable
                if self._is_retryable_error(error):
                    backoff_time = self.retry_config["backoff_factor"] ** attempt
                    await asyncio.sleep(backoff_time)
                    continue
                else:
                    # Try fallback strategy
                    fallback_result = await self._try_fallback(action, error, *args, **kwargs)
                    if fallback_result is not None:
                        return fallback_result
                    break
        
        # All retries and fallbacks failed
        return await self._handle_critical_failure(action, last_error)
    
    def _is_retryable_error(self, error):
        """Check if error should trigger a retry."""
        return any(isinstance(error, error_type) 
                  for error_type in self.retry_config["retryable_errors"])
    
    async def _try_fallback(self, action, error, *args, **kwargs):
        """Attempt fallback strategy for failed action."""
        action_name = action.__name__
        
        if action_name in self.fallback_tools:
            fallback_action = self.fallback_tools[action_name]
            try:
                result = await fallback_action(*args, **kwargs)
                self.log_fallback_success(action_name, fallback_action.__name__)
                return result
            except Exception as fallback_error:
                self.log_fallback_failure(action_name, fallback_error)
        
        return None
    
    async def _handle_critical_failure(self, action, error):
        """Handle critical failures that couldn't be recovered."""
        error_context = {
            "action": action.__name__,
            "error": str(error),
            "timestamp": datetime.utcnow(),
            "agent_state": self.get_state_summary()
        }
        
        # Log for human review
        await self.escalate_to_human(error_context)
        
        # Return graceful degradation response
        return {
            "status": "partial_failure",
            "message": f"Unable to complete {action.__name__} due to technical issues. Human review requested.",
            "error_id": self.generate_error_id(),
            "fallback_suggestions": self.get_fallback_suggestions(action.__name__)
        }
```

## Performance Optimization

LangGraph agents can be optimized for high-performance, concurrent operations:

```python
import asyncio
from concurrent.futures import ThreadPoolExecutor
from dataclasses import dataclass

@dataclass
class PerformanceConfig:
    """Configuration for agent performance optimization."""
    max_concurrent_tools: int = 5
    tool_timeout_seconds: int = 30
    memory_cache_size: int = 1000
    batch_size: int = 10

class HighPerformanceAgent(Agent):
    """
    Optimized agent for high-throughput, low-latency operations.
    """
    
    def __init__(self, performance_config: PerformanceConfig = None):
        super().__init__()
        self.config = performance_config or PerformanceConfig()
        self.tool_pool = ThreadPoolExecutor(max_workers=self.config.max_concurrent_tools)
        self.memory_cache = LRUCache(maxsize=self.config.memory_cache_size)
    
    async def process_batch(self, requests: List[dict]) -> List[dict]:
        """
        Process multiple requests concurrently for improved throughput.
        """
        semaphore = asyncio.Semaphore(self.config.max_concurrent_tools)
        
        async def process_single_request(request):
            async with semaphore:
                return await self.process_request(request)
        
        # Process requests in batches to manage memory usage
        results = []
        for i in range(0, len(requests), self.config.batch_size):
            batch = requests[i:i + self.config.batch_size]
            batch_tasks = [process_single_request(req) for req in batch]
            batch_results = await asyncio.gather(*batch_tasks, return_exceptions=True)
            results.extend(batch_results)
        
        return results
    
    async def execute_tools_parallel(self, tool_calls: List[dict]) -> List[dict]:
        """
        Execute multiple tools in parallel when possible.
        """
        # Analyze dependencies between tool calls
        dependency_graph = self._build_dependency_graph(tool_calls)
        execution_stages = self._topological_sort(dependency_graph)
        
        results = {}
        
        # Execute tools stage by stage, with parallelism within stages
        for stage in execution_stages:
            stage_tasks = []
            
            for tool_call in stage:
                task = self._execute_tool_with_timeout(tool_call, results)
                stage_tasks.append(task)
            
            # Execute all tools in this stage concurrently
            stage_results = await asyncio.gather(*stage_tasks, return_exceptions=True)
            
            # Update results for next stage
            for tool_call, result in zip(stage, stage_results):
                results[tool_call['id']] = result
        
        return list(results.values())
```

This LangGraph foundation provides the robust, scalable architecture needed for enterprise-grade AI agent deployments while maintaining the flexibility for rapid development and customization.

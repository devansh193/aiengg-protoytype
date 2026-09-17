// ponytail: single hardcoded cohort, swap for a DB lookup keyed by `id` when there's more than one.

export type CohortWeek = {
  title: string;
  theory: string[];
  coding: string;
  tags: string[];
  resources: string[];
};

export type Cohort = {
  id: string;
  title: string;
  creatorNote: string;
  progress: {
    completed: number;
    total: number;
    attended: number;
    recordings: number;
  };
  weeks: CohortWeek[];
};

export const cohort: Cohort = {
  id: "rag-and-agents",
  title: "RAG and Agents",
  creatorNote:
    "Gaurav helped create this cohort but isn't teaching it live. Your instructor is Tanishq Singh, he is an alumnus of IIT-Madras specializing in AI/ML and a seasoned instructor.",
  progress: {
    completed: 5,
    total: 24,
    attended: 4,
    recordings: 12,
  },
  weeks: [
    {
      title: "Week 1: Terminology & Prerequisites",
      theory: [
        "Core LLM terminology: tokens, context window, parameters, attention mechanism",
        "How LLMs are trained: pre-training, post-training, and inference at runtime",
        "Embeddings & semantic similarity: turning text into vectors",
        "Prompting basics: system, user, few-shot",
        "Structured outputs and JSON formatting",
      ],
      coding:
        "Make your first LLM API calls, and compute cosine similarity from scratch",
      tags: ["LLMs", "Embeddings", "Tokens", "Prompts", "API Basics"],
      resources: [
        "Saturday - Live Class Recording",
        "Sunday - Live Class Recording",
        "Networking Hour - Recording",
        "Reading Material",
      ],
    },
    {
      title: "Week 2: RAG — Components & Architecture",
      theory: [
        "Why RAG exists: knowledge cutoff and hallucination problem",
        "The 5-stage RAG pipeline: ingest → chunk → embed → index → retrieve",
        "Chunking strategies and when to use each",
        "Embedding models: choosing the right one for your use case",
        "Vector databases & indexing algorithms (HNSW, IVF, PQ)",
      ],
      coding: "Build an end-to-end RAG pipeline with LangChain + ChromaDB.",
      tags: [
        "Chunking",
        "Embeddings",
        "vector DB",
        "HNSW",
        "Retrieval",
        "Augmentation",
      ],
      resources: [
        "Saturday - Live Class Recording",
        "Sunday - Live Class Recording",
        "Networking Hour - Recording",
      ],
    },
    {
      title: "Week 3: Advanced RAG",
      theory: [
        "Why naive RAG hits accuracy ceilings",
        "Query rewriting techniques: expansion, HyDE, multi-query",
        "Cross-encoder reranking: LLM-quality scoring after initial retrieval",
        "Metadata filtering and hybrid search (dense + sparse)",
        "Evals specific to RAG: faithfulness, answer relevance.",
      ],
      coding:
        "Apply advanced retrieval techniques to your Week 2 pipeline and benchmark accuracy improvements with an eval suite",
      tags: [
        "HyDE",
        "reranker",
        "query rewriting",
        "multi-vector",
        "Self-RAG",
      ],
      resources: [
        "Saturday - Live Class Recording",
        "Sunday - Live Class Recording",
        "Networking Hour - Recording",
      ],
    },
    {
      title: "Week 4: RAG Architectures & Specialised Types",
      theory: [
        "Common pitfalls in production RAG systems",
        "GraphRAG: knowledge graphs as retrieval backends",
        "KAG (Knowledge-Augmented Generation): structured KB + LLM",
        "Agentic RAG: LLM decides what to retrieve, when, and how",
        "Choosing the right architecture: a decision framework for selection",
      ],
      coding:
        "Build a GraphRAG system on a real use-case using Neo4j, and compare it against vanilla RAG",
      tags: ["GraphRAG", "Agentic RAG", "KAG", "Multimodal RAG", "LightRAG"],
      resources: [
        "Saturday - Live Class Recording",
        "Sunday - Live Class Recording",
        "Networking Hour - Recording",
      ],
    },
    {
      title: "Week 5: Single-Agent Systems",
      theory: [
        "What is an agent? LLM + tools + loop",
        "LLM vs. Agent: how to distinguish pipeline vs single api call",
        "Tool / function calling: how the LLM triggers Python functions",
        "The ReAct pattern: Reasoning → Acting → Observing",
        "Pydantic AI: type-safe agents with validated structured outputs",
      ],
      coding: "Build a single agent with tools, structured outputs, and basic guardrails.",
      tags: [
        "ReAct",
        "Tool Calling",
        "PydanticAI",
        "Prompt Engineering",
        "Structured Outputs",
      ],
      resources: [
        "Saturday - Live Class Recording",
        "Sunday - Live Class Recording",
        "Networking Hour - Recording",
      ],
    },
    {
      title: "Week 6: Multi-Agent Systems",
      theory: [
        "Why multi-agent? Parallelism, specialisation, separation of concerns",
        "Agentic design patterns: Orchestrator-Worker, Routing",
        "Problems unique to multi-agent: orchestration, information isolation, planning",
        "Memory systems for agents: short-term and long-term",
        "Cost and latency considerations in multi-agent systems",
      ],
      coding:
        "Build a research + writer + critic multi-agent pipeline in LangGraph with routing.",
      tags: [
        "LangGraph",
        "Multi Agent",
        "Orchestration",
        "Design patterns",
        "Routing",
      ],
      resources: [
        "Saturday - Live Class Recording",
        "Sunday - Live Class Recording",
        "Networking Hour - Recording",
      ],
    },
    {
      title: "Week 7: Context Engineering, Memory & Evaluation",
      theory: [
        "Context engineering vs. prompt engineering",
        "What goes in the context: instructions, tools, history, retrieved docs",
        "Quantitative Evals (accuracy, F1, exact match, tool-call accuracy)",
        "Qualitative evals with LLM-as-a-Judge: rubric design, single-answer grading.",
      ],
      coding:
        "Run a full eval suite on your Week 6 multi-agent pipeline with both quantitative and LLM-as-a-Judge evaluations",
      tags: [
        "Context Engineering",
        "Memory",
        "LLM-as-a-Judge",
        "Evals",
        "Observability",
      ],
      resources: [
        "Saturday - Live Class Recording",
        "Sunday - Live Class Recording",
        "Networking Hour - Recording",
      ],
    },
    {
      title: "Week 8: Capstone Project",
      theory: [
        "AI engineering best practices: from prototype to production",
        "Engineering decision framework: choosing RAG type, agent pattern, and stack",
        "How to scope a capstone: MVP definition, what to cut, what to keep",
        "Architecture reviews and 1:1 feedback on each project plan",
        "Presenting AI systems in interviews: structure, demo flow, eval results",
      ],
      coding:
        "Live capstone demos with peer Q&A, eval walkthroughs, and structured feedback",
      tags: ["Capstone", "Architecture design", "presentation", "portfolio"],
      resources: ["Saturday - Live Class Recording", "Sunday - Live Class Recording"],
    },
  ],
};

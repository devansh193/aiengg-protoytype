"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const weeks = [
  {
    n: "01",
    title: "Terminology & Prerequisites",
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
  },
  {
    n: "02",
    title: "RAG — Components & Architecture",
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
  },
  {
    n: "03",
    title: "Advanced RAG",
    theory: [
      "Why naive RAG hits accuracy ceilings",
      "Query rewriting techniques: expansion, HyDE, multi-query",
      "Cross-encoder reranking: LLM-quality scoring after initial retrieval",
      "Metadata filtering and hybrid search (dense + sparse)",
      "Evals specific to RAG: faithfulness, answer relevance.",
    ],
    coding:
      "Apply advanced retrieval techniques to your Week 2 pipeline and benchmark accuracy improvements with an eval suite",
    tags: ["HyDE", "reranker", "query rewriting", "multi-vector", "Self-RAG"],
  },
  {
    n: "04",
    title: "RAG Architectures & Specialised Types",
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
  },
  {
    n: "05",
    title: "Single-Agent Systems",
    theory: [
      "What is an agent? LLM + tools + loop",
      "LLM vs. Agent: how to distinguish pipeline vs single api call",
      "Tool / function calling: how the LLM triggers Python functions",
      "The ReAct pattern: Reasoning → Acting → Observing",
      "Pydantic AI: type-safe agents with validated structured outputs",
    ],
    coding:
      "Build a single agent with tools, structured outputs, and basic guardrails.",
    tags: [
      "ReAct",
      "Tool Calling",
      "PydanticAI",
      "Prompt Engineering",
      "Structured Outputs",
    ],
  },
  {
    n: "06",
    title: "Multi-Agent Systems",
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
  },
  {
    n: "07",
    title: "Context Engineering, Memory & Evaluation",
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
  },
  {
    n: "08",
    title: "Capstone Project",
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
  },
] as const;

export const CohortOutline = () => {
  return (
    <section className="w-full">
      <div className="flex w-full px-6">
        <div className="mx-auto w-full max-w-7xl border-x border-b border-white/20">
          <header className="flex flex-col items-center gap-4 border-b border-white/20 px-6 py-16 text-center">
            <p className="text-md text-violet-500">Cohort Outline</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              Eight weeks. Theory, then code.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/50">
              Gaurav helped create this cohort but isn&apos;t teaching it live.
              Your instructor is Tanishq Singh, an IIT-Madras alumnus
              specializing in AI/ML and a seasoned instructor.
            </p>
          </header>
          <Accordion type="single" collapsible defaultValue="01">
            {weeks.map((week) => (
              <AccordionItem
                key={week.n}
                value={week.n}
                className="border-white/20 px-0 data-[state=open]:bg-[#1B1B1B]"
              >
                <AccordionTrigger className="rounded-none px-6 py-6 hover:no-underline hover:bg-white/3">
                  <span className="flex min-w-0 flex-1 items-baseline gap-4">
                    <span className="font-mono text-sm text-violet-500">
                      {week.n}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-base font-medium text-white">
                        Week {Number(week.n)}: {week.title}
                      </span>
                      <span className="mt-2 hidden flex-wrap gap-1.5 sm:flex">
                        {week.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-white/15 px-2 py-0.5 text-[11px] rounded-sm font-normal text-white/50 bg-[#1B1B1B]"
                          >
                            {tag}
                          </span>
                        ))}
                      </span>
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-8">
                  <div className="grid gap-8 pl-10 md:grid-cols-2">
                    <div>
                      <p className="mb-3 text-[11px] font-medium tracking-[0.2em] text-white/40">
                        THEORY
                      </p>
                      <ul className="space-y-2 text-sm leading-relaxed text-white/60">
                        {week.theory.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-3 text-[11px] font-medium tracking-[0.2em] text-white/40">
                        CODING
                      </p>
                      <p className="text-sm leading-relaxed text-white/60">
                        {week.coding}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

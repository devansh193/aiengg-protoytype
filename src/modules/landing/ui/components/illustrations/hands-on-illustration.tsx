"use client";

import { FileCode, FolderOpen } from "lucide-react";
import { motion } from "motion/react";

const files = [
  { name: "retrieve.py", active: true },
  { name: "chunk.py" },
  { name: "rerank.py" },
];

const agents = [{ name: "react.py" }, { name: "tools.py" }];

function Typed({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.span
      className="inline-block overflow-hidden whitespace-nowrap align-bottom"
      initial={{ maxWidth: 0 }}
      animate={{ maxWidth: `${text.length}ch` }}
      transition={{
        duration: text.length * 0.05,
        delay,
        repeat: Infinity,
        repeatDelay: 2.4,
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  );
}

export function HandsOnIllustration() {
  return (
    <div aria-hidden className="mt-auto w-full pt-6">
      <div className="h-52 overflow-hidden border border-white/8 bg-neutral-950 sm:h-60">
        <div className="flex items-center gap-1.5 border-b border-white/8 px-3 py-2">
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="size-1.5 rounded-full bg-white/20" />
          <span className="ml-2 truncate font-mono text-[10px] text-white/30">
            retrieve.py
          </span>
        </div>

        <div className="flex h-[calc(100%-32px)]">
          <div className="w-[42%] shrink-0 border-r border-white/8 px-2 py-2">
            <p className="mb-1.5 px-1 text-[9px] font-medium tracking-wider text-white/25 uppercase">
              Explorer
            </p>
            <div className="mb-0.5 flex items-center gap-1 px-1 text-white/40">
              <FolderOpen className="size-3" />
              <span className="font-mono text-[10px]">rag</span>
            </div>
            {files.map((file) => (
              <div
                key={file.name}
                className={`ml-3 flex items-center gap-1 rounded px-1 py-0.5 ${
                  file.active ? "bg-blue-500/10 text-blue-400" : "text-white/35"
                }`}
              >
                <FileCode className="size-3 shrink-0" />
                <span className="truncate font-mono text-[10px]">
                  {file.name}
                </span>
              </div>
            ))}
            <div className="mt-1 mb-0.5 flex items-center gap-1 px-1 text-white/40">
              <FolderOpen className="size-3" />
              <span className="font-mono text-[10px]">agents</span>
            </div>
            {agents.map((file) => (
              <div
                key={file.name}
                className="ml-3 flex items-center gap-1 px-1 py-0.5 text-white/35"
              >
                <FileCode className="size-3 shrink-0" />
                <span className="truncate font-mono text-[10px]">
                  {file.name}
                </span>
              </div>
            ))}
          </div>

          <div className="min-w-0 flex-1 overflow-hidden px-2.5 py-2 font-mono text-[10px] leading-[18px]">
            <div>
              <span className="text-white/20">1</span>
              <span className="ml-2 text-blue-400">from</span>
              <span className="text-white/70"> openai </span>
              <span className="text-blue-400">import</span>
              <span className="text-white/70"> OpenAI</span>
            </div>
            <div>
              <span className="text-white/20">2</span>
            </div>
            <div>
              <span className="text-white/20">3</span>
              <span className="ml-2 text-blue-400">def</span>
              <span className="text-emerald-400"> retrieve</span>
              <span className="text-white/50">(query: str):</span>
            </div>
            <div>
              <span className="text-white/20">4</span>
              <span className="ml-2 text-white/70">
                {"    "}
                <Typed text="hits = db.search(query)" delay={0.2} />
              </span>
            </div>
            <div>
              <span className="text-white/20">5</span>
              <span className="ml-2 text-white/70">
                {"    "}
                <Typed text="return rerank(hits)" delay={1.6} />
                <span className="ml-px inline-block h-3 w-px translate-y-px bg-blue-400 align-middle animate-pulse" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "motion/react";

const messages = [
  {
    from: "you",
    text: "Stuck on chunk overlap — 128 or 256?",
  },
  {
    from: "them",
    name: "Priya",
    initials: "P",
    text: "128 first. Bump it if recall drops.",
  },
  {
    from: "them",
    name: "Tanishq",
    initials: "T",
    text: "Eval on 20 questions before you change it.",
  },
  {
    from: "you",
    text: "Capstone idea: RAG over support tickets?",
  },
  {
    from: "them",
    name: "Alex",
    initials: "A",
    text: "Solid first project. Start with one FAQ dump.",
  },
] as const;

const STEP = 0.85;
const TAIL = 2.4;
const CYCLE = STEP * messages.length + TAIL;

export function LiveGuidanceIllustration() {
  return (
    <div aria-hidden className="mt-auto w-full pt-6">
      <div className="flex h-52 flex-col overflow-hidden border border-white/8 bg-neutral-950 sm:h-60">
        <div className="flex items-center gap-2 border-b border-white/8 px-3 py-2">
          <div className="flex -space-x-1.5">
            {["P", "T", "A"].map((letter) => (
              <span
                key={letter}
                className="flex size-4 items-center justify-center rounded-full border border-neutral-950 bg-white/10 font-mono text-[8px] text-white/50"
              >
                {letter}
              </span>
            ))}
          </div>
          <span className="truncate text-[10px] font-medium text-white/40">
            Cohort chat
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-end gap-1.5 overflow-hidden px-2.5 py-2">
          {messages.map((msg, i) => {
            const on = (STEP * i) / CYCLE;
            const you = msg.from === "you";

            return (
              <motion.div
                key={msg.text}
                className={`flex max-w-[85%] items-end gap-1.5 ${you ? "ml-auto flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{
                  opacity: [0, 0, 1, 1, 0],
                  y: [8, 8, 0, 0, 0],
                }}
                transition={{
                  duration: CYCLE,
                  times: [0, on, on, 0.82, 1],
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              >
                {!you ? (
                  <span className="mb-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-white/10 font-mono text-[8px] text-white/50">
                    {msg.initials}
                  </span>
                ) : null}
                <div
                  className={`rounded-2xl px-2.5 py-1.5 text-[10px] leading-snug ${
                    you
                      ? "rounded-br-md bg-blue-500/15 text-blue-300"
                      : "rounded-bl-md bg-white/6 text-white/60"
                  }`}
                >
                  {!you ? (
                    <p className="mb-0.5 text-[8px] font-medium text-white/30">
                      {msg.name}
                    </p>
                  ) : null}
                  {msg.text}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

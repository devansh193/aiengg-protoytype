"use client";

import { BrainIcon, Database, Laptop, Search, UserIcon } from "lucide-react";
import { motion } from "motion/react";

const STEP = 1.4;
const GAP = 0.4;
const STEPS = 8;
const CYCLE = (STEP + GAP) * STEPS;

function Pulse({
  x1,
  y1,
  x2,
  y2,
  step,
  reverse,
}: {
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  step: number;
  reverse?: boolean;
}) {
  const on = ((STEP + GAP) * step) / CYCLE;
  const off = on + STEP / CYCLE;

  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="rgb(59,130,246)"
      strokeWidth="1.5"
      strokeLinecap="round"
      pathLength={1}
      strokeDasharray="0.25 1"
      animate={{
        strokeDashoffset: reverse ? [-1, -1, 0.25, 0.25] : [0.25, 0.25, -1, -1],
        opacity: [0, 0, 1, 1, 0, 0],
      }}
      transition={{
        strokeDashoffset: {
          duration: CYCLE,
          times: [0, on, off, 1],
          repeat: Infinity,
          ease: "linear",
        },
        opacity: {
          duration: CYCLE,
          times: [0, on, on, off, off, 1],
          repeat: Infinity,
          ease: "linear",
        },
      }}
    />
  );
}

export function ReliableSystemsIllustration() {
  return (
    <div aria-hidden className="pointer-events-none mt-auto w-full">
      <div
        className="relative h-52 w-full rounded-xl sm:h-60"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      >
        {/* Connecting lines */}
        <svg className="absolute inset-0 h-full w-full">
          {/* Search — App vertical */}
          <line
            x1="41%"
            y1="22%"
            x2="41%"
            y2="36%"
            stroke="#222"
            strokeWidth="1.5"
          />
          <line
            x1="43%"
            y1="22%"
            x2="43%"
            y2="36%"
            stroke="#222"
            strokeWidth="1.5"
          />
          {/* Query — App horizontal */}
          <line
            x1="10%"
            y1="48%"
            x2="40%"
            y2="48%"
            stroke="#222"
            strokeWidth="1.5"
          />
          <line
            x1="10%"
            y1="52%"
            x2="40%"
            y2="52%"
            stroke="#222"
            strokeWidth="1.5"
          />
          {/* Search — Knowledge horizontal */}
          <line
            x1="41%"
            y1="12%"
            x2="82%"
            y2="12%"
            stroke="#222"
            strokeWidth="1.5"
          />
          <line
            x1="41%"
            y1="16%"
            x2="82%"
            y2="16%"
            stroke="#222"
            strokeWidth="1.5"
          />
          {/* App — LLM vertical */}
          <line
            x1="41%"
            y1="64%"
            x2="41%"
            y2="92%"
            stroke="#222"
            strokeWidth="1.5"
          />
          <line
            x1="43%"
            y1="64%"
            x2="43%"
            y2="92%"
            stroke="#222"
            strokeWidth="1.5"
          />

          {/* 1. Query → App */}
          <Pulse x1="10%" y1="48%" x2="40%" y2="48%" step={0} />
          {/* 2. App → Search */}
          <Pulse x1="41%" y1="22%" x2="41%" y2="36%" step={1} reverse />
          {/* 3. Search → Knowledge */}
          <Pulse x1="41%" y1="12%" x2="82%" y2="12%" step={2} />
          {/* 4. Knowledge → Search */}
          <Pulse x1="41%" y1="16%" x2="82%" y2="16%" step={3} reverse />
          {/* 5. Search → App */}
          <Pulse x1="43%" y1="22%" x2="43%" y2="36%" step={4} />
          {/* 6. App → LLM */}
          <Pulse x1="43%" y1="64%" x2="43%" y2="92%" step={5} />
          {/* 7. LLM → App */}
          <Pulse x1="41%" y1="64%" x2="41%" y2="92%" step={6} reverse />
          {/* 8. App → Query */}
          <Pulse x1="10%" y1="52%" x2="40%" y2="52%" step={7} reverse />
        </svg>

        {/* Search (top) */}
        <div className="absolute left-[42%] top-[13%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex size-11 items-center justify-center rounded-lg border border-white/8 bg-neutral-950">
            <Search className="size-5 text-white/40" />
          </div>
        </div>

        {/* Query (left) */}
        <div className="absolute left-[12%] top-[50%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex size-11 items-center justify-center rounded-lg border border-white/8 bg-neutral-950">
            <UserIcon className="size-5 text-white/40" />
          </div>
          <p className="absolute top-full left-1/2 mt-1.5 -translate-x-1/2 whitespace-nowrap bg-neutral-950 px-1 text-[10px] font-medium text-white/40">
            Query
          </p>
        </div>

        {/* App (center hub — larger, blue accent) */}
        <div className="absolute left-[42%] top-[50%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex size-16 items-center justify-center rounded-xl border border-white/8 bg-neutral-950">
            <svg
              className="absolute inset-0 size-full"
              viewBox="0 0 64 64"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="app-stroke"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#ef4444" />
                  <stop offset="50%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <motion.rect
                x="0.75"
                y="0.75"
                width="62.5"
                height="62.5"
                rx="12"
                stroke="url(#app-stroke)"
                strokeWidth="1.5"
                strokeLinecap="round"
                pathLength={1}
                strokeDasharray="0.2 0.8"
                animate={{ strokeDashoffset: [0, -1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>

            <Laptop className="size-7 text-white/90" />
          </div>
        </div>

        {/* Knowledge (right) */}
        <div className="absolute left-[80%] top-[13%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex size-11 items-center justify-center rounded-lg border border-white/8 bg-neutral-950">
            <Database className="size-5 text-white/40" />
          </div>
          <p className="absolute top-full left-1/2 mt-1.5 -translate-x-1/2 whitespace-nowrap bg-neutral-950 px-1 text-[10px] font-medium text-white/40">
            Datastore
          </p>
        </div>

        {/* LLM (bottom pill — like "Connected") */}
        <div className="absolute left-[42%] top-[90%] -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center gap-1.5 rounded-md border border-blue-500/40 bg-neutral-950 px-3 py-1">
            <BrainIcon className="size-3.5 text-blue-400" />
            <p className="text-[11px] font-medium text-blue-400">LLM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

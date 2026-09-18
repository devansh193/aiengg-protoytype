import { IoLogoLinkedin } from "react-icons/io";

import Image from "next/image";
import Link from "next/link";

export const InstructorSection = () => {
  return (
    <section className="w-full">
      <div className="flex w-full">
        <div className="mx-auto w-full max-w-7xl border-x border-b border-white/20">
          <div className="grid overflow-hidden bg-[#1B1B1B] p-4 md:grid-cols-[minmax(16rem,34%)_1fr] md:gap-8">
            <div className="relative overflow-hidden rounded-lg bg-[#0a0a0a] md:min-h-88">
              <Image
                src="/images/tanishq.webp"
                alt="Tanishq Singh"
                fill
                className="origin-[center_32%] scale-[1.75] object-cover object-[center_32%]"
                sizes="(min-width: 768px) 34vw, 100vw"
              />
            </div>

            <div className="flex min-h-104 flex-col px-2 py-5 sm:px-4 md:min-h-0 md:py-2">
              <div>
                <p className="text-md font-medium text-violet-500">Instructor</p>
                <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                  Your Cohort Instructor
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/70">
                  Tanishq is an AI Engineer and Master&apos;s graduate from IIT
                  Madras and the University of Birmingham, with production
                  experience across FinTech, HealthTech, and EdTech. He has
                  built end-to-end RAG pipelines and multi-agent systems using
                  LangGraph, CrewAI, and AWS Bedrock, with deep expertise in
                  agent orchestration, context engineering, and memory. His
                  evaluation work spans hallucination detection, prompt
                  injection, and guardrail testing.
                </p>
              </div>

              <div className="mt-auto grid gap-8 pt-8 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="font-medium text-white">Tanishq Singh</p>
                  <p className="mt-1 text-sm text-white/45">
                    AI Engineer · IIT Madras · University of Birmingham
                  </p>
                </div>
                <Link
                  href="https://www.linkedin.com/in/tanishq25/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Tanishq Singh on LinkedIn"
                  className="size-11"
                >
                  <IoLogoLinkedin className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

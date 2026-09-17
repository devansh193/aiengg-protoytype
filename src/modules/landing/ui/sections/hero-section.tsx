import { SignInButton } from "@/modules/auth/ui/components/signin-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="flex w-full min-h-[calc(100dvh-4rem)] flex-1 flex-col">
      <div className="flex min-h-0 w-full flex-1 px-6">
        <div className="relative mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col overflow-hidden before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-px before:bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_12px,transparent_12px_20px)] after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-px after:bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.2)_0_12px,transparent_12px_20px)]">
          <Image
            src="/images/hero.webp"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/60" />
          <div className="relative z-10 flex w-full flex-1 flex-col items-start justify-center gap-y-4 px-16">
            <p className="text-sm font-medium">
              Transition from Senior SWE to Senior AI Engineer
            </p>
            <h1 className="text-7xl">Master RAG & Agents Cohort in 8 Weeks</h1>
            <p className="max-w-xl text-lg text-white/70">
              For senior software engineers designing and deploying retrieval
              systems and agent workflows in production.
            </p>
            <div className="flex gap-x-4">
              <SignInButton />
              <button
                type="button"
                className="group inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors duration-200 hover:cursor-pointer hover:text-white"
              >
                Syllabus
                <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden
        data-hero-edge="bottom"
        className="h-px w-full bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.2)_0_12px,transparent_12px_20px)]"
      />
    </div>
  );
};

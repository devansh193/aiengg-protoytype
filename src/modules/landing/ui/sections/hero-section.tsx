import { TextShimmer } from "@/components/ui/text-shimmer";
import { SignInButton } from "@/modules/auth/ui/components/signin-button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="flex w-full min-h-[calc(100dvh-4rem)] flex-1 flex-col">
      <div
        aria-hidden
        data-hero-edge="bottom"
        className="h-px w-full bg-white/20"
      />
      <div className="flex min-h-0 w-full flex-1 px-6">
        <div className="relative mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col overflow-hidden border-x border-white/20">
          <Image
            src="/images/auth.webp"
            alt=""
            fill
            priority
            className="object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 to-black/60" />
          <div className="relative z-10 flex w-full flex-1 flex-col items-start justify-center gap-y-4 px-16">
            <p className="text-sm font-medium pl-3">
              Transition from Senior SWE to Senior AI Engineer
            </p>
            <h1 className="text-7xl">
              One stop solution to becoming the engineer{" "}
              <TextShimmer
                as="span"
                duration={2}
                spread={5}
                className="whitespace-nowrap [--base-color:var(--color-blue-500)] [--base-gradient-color:var(--color-blue-300)] dark:[--base-color:var(--color-blue-500)] dark:[--base-gradient-color:var(--color-blue-300)] text-shadow-2xs"
              >
                behind AI System
              </TextShimmer>
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              For engineers who want to go beyond demos and build AI systems
              that survive production.
            </p>
            <div className="flex gap-x-4">
              <SignInButton />
              <button
                type="button"
                className=" group inline-flex items-center gap-1.5 text-sm duration-150 hover:cursor-pointer active:scale-98 hover:text-black bg-white text-black px-3 rounded-xl transition-transform"
              >
                Syllabus
                <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <p className="absolute bottom-2 right-4 text-white/60 text-[8px] uppercase tracking-[0.2em]">
            &quot; We shape our tools, and thereafter our tools shape us&quot;
          </p>
        </div>
      </div>
      <div
        aria-hidden
        data-hero-edge="bottom"
        className="h-px w-full bg-white/20"
      />
    </div>
  );
};

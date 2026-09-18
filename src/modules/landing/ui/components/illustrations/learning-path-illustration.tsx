import {
  BrainIcon,
  LayoutGrid,
  Lock,
  RefreshCw,
  Trophy,
  Users,
} from "lucide-react";

export function LearningPathIllustration() {
  return (
    <div aria-hidden className="mt-auto w-full pt-6">
      <div className="relative h-52 w-full sm:h-60">
        <div className="grid h-full grid-cols-5 grid-rows-3 gap-1.5">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="rounded-lg border border-dashed border-white/12 bg-[repeating-linear-gradient(-45deg,transparent_0_3px,rgba(255,255,255,0.04)_3px_4px)]"
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 grid grid-cols-5 grid-rows-3 gap-1.5">
          <div className="z-0 col-start-2 col-span-3 row-start-1 flex items-center">
            <div className="ml-[50%] h-px w-1/2 border-t border-dashed border-blue-500" />
          </div>
          <div className="z-0 col-start-4 row-start-1 row-span-3 flex justify-center">
            <div className="mt-[50%] h-1/2 w-px border-l border-dashed border-white/20" />
          </div>
          <div className="z-0 col-start-4 col-span-2 row-start-3 flex items-center">
            <div className="ml-[50%] h-px w-1/2 border-t border-dashed border-white/20" />
          </div>

          <div className="relative z-10 col-start-2 row-start-1 flex flex-col items-center justify-center gap-1 rounded-lg border border-dashed border-blue-500 bg-black px-1 text-center text-blue-500">
            <BrainIcon className="size-8 shrink-0" />
            <span className="text-[10px] leading-tight font-medium">
              Structured
              <br />
              Learning
            </span>
          </div>

          <div className="relative z-10 col-start-4 row-start-1 flex flex-col items-center justify-center gap-1 text-white/30">
            <span className="relative">
              <LayoutGrid className="size-5" />
              <Lock className="absolute -right-1.5 -bottom-1 size-2.5" />
            </span>
            <span className="text-[10px] leading-tight">
              Focused
              <br />
              Practise
            </span>
          </div>

          <div className="relative z-10 col-start-4 row-start-3 flex flex-col items-center justify-center gap-1 text-white/30">
            <span className="relative">
              <Users className="size-5" />
              <RefreshCw className="absolute -top-1.5 -left-2 size-2.5" />
              <RefreshCw className="absolute -right-2 -bottom-1.5 size-2.5" />
            </span>
            <span className="text-[10px] leading-tight">
              Expert
              <br />
              Feedback
            </span>
          </div>

          <div className="relative z-10 col-start-5 row-start-3 flex flex-col items-center justify-center gap-1 text-white/30">
            <Trophy className="size-5" />
            <span className="text-[10px] leading-tight text-center pt-1">
              AI
              <br />
              Engineer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

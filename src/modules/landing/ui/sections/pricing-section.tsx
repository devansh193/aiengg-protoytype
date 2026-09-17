import { ArrowRight, Check, ShieldCheck } from "lucide-react";

const benefits = [
  "20 live classes with instructor",
  "9 weekly networking sessions",
  "90 days of implementation support",
  "Lifetime access to recordings",
  "Certificate of completion",
] as const;

export const PricingSection = () => {
  return (
    <section id="pricing" className="w-full">
      <div className="flex w-full px-6">
        <div className="mx-auto w-full max-w-7xl border-x border-b border-white/20">
          <header className="flex flex-col items-center gap-4 border-b border-white/20 px-6 py-16 text-center">
            <p className="text-sm text-[#E07A5F]">Pricing</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              Simple, transparent pricing.
            </h2>
            <p className="text-sm text-white/45">
              One tier. Full access. No hidden add-ons.
            </p>
          </header>

          <div className="grid md:grid-cols-[1.1fr_0.9fr_1fr]">
            <div className="flex flex-col justify-between gap-8 border-b border-white/20 p-7 md:border-r md:border-b-0 sm:p-8">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-medium">RAG and Agents</h3>
                  <span className="rounded-full border border-[#E07A5F]/30 bg-[#E07A5F]/10 px-3 py-1 text-xs font-medium text-[#E07A5F]">
                    Late Registration
                  </span>
                </div>
                <p className="mt-2 text-sm text-white/45">
                  Production AI engineering cohort
                </p>
              </div>
              <p className="text-sm text-white/50">
                Cohort starts on{" "}
                <span className="font-medium text-white">Sep 12, 2026</span>
              </p>
            </div>

            <div className="flex flex-col justify-center border-b border-white/20 p-7 md:border-r md:border-b-0 sm:p-8">
              <p className="text-sm text-white/45">Late registration fee</p>
              <p className="mt-2 text-4xl font-medium tracking-tight sm:text-5xl">
                ₹1,25,000
              </p>
              <p className="mt-2 text-sm text-white/35">
                <span className="line-through">₹1,40,000</span>
                <span className="ml-2 text-[#E07A5F]">Save ₹15,000</span>
              </p>
            </div>

            <div className="flex flex-col justify-center p-7 sm:p-8">
              <button
                type="button"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#E07A5F] px-5 text-sm font-medium text-black transition-colors hover:bg-[#ea8b72] active:translate-y-px"
              >
                Secure Your Spot
                <ArrowRight className="size-4" />
              </button>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-white/40">
                <ShieldCheck className="size-3.5" />
                7-day money-back guarantee
              </p>
            </div>
          </div>

          <div className="border-t border-white/20">
            <ul className="grid sm:grid-cols-2 md:grid-cols-5">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex min-h-28 items-start gap-3 border-b border-white/20 p-6 even:sm:border-l md:border-r md:even:border-l-0 md:last:border-r-0"
                >
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-[#E07A5F]"
                    strokeWidth={2}
                  />
                  <span className="text-sm leading-6 text-white/60">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center px-6 py-7">
              <button
                type="button"
                className="group text-sm text-white/50 underline-offset-4 transition-colors hover:text-white hover:underline hover:cursor-pointer"
              >
                Learn how to reimburse this program
                <ArrowRight className="ml-1.5 inline size-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

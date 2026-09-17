import { TextShimmer } from "@/components/ui/text-shimmer";

const logos = [
  { name: "Primer", className: "text-2xl font-semibold tracking-tight" },
  { name: "ARCH", className: "text-sm font-medium tracking-[0.45em]" },
  { name: "Modal", className: "text-lg font-medium" },
  { name: "Attention", className: "text-sm font-medium" },
  { name: "granola", className: "text-xl font-light tracking-wide" },
  { name: "Bridge", className: "text-lg font-medium", sub: "a stripe company" },
  { name: "bill", className: "font-serif text-3xl italic" },
  null,
] as const;

export const TrustedBy = () => {
  return (
    <section className="w-full">
      <svg className="absolute h-0 w-0" aria-hidden>
        <filter id="trusted-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
      <div className="flex w-full px-6">
        <div className="relative mx-auto w-full max-w-7xl border-x border-white/20">
          <p className="border-b border-white/20 py-5 text-center text-sm font-medium tracking-[0.22em] text-white">
            <TextShimmer duration={2.2} className="font-medium uppercase">
              Trusted by engineers from
            </TextShimmer>
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-4">
            {logos.map((logo, i) => (
              <li
                key={logo?.name ?? `empty-${i}`}
                className={`relative flex h-24 items-center justify-center overflow-hidden border-b border-white/20 max-sm:odd:border-r sm:border-r sm:nth-[4n]:border-r-0 ${
                  logo
                    ? "group cursor-default bg-transparent hover:bg-white/4"
                    : ""
                }`}
              >
                {logo ? (
                  <>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-white opacity-0 mix-blend-overlay transition-opacity duration-300 filter-[url(#trusted-noise)] group-hover:opacity-[0.22]"
                    />
                    <div className="relative z-10 flex flex-col items-center">
                      <span className={logo.className}>{logo.name}</span>
                      {"sub" in logo && logo.sub ? (
                        <span className="text-[10px] text-white/40">
                          {logo.sub}
                        </span>
                      ) : null}
                    </div>
                  </>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

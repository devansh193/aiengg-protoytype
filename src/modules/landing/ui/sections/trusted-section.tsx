import { TextShimmer } from "@/components/ui/text-shimmer";
import {
  FaAmazon,
  FaCcVisa,
  FaGoogle,
  FaMicrosoft,
  FaPaypal,
  FaUber,
} from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { SiAtandt } from "react-icons/si";

const logos = [
  {
    name: "Microsoft",
    Icon: FaMicrosoft,
    className: "text-xl font-semibold tracking-tight",
  },
  {
    name: "Google",
    Icon: FaGoogle,
    className: "text-2xl font-medium tracking-tight",
  },
  {
    name: "Uber",
    Icon: FaUber,
    className: "text-3xl font-bold tracking-tighter",
  },
  { name: "Amazon", Icon: FaAmazon, className: "text-2xl font-medium" },
  {
    name: "AT&T",
    Icon: SiAtandt,
    className: "text-lg font-semibold tracking-[0.2em]",
  },
  {
    name: "Oracle",
    Icon: GrOracle,
    className: "text-sm font-semibold tracking-[0.35em]",
  },
  {
    name: "Visa",
    Icon: FaCcVisa,
    className: "text-2xl font-bold italic tracking-[0.15em]",
  },
  {
    name: "PayPal",
    Icon: FaPaypal,
    className: "text-2xl font-semibold italic",
  },
];

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
              Trusted by 500+ engineers from
            </TextShimmer>
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-4">
            {logos.map((logo) => (
              <li
                key={logo.name}
                className="group relative flex h-24 cursor-default items-center justify-center overflow-hidden border-b border-white/20 bg-transparent hover:bg-white/4 max-sm:odd:border-r sm:border-r sm:nth-[4n]:border-r-0"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-white opacity-0 mix-blend-overlay transition-opacity duration-300 filter-[url(#trusted-noise)] group-hover:opacity-[0.22]"
                />
                <span className="relative z-10 flex items-center gap-2.5">
                  <logo.Icon className="size-6 shrink-0" aria-hidden />
                  <span className={logo.className}>{logo.name}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

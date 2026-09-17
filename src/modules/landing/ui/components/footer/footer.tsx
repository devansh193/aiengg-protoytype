import Link from "next/link";

const supportLinks = [
  { label: "Contact us", href: "/contact" },
  { label: "Expense", href: "/expense" },
  { label: "Careers", href: "/careers" },
] as const;

const legalLinks = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cancellations and Refunds", href: "/refund-policy" },
] as const;

export const Footer = () => {
  return (
    <footer className="relative w-full border-t border-white/20">
      <div className="mx-auto max-w-7xl flex w-full flex-col justify-between border-white/20 py-8 ">
        <div className="grid gap-12 md:grid-cols-[minmax(0,2fr)_1fr_1.3fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-lg">
              <span className="relative size-4" aria-hidden>
                <span className="absolute top-0 left-0 size-2.5 rounded-xs bg-white" />
                <span className="absolute right-0 bottom-0 size-2.5 rounded-xs border border-white/60" />
              </span>
              AiEngg
            </Link>
            <p className="mt-5 max-w-md text-sm leading-6 text-white/50">
              Master AI through structured cohort-based learning. Join live
              sessions, get personalized guidance, and accelerate your career.
            </p>
          </div>

          <nav aria-label="Support">
            <p className="text-xs font-medium tracking-[0.14em] text-white/35 uppercase">
              Support
            </p>
            <ul className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className="text-xs font-medium tracking-[0.14em] text-white/35 uppercase">
              Legal
            </p>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="relative mt-4 w-full pt-4 before:absolute before:top-0 before:left-1/2 before:w-screen before:-translate-x-1/2 before:border-t before:border-white/10">
          <p className="text-xs text-white/35">
            © 2026 AiEngg. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

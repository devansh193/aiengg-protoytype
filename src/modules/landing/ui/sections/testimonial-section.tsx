import { ArrowUpRight, Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "As someone who hadn’t touched code for about 20 years, the class exercises helped me get back in the groove. I loved the pace at which we progressed and how the teaching staff brought us onto solid footing.",
    name: "Badri Rama",
    role: "Director Technology at AT&T, US",
    initials: "BR",
  },
  {
    quote:
      "I haven’t just learned, but also deployed two major projects to production. The journey took me from the internals and fundamentals of AI to vector databases, RAG, and agentic architectures.",
    name: "Rajul Babel",
    role: "Principal Engineer (AI) · Ex-Flipkart, Paytm, Amazon",
    initials: "RB",
  },
  {
    quote:
      "This wasn’t just about high-level abstractions. It was a rigorous, code-first journey that pushed me to understand modern AI architecture from the ground up.",
    name: "Dwaipayan Gupta",
    role: "Vice President (Data & AI) at Wells Fargo",
    initials: "DG",
  },
  {
    quote:
      "What stood out was the shift from understanding concepts to building with them: designing RAG pipelines, orchestrating multi-agent systems, and integrating tools into functional AI products.",
    name: "Carmal Shaktan",
    role: "Senior Cloud and AI Engineer at IBM",
    initials: "CS",
  },
] as const;

export const TestimonialSection = () => {
  return (
    <section className="w-full">
      <div className="flex w-full px-6">
        <div className="mx-auto w-full max-w-7xl border-x border-b border-white/20">
          <header className="flex flex-col items-center gap-4 border-b border-white/20 px-6 py-16 text-center">
            <p className="text-md text-blue-500">Student Testimonials</p>
            <h2 className="max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl">
              Built by engineers. Proven at work.
            </h2>
          </header>

          <ul className="grid md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <li
                key={testimonial.name}
                className="group flex min-h-72 flex-col border-b border-white/20 p-7 odd:md:border-r hover:bg-white/3 sm:p-9"
              >
                <Quote className="size-5 text-blue-500" aria-hidden />
                <blockquote className="mt-6 max-w-xl text-base leading-7 text-white/70">
                  “{testimonial.quote}”
                </blockquote>
                <div className="mt-auto flex items-center gap-3 pt-8">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-medium text-white/70">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="mt-0.5 text-sm text-white/40">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-center px-6 py-8">
            <Link
              href="/testimonials"
              className="relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-linear-to-b from-[#4399ff] via-[#1680ff] to-[#006cf4] px-6 py-2.5 text-sm font-medium text-white ring-1 ring-inset ring-[#005ec9] shadow-[inset_0_2px_1px_rgba(255,255,255,0.28),inset_0_-2px_1px_rgba(0,62,166,0.42),0_2px_0_#0059bd,0_5px_12px_rgba(0,104,239,0.22)] transition-[filter,transform,box-shadow] hover:shadow-[inset_0_2px_1px_rgba(255,255,255,0.34),inset_0_-2px_1px_rgba(0,62,166,0.38),0_2px_0_#0059bd,0_7px_16px_rgba(0,104,239,0.3)] active:translate-y-px active:shadow-[inset_0_2px_2px_rgba(0,58,155,0.35),0_1px_0_#0059bd] focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              View all testimonials
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

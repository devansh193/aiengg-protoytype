const takeaways = [
  {
    title: "Ship production-grade AI code",
    body: "Build reliable AI: Agents, RAG, MCP, vector DBs including Evals, guardrails, and observability.",
  },
  {
    title: "Land AI Engineering roles",
    body: "Prove it with a real-world capstone portfolio hiring managers can actually see.",
    featured: true,
  },
  {
    title: "Become the AI expert on your team",
    body: "Spot the right AI use cases and own the room; tradeoffs and decisions your team trusts.",
  },
] as const;

export const TakeawaySection = () => {
  return (
    <section className="w-full">
      <div className="flex w-full px-6">
        <div className="mx-auto w-full max-w-7xl border-x border-b border-white/20">
          <header className="flex flex-col items-center gap-4 px-6 py-16 text-center">
            <p className="text-sm text-[#E07A5F]">What You Will Learn</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              Key Takeaways
            </h2>
            <p className="rounded-md border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/60">
              AI skills that are essential and job-relevant.
            </p>
          </header>
          <ul className="grid border-t border-white/20 md:grid-cols-3">
            {takeaways.map((item) => (
              <li
                key={item.title}
                className={`flex flex-col gap-2 p-8 md:border-r md:border-white/20 md:last:border-r-0 max-md:border-b max-md:border-white/20 max-md:last:border-b-0 ${
                  "featured" in item && item.featured ? "bg-white/3" : ""
                }`}
              >
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="max-w-sm text-sm leading-relaxed text-white/50">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

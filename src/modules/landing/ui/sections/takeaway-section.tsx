import { HandsOnIllustration } from "@/modules/landing/ui/components/illustrations/hands-on-illustration";
import { LearningPathIllustration } from "@/modules/landing/ui/components/illustrations/learning-path-illustration";
import { LiveGuidanceIllustration } from "@/modules/landing/ui/components/illustrations/live-guidance-illustration";
import { ReliableSystemsIllustration } from "@/modules/landing/ui/components/illustrations/reliable-systems-illustration";

const takeaways = [
  {
    title: "Structured AI Learning Path",
    body: [
      "Go from LLM fundamentals to advanced AI systems through a clear, step-by-step curriculum.",
      "Learn embeddings, RAG, advanced retrieval, agents, multi-agent systems, evaluation, and production architecture in the right sequence.",
    ],
  },
  {
    title: "Build Reliable AI Systems",
    body: [
      "Learn how to evaluate AI outputs, reduce hallucinations, add guardrails, and monitor system performance.",
      "Build applications that are accurate, measurable, and reliable beyond simple demos.",
    ],
  },
  {
    title: "Hands-on AI Engineering",
    body: [
      "Turn every major concept into working code through practical exercises and projects.",
      "Build RAG pipelines, GraphRAG systems, tool-calling agents, hybrid search, reranking, and multi-agent workflows yourself.",
    ],
  },
  {
    title: "Live Guidance & Continued Support",
    body: [
      "Learn through 20 live instructor-led classes with regular opportunities to ask questions and get feedback.",
      "Get weekly networking sessions, 90 days of implementation support, and lifetime access to all cohort recordings.",
    ],
  },
] as const;

const illustrations = {
  "Structured AI Learning Path": LearningPathIllustration,
  "Build Reliable AI Systems": ReliableSystemsIllustration,
  "Hands-on AI Engineering": HandsOnIllustration,
  "Live Guidance & Continued Support": LiveGuidanceIllustration,
};

export const TakeawaySection = () => {
  return (
    <section className="w-full">
      <div className="flex w-full px-6">
        <div className="mx-auto w-full max-w-7xl border-x border-b border-white/20">
          <header className="flex flex-col items-center gap-4 px-6 py-16 text-center">
            <p className="text-md text-blue-500">What You Will Learn</p>
            <h2 className="text-4xl font-medium tracking-tight sm:text-5xl">
              Key Takeaways
            </h2>
          </header>
          <ul className="grid border-t border-white/20 sm:grid-cols-2">
            {takeaways.map((item) => {
              const Illustration =
                illustrations[item.title as keyof typeof illustrations];
              return (
                <li
                  key={item.title}
                  className="flex flex-col gap-3 p-8 border-white/20 max-sm:border-b max-sm:last:border-b-0 sm:odd:border-r sm:border-b sm:nth-last-[-n+2]:border-b-0"
                >
                  <h3 className="text-xl font-medium uppercase">
                    {item.title}
                  </h3>
                  {item.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-white/50"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {Illustration ? <Illustration /> : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

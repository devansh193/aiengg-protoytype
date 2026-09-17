import { SignInButton } from "@/modules/auth/ui/components/signin-button";

export const CtaSection = () => {
  return (
    <section className="w-full">
      <div className="flex w-full">
        <div className="mx-auto w-full max-w-7xl border-x border-b border-white/20">
          <div className="grid gap-8 bg-[#1b1b1b] px-7 py-10 md:grid-cols-[1fr_auto] md:items-center sm:px-10 sm:py-8">
            <div className="space-y-3">
              <h2 className="max-w-3xl text-3xl tracking-tighter sm:text-3xl">
                Ready to transition to Senior AI Engineer?
              </h2>
              <p className=" max-w-xl text-base tracking-tight text-white/90">
                Build production-ready RAG and agent systems with the depth to
                lead architecture decisions.
              </p>
              <div className="flex justify-start">
                <SignInButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

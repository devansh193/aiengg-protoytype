import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { IoLogoGoogle } from "react-icons/io";

interface AuthPageProps {
  mode: "sign-in" | "sign-up";
}

export const AuthPage = ({ mode }: AuthPageProps) => {
  const isSignIn = mode === "sign-in";

  return (
    <section className="grid h-screen bg-[#0A0A0A] text-white md:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md flex flex-col items-center justify-center gap-y-4">
          <div className="sm:px-14">
            <h1 className="text-2xl font-medium leading-none tracking-[-0.04em] text-center">
              {isSignIn ? "Welcome back!" : "Create an account"}
            </h1>
            <p className="mt-2 text-sm leading-5 text-white/55">
              {isSignIn
                ? "Sign in to continue to your account"
                : "Sign up to join the next cohort"}
            </p>
          </div>

          <Button variant={"cta"} type="button" className="w-full">
            <IoLogoGoogle />
            {isSignIn ? "Sign in with Google" : "Sign up with Google"}
          </Button>

          <p className="mt-4 text-center text-xs leading-5 text-white/45">
            By {isSignIn ? "signing in" : "signing up"}, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-2 hover:text-white/70"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-2 hover:text-white/70"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="relative min-h-80 overflow-hidden md:min-h-full">
        <Image
          src="/images/auth.webp"
          alt="Black-and-white view of the New York City skyline"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90  to-black/30" />
        <p className="absolute right-8 bottom-8 text-[10px] tracking-[0.2em] text-white/75 uppercase font-medium">
          “We shape our tools, and thereafter our tools shape us.”
        </p>
      </div>
    </section>
  );
};

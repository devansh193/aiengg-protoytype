import { SignInButton } from "@/modules/auth/ui/components/signin-button";

export const Navbar = () => {
  return (
    <nav className="relative flex h-16 w-full flex-col items-center justify-between bg-[#0A0A0A] px-6 text-white">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-4">
        <h1 className="text-2xl font-semibold tracking-wider">AiEngg</h1>
        <SignInButton />
      </div>
    </nav>
  );
};

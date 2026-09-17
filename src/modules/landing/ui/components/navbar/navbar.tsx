import { SignInButton } from "@/modules/auth/ui/components/signin-button";

export const Navbar = () => {
  return (
    <nav className="relative flex flex-col h-16 w-full items-center justify-between bg-[#0A0A0A] px-6 text-white after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[repeating-linear-gradient(to_right,rgba(255,255,255,0.2)_0_12px,transparent_12px_20px)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full w-full px-4 border-l border-r">
        <h1>AiEngg</h1>
        <SignInButton />
      </div>
    </nav>
  );
};

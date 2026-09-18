import { StickyBanner } from "@/components/ui/sticky-banner";
import { Footer } from "../components/footer/footer";
import { Navbar } from "../components/navbar/navbar";

interface Props {
  children: React.ReactNode;
}

export const LandingLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-dvh w-full flex-1 flex-col">
      <StickyBanner className="bg-linear-to-b from-violet-500 to-violet-600">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Final call for late registration — only 5 seats remain at this price.{" "}
          <a href="#" className="transition duration-200 hover:underline">
            Read announcement
          </a>
        </p>
      </StickyBanner>
      <Navbar />
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
      <Footer />
    </div>
  );
};

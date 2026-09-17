import { CohortOutline } from "@/modules/landing/ui/sections/cohort-outline-section";
import { CtaSection } from "@/modules/landing/ui/sections/cta-section";
import { FaqSection } from "@/modules/landing/ui/sections/faq-section";
import { HeroSection } from "@/modules/landing/ui/sections/hero-section";
import { InstructorSection } from "@/modules/landing/ui/sections/Instructor-section";
import { PricingSection } from "@/modules/landing/ui/sections/pricing-section";
import { TakeawaySection } from "@/modules/landing/ui/sections/takeaway-section";
import { TestimonialSection } from "@/modules/landing/ui/sections/testimonial-section";
import { TrustedBy } from "@/modules/landing/ui/sections/trusted-section";

export default function Home() {
  return (
    <div className="flex min-h-0 w-full flex-1 flex-col items-center font-sans">
      <HeroSection />
      <TrustedBy />
      <TakeawaySection />
      <CohortOutline />
      <InstructorSection />
      <TestimonialSection />
      <PricingSection />
      <CtaSection />
      <FaqSection />
    </div>
  );
}

import { ContactSection } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { MethodSection } from "@/components/sections/method";
import { OffersSection } from "@/components/sections/offers";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { TransformationsSection } from "@/components/sections/transformations";
import { TrustBarSection } from "@/components/sections/trust-bar";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBarSection />
      <OffersSection />
      <MethodSection />
      <TestimonialsSection />
      <TransformationsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}

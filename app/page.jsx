import {
  HeroSection,
  AboutSection,
  ServicesSection,
  WhoWeServeSection,
  JourneySection,
  TestimonialsSection,
  ClosingBanner,
} from "../components/sections";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection condensed />
      <WhoWeServeSection condensed />
      <JourneySection condensed />
      <TestimonialsSection condensed />
      <ClosingBanner />
    </main>
  );
}

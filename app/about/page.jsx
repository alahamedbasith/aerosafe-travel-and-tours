import {
  AboutSection,
  MissionVisionSection,
  LeadershipSection,
  CoreValuesSection,
  ClosingBanner,
} from "../../components/sections";

export const metadata = { title: "About | Aerosafe Travel & Tourism" };

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
      <MissionVisionSection />
      <LeadershipSection />
      <CoreValuesSection />
      <ClosingBanner />
    </main>
  );
}

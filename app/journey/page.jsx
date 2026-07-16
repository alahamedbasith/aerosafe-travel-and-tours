import { JourneySection, AchievementsSection, ClosingBanner } from "../../components/sections";

export const metadata = { title: "Our Journey | Aerosafe Travel & Tourism" };

export default function JourneyPage() {
  return (
    <main>
      <JourneySection />
      <AchievementsSection />
      <ClosingBanner />
    </main>
  );
}

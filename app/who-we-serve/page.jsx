import { WhoWeServeSection, WhyChooseSection, ClosingBanner } from "../../components/sections";

export const metadata = { title: "Who We Serve | Aerosafe Travel & Tourism" };

export default function WhoWeServePage() {
  return (
    <main>
      <WhoWeServeSection />
      <WhyChooseSection />
      <ClosingBanner />
    </main>
  );
}

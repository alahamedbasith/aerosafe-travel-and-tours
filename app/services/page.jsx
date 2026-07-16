import {
  ServicesSection,
  CorporateTravelSection,
  WhyChooseSection,
  ClosingBanner,
} from "../../components/sections";

export const metadata = { title: "Services | Aerosafe Travel & Tourism" };

export default function ServicesPage() {
  return (
    <main>
      <ServicesSection />
      <CorporateTravelSection />
      <WhyChooseSection />
      <ClosingBanner />
    </main>
  );
}

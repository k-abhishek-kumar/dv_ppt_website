import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PageBackground } from "@/components/page-background";
import { PerformanceSection } from "@/components/performance-section";
import { StrategiesSection } from "@/components/strategies-section";
import { TeamSection } from "@/components/team-section";

export default function Home() {
  return (
    <>
      <PageBackground />
      <Header />
      <main>
        <Hero />
        <StrategiesSection />
        <PerformanceSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

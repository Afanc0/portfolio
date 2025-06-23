import { AboutSection } from "@afanco/components/about-section";
import { ContactSection } from "@afanco/components/contact-section";
import { ExperienceSection } from "@afanco/components/experience-section";
import { Header } from "@afanco/components/header";
import { HeroBanner } from "@afanco/components/hero-banner";
import { Portfolio } from "@afanco/components/portfolio";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col min-w-full">
        <HeroBanner />
        <AboutSection />
        <Portfolio />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}

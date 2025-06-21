import { AboutSection } from "@afanco/components/about-section";
import { ContactSection } from "@afanco/components/contact-section";
import { ExperienceSection } from "@afanco/components/experience-section";
import { Header } from "@afanco/components/header";
import { HeroBanner } from "@afanco/components/hero-banner";
import { Portfolio } from "@afanco/components/portfolio";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start min-w-full">
        <HeroBanner />
        <AboutSection />
        <Portfolio />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}

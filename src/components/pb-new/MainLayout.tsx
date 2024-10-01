/**
 * This code was generated by Builder.io.
 */
import { component$ } from "@builder.io/qwik";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { DesignSection } from "./DesignSection";
import { StepsSection } from "./StepsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { PrintOptionsSection } from "./PrintOptionsSection";
import { BookTypesSection } from "./BookTypesSection";
import { ExploreSection } from "./ExploreSection";
import { FAQSection } from "./FAQSection";
import { InfoSection } from "./InfoSection";
import { Footer } from "./Footer";
import { MobileCreativeSection } from "./MobileCreativeSection";

export const MainLayout = component$(() => {
  return (
    <div class="flex overflow-hidden flex-col bg-white">
      <Header />
      <main class="flex flex-col gap-20">
        <HeroSection />
        <DesignSection />
        <StepsSection />
        <TestimonialsSection />
        <PrintOptionsSection />
        <BookTypesSection />
        <ExploreSection />
        <MobileCreativeSection />
        <FAQSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
});

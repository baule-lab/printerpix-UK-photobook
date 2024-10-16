/**
 * This code was generated by Builder.io.
 */
import { component$ } from "@builder.io/qwik";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { GallerySection } from "./GallerySection";
import { DiscoverWaySection } from "./DiscoverWaySection";
import { GiftSection } from "./GiftSection";
import { PrintOptionsSection } from "./PrintOptionsSection";
import { CalendarTypesSection } from "./CalendarTypesSection";
import { FAQSection } from "./FAQSection";
import { InfoSection } from "./InfoSection";
import { Footer } from "./Footer";
import { CustomCalenderSection } from "./CustomCalenderSection";
import { UpgradeSection } from "./UpgradeSection";
import { CtaSection } from "./CtaSection";
import { GiftLoveSection } from "./GiftLoveSection";

export const CalendarLayout = component$(() => {
  return (
    <div class="flex overflow-hidden flex-col bg-white">
      <Header />
      <main class="flex flex-col md:gap-20 gap-20">
        <HeroSection />
        <CustomCalenderSection />
        <GallerySection />
        <DiscoverWaySection />
        <GiftLoveSection />
        <div class="md:block hidden">
          <GiftSection />
        </div>
        <PrintOptionsSection />
        <CalendarTypesSection />
        <div class="md:hidden block">
          <GiftSection />
        </div>
        <UpgradeSection />
        <CtaSection />
        <FAQSection />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
});

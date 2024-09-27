/**
 * This code was generated by Builder.io.
 */
import { component$ } from "@builder.io/qwik";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { DesignSection } from "./DesignSection";
import { StepsSection } from "./StepsSection";
import { TestimonialSection } from "./TestimonialSection";
import { ProductSection } from "./ProductSection";
import { PrintSection } from "./PrintSection";
import { BookTypesSection } from "./BookTypesSection";
import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";

export const MainLayout = component$(() => {
  return (
    <div class="flex overflow-hidden flex-col bg-white pb-[1810px] max-md:pb-24">
      <Header />
      <main>
        <Hero />
        <DesignSection />
        <StepsSection />
        <TestimonialSection />
        <ProductSection />
        <PrintSection />
        <BookTypesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
});

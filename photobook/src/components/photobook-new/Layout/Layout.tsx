/**
 * This code was generated by Builder.io.
 */
import { component$, Slot } from "@builder.io/qwik";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout = component$(() => {
  return (
    <div class="flex overflow-hidden flex-col bg-white">
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </div>
  );
});

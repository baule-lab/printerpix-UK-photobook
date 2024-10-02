import { component$ } from "@builder.io/qwik";
import { PhotoBookGrid } from "./PhotoBookGrid";

export const HeroSection = component$(() => {
  return (
    <div class="flex flex-col">
      <section
        class="mt-8 flex w-full flex-col items-center bg-[url('/images/banner-mobile.jpg')] sm:bg-[url('/images/banner.jpg')] bg-cover bg-center"
      >
        <div class="container flex min-h-[350px] w-full flex-col items-center justify-center py-10 text-sm md:items-start">
          <div class="sm:flex hidden w-[339px] max-w-full flex-col">
            <h1 class="text-3xl font-bold text-zinc-800">
              Create Photo Books to Tell Your Story
            </h1>
            <p class="mt-3 text-black">
              Starting at $14.99 <br />
              Get it by Sept 25 with Express
            </p>
            <button class="mt-3 w-full gap-2.5 self-stretch rounded bg-pink-500 px-4 py-3 text-white shadow-sm">
              Create your book
            </button>
          </div>
        </div>
      </section>

      <section class="flex w-full flex-col items-center sm:hidden">
        <div class="container flex w-full flex-col items-center justify-center text-sm md:items-start pt-10 pb-5">
          <div class="flex w-[339px] max-w-full flex-col">
            <h1 class="text-3xl font-bold text-zinc-800 text-center">
              Create Photo Books to Tell Your Story
            </h1>
            <p class="mt-3 text-black text-center">
              Starting at $14.99 <br />
              Get it by Sept 23 with Express
            </p>
            <button class="mt-3 w-full gap-2.5 self-stretch rounded bg-pink-500 px-4 py-3 text-white shadow-sm">
              Create your book
            </button>
          </div>
        </div>
      </section>

      <PhotoBookGrid />

      <section class="flex w-full items-center justify-center bg-[#852365] text-white px-24">
        <div class="flex flex-wrap items-center justify-between gap-10 py-3 container">
          <div class="flex w-full flex-col items-center self-stretch md:w-[200px] md:items-start">
            <h2 class="w-full gap-2 text-center text-lg font-bold md:text-start">
              Fall 🍁 <br />
              <span class="text-5xl font-bold">Sale</span>
            </h2>
          </div>
          <p class="my-auto self-stretch text-center text-2xl font-bold">
            Up to 50% off + an extra 10%
          </p>
          <p class="my-auto w-full self-stretch text-center text-sm md:w-[200px] md:text-right text-neutral-200">
            Ends Oct 14 <br /> No Code Needed. <br /> Discount applied on
            checkout.
          </p>
        </div>
      </section>
    </div>
  );
});

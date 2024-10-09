import { component$ } from "@builder.io/qwik";
import { PhotoBookGrid } from "./PhotoBookGrid";

export const HeroSection = component$(() => {
  return (
    <div class="flex flex-col items-center">
      {/* Section cho Banner */}
      <section class="relative mt-8 flex w-full flex-col items-center bg-[url('/images/banner-mobile.jpg')] bg-cover bg-center sm:bg-[url('/images/banner.jpg')] sm:bg-right">
        
        {/* Overlay với gradient đen mờ */}
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)] block md:hidden"></div>
        
        <div class="container relative flex min-h-[450px] w-full flex-col items-center justify-end md:justify-center py-10 text-sm md:min-h-[350px] md:items-start">
          {/* Nội dung cho Mobile */}
          <div class="flex w-[339px] max-w-full flex-col items-center text-center text-white sm:hidden z-10">
            <h1 class="text-3xl font-bold leading-tight">
              Photo Books to Tell Your Story
            </h1>
            <p class="mt-3 text-lg">
              Starting at $14.99 <br />
              Get it by Sept 23 with Rush Shipping
            </p>
            <button class="mt-3 w-full gap-2.5 self-stretch rounded bg-[#F02480] px-4 py-3 text-white shadow-sm">
              Create your book
            </button>
          </div>

          {/* Nội dung cho Desktop */}
          <div class="hidden w-[339px] max-w-full flex-col text-black sm:flex z-10">
            <h1 class="text-[38px] font-bold leading-tight">
              Photo Books to Tell Your Story
            </h1>
            <p class="mt-3">
              Starting at $14.99 <br />
              Get it by Sept 23 with Rush Shipping
            </p>
            <button class="mt-3 w-full gap-2.5 self-stretch rounded bg-[#F02480] px-4 py-3 text-white shadow-sm">
              Create your book
            </button>
          </div>
        </div>
      </section>

      <PhotoBookGrid />

      <section class="hidden w-[calc(100%-36px)] items-center justify-center bg-[#9B1E67] px-4 text-white md:flex md:w-full md:px-24">
        <div class="container flex flex-wrap items-center justify-center gap-4 rounded-lg bg-[#9B1E67] py-3 text-white md:justify-between md:gap-10 md:rounded-2xl">
          <div class="flex w-full flex-col items-center self-stretch md:w-[200px] md:items-start">
            <h2 class="w-full gap-2 text-center text-xl font-bold md:text-start md:text-lg">
              <span class="block md:hidden">Fall Sale 🍁</span>
              <span class="hidden md:block">
                Fall 🍁 <br />
                <span class="text-5xl font-bold">Sale</span>
              </span>
            </h2>
          </div>
          <p class="my-auto self-stretch text-center text-xl font-bold md:text-2xl">
            Up to 50% off + an extra 10% Off
          </p>
          <p class="my-auto w-full self-stretch text-center text-sm text-neutral-200 md:w-[200px] md:text-right">
            Ends Oct 14 <br /> No Code Needed. <br /> Discount applied on
            checkout.
          </p>
        </div>
      </section>
    </div>
  );
});

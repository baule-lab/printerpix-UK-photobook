import { component$ } from "@builder.io/qwik";
import { PhotoBookGrid } from "./PhotoBookGrid";

export const HeroSection = component$(() => {
  return (
    <div class="flex flex-col items-center">
      {/* Section cho Banner */}
      <section class="relative mt-8 flex w-full flex-col items-center bg-[url('/images/banner-mobile.jpg')] bg-cover bg-center sm:bg-[url('/images/banner.jpg')] sm:bg-right">
        
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)] block md:hidden"></div>
        
        <div class="container relative flex min-h-[500px] w-full flex-col items-center justify-end md:justify-center py-10 text-sm md:min-h-[500px] md:items-start">
          <div class="flex w-[339px] max-w-full flex-col items-center text-center text-white sm:hidden z-10">
            <p class="text-3xl font-normal">
              Custom Calendars
            </p>
            <h1 class="text-3xl font-bold leading-tight">
              Gift a Year of Joy
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
          <div class="hidden w-[40%] max-w-full flex-col text-black sm:flex z-10">
            <p class="text-3xl font-normal">
              Custom Calendars
            </p>
            <h1 class="md:text-[68px] text-[38px] font-bold leading-tight">
              Gift a Year of Joy
            </h1>
            <p class="mt-3 text-2xl">
              Starting at $14.99 <br />
              Get it by Sept 23 with Rush Shipping
            </p>
            <button class="mt-3 w-full gap-2.5 self-stretch rounded bg-[#F02480] px-4 py-3 text-white shadow-sm">
              Create Your Calendar
            </button>
          </div>
        </div>
      </section>
      <PhotoBookGrid />
    </div>
  );
});

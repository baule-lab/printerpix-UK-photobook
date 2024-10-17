/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";

export const HeroSection = component$(() => {
  return (
    <div class="flex flex-col items-center">
      {/* Section cho Banner */}
      <section class="relative mt-8 flex w-full flex-col items-center bg-[url('/calendar/images/banner-mobile.jpg')] bg-cover bg-center sm:bg-[url('/calendar/images/banner.jpg')] sm:bg-right">
        
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)] block md:hidden"></div>
        
        <div class="container relative flex min-h-[700px] w-full flex-col items-center justify-end md:justify-center py-10 text-sm md:min-h-[550px] md:items-start">
          <div class="flex w-[90%] max-w-full flex-col items-center text-center text-white sm:hidden z-10">
            <h1 class="text-3xl font-bold leading-tight">
              Gift a Year of Joy
            </h1>
            <p class="text-2xl font-normal">
              Custom Calendars | Starting at $14.99
            </p>
            <p class="mt-3 text-lg">
              Get it by Sept 23 with Rush Shipping
            </p>
            <button class="mt-3 w-full gap-2.5 self-stretch rounded bg-[#F02480] px-4 py-3 text-white shadow-sm">
              Create your book
            </button>
          </div>

          {/* Desktop */}
          <div class="hidden w-[40%] max-w-full flex-col text-white sm:flex z-10">
            <h1 class="md:text-[60px] text-[38px] font-bold leading-tight">
              Gift a Year of Joy
            </h1>
            <p class="text-2xl font-normal mt-5">
              Custom Calendars | Starting at $14.99
            </p>
            <p class="text-lg mt-3 ">
              Get it by Sept 23 with Rush Shipping
            </p>
            <button class="mt-3 w-full gap-2.5 self-stretch rounded bg-[#F02480] px-4 py-3 text-white shadow-sm">
              Create Your Calendar
            </button>
            <div class="mt-8 flex gap-3 items-center">
              <span class="font-medium text-nowrap">Great 9/10</span>
              <img src="/calendar/svg/4.5-stars.svg" alt="star" width={100} height={14} />
              <span class="font-medium text-nowrap">14,226 Reviews on</span>
              <img src="/calendar/svg/trustpilot.svg" alt="trustpilot" width={100} height={14} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

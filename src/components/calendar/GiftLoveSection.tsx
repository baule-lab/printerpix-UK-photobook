/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";

export const GiftLoveSection = component$(() => {
  return (
    <section class="container mx-auto flex  flex-col gap-8 px-4 text-black md:px-0">
      <h2 class="text-center text-3xl font-bold text-[#1A1A1A] max-md:max-w-full md:text-5xl">
        Crafted with Love, Gifted by You
      </h2>
      <div class="flex items-start justify-center">
        <div class="flex w-[80%] justify-center">
          <img
            src="/calendar/images/calendar-preview.jpg"
            height={300}
            width={1200}
            alt="Calendar Preview"
            class="h-auto w-full"
          />
        </div>
      </div>
      <button class="mt-8 h-[56px] w-full max-w-full gap-2.5 self-center rounded bg-[#F02480] px-4 py-3 text-base font-semibold text-white shadow-sm max-md:mt-10 md:h-auto md:w-[340px]">
        Create Your Calendar
      </button>
    </section>
  );
});

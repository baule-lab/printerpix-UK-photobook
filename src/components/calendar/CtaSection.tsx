import { component$ } from "@builder.io/qwik";

export const CtaSection = component$(() => {
  return (
    <section class="flex w-full items-center justify-center px-4 md:px-0">
      <div class="container flex flex-wrap items-center justify-between rounded-lg bg-[#9B1E67] px-4 py-5 text-white md:rounded-2xl md:px-8">
        <div class="flex items-center gap-4">
          <p class="my-auto flex w-full flex-col gap-0 self-stretch text-center text-base text-[#FBBDD3] md:w-[250px] md:gap-2 md:text-left">
            <span>Order 10+ calendars &</span>
            <span>unlock a special discount.</span>
          </p>
        </div>
        <h2 class="text-xl font-bold md:text-4xl">
          Bulk Savings on Photo Calendars
        </h2>
        <button class="rounded-md bg-white px-4 py-2 font-bold text-[#F02480] md:w-[250px] h-[56px]">
          Get a Quote
        </button>
      </div>
    </section>
  );
});

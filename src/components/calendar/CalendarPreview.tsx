/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";

export const CalendarPreview = component$(() => {
  return (
    <section class="mx-auto flex  flex-col gap-8 px-4 text-black md:px-0">
      <div class="flex items-start justify-center">
        <div class="flex w-full justify-center">
          <img
            src="/calendar/images/calendar-preview.jpg"
            height={800}
            width={800}
            alt="Calendar Preview"
            class="h-auto w-full"
          />
        </div>
      </div>
      <button class="h-[56px] w-full max-w-full gap-2.5 self-center rounded bg-[#F02480] px-4 py-3 text-base font-semibold text-white shadow-sm md:h-auto md:w-[340px]">
        Create Your Calendar
      </button>
    </section>
  );
});

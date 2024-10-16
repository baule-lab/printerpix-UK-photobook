/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";

export const GiftLoveSection = component$(() => {
  return (
    <section class="container mx-auto flex  flex-col gap-8 px-4 text-black md:px-0">
      <h2 class="text-center text-3xl font-bold text-[#1A1A1A] max-md:max-w-full md:text-5xl">
        Crafted with Love, Gifted by You
      </h2>
      <div class="flex items-start justify-center py-10">
        {/* Left Column */}
        <div class="flex w-[20%] flex-col items-center gap-14">
          <div class="h-[160px] w-[150px] rounded-md bg-yellow-100 p-4 text-center text-3xl shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px]">
            Explore 150+ unique fonts
          </div>
          <div class="h-[160px] w-[150px] rounded-md bg-yellow-100 p-4 text-center text-3xl shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px]">
            font 1 font 2 font 3
          </div>
          <div class="h-[160px] w-[150px] rounded-md bg-yellow-100 p-4 text-center text-3xl shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px]">
            Start on any month
          </div>
        </div>

        {/* Middle Column */}
        <div class="flex w-[60%] justify-center">
          <img
            src="/calendar/images/calendar-preview.jpg"
            height={300}
            width={300}
            alt="Calendar Preview"
            class="h-auto w-full"
          />
        </div>

        {/* Right Column */}
        <div class="flex w-[20%] flex-col items-center gap-6">
          <div class="flex h-[150px] w-[130px] items-center justify-center rounded-md bg-yellow-100 p-4 text-center shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px]">
            <span>Add colorful backgrounds & embellishments</span>
          </div>
          <div class="flex h-[150px] w-[130px] items-center justify-center rounded-md bg-yellow-100 p-4 text-center shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px]">
            background 1 embellishment 2 embellishment 3
          </div>
        </div>
      </div>
      <button class="mt-12 h-[56px] w-full max-w-full gap-2.5 self-center rounded bg-[#F02480] px-4 py-3 text-base font-semibold text-white shadow-sm max-md:mt-10 md:h-auto md:w-[340px]">
        Create Your Calendar
      </button>
    </section>
  );
});

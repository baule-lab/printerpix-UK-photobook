/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";

export const GiftLoveSection = component$(() => {
  return (
    <div class="container mx-auto flex items-start justify-center py-10">
      {/* Left Column */}
      <div class="flex w-[20%] flex-col items-center gap-14">
        <div class="h-[160px] w-[150px] rounded-md bg-yellow-100 p-4 text-center shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px] text-3xl">
          Explore 150+ unique fonts
        </div>
        <div class="h-[160px] w-[150px] rounded-md bg-yellow-100 p-4 text-center shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px] text-3xl">
          font 1 font 2 font 3
        </div>
        <div class="h-[160px] w-[150px] rounded-md bg-yellow-100 p-4 text-center shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px] text-3xl">
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
        <div class="h-[150px] w-[130px] rounded-md bg-yellow-100 p-4 text-center shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px] flex items-center justify-center">
          <span>Add colorful backgrounds & embellishments</span>
        </div>
        <div class="h-[150px] w-[130px] rounded-md bg-yellow-100 p-4 text-center shadow-[rgba(0,_0,_0,_0.35)_0px_5px_15px] flex items-center justify-center">
          background 1 embellishment 2 embellishment 3
        </div>
      </div>
    </div>
  );
});

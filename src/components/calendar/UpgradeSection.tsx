import { component$ } from "@builder.io/qwik";

export const UpgradeSection = component$(() => {
  return (
    <section class="flex flex-col items-center gap-4">
      <h1 class="text-[38px] font-bold leading-tight md:text-[68px]">
        Upgrade Your Photo Calendar
      </h1>
      {/* Section cho Banner */}
      <div class="container relative mt-8 flex w-full flex-col items-center bg-[url('/calendar/images/cta-upgrade-photo.jpg')] bg-cover bg-center sm:bg-[url('/calendar/images/cta-upgrade-photo.jpg')] sm:bg-right">
        <div class="absolute inset-0 block bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)] md:hidden"></div>

        <div class="relative flex min-h-[500px] w-[90%] flex-col items-center justify-end py-10 text-sm md:min-h-[500px] md:items-start md:justify-center">
          <div class="z-10 flex w-[339px] max-w-full flex-col items-center text-center text-white sm:hidden">
            <h1 class="text-3xl font-bold leading-tight">
              Professional 6 Color Printing
            </h1>
            <p class="mt-3 text-lg">
              Our cutting-edge printing method produces <br />
              smoother gradients, crisper details & richer colors.
            </p>
          </div>

          {/* Nội dung cho Desktop */}
          <div class="z-10 hidden w-[40%] max-w-full flex-col text-black sm:flex">
            <h1 class="text-[38px] font-bold leading-tight md:text-[68px]">
              Professional 6 Color Printing
            </h1>
            <p class="mt-3 text-2xl">
              Our cutting-edge printing method produces <br />
              smoother gradients, crisper details & richer colors.
            </p>
          </div>
        </div>
      </div>
      <button class="mx-auto h-[56px] w-full max-w-full gap-2.5 self-stretch rounded bg-[#F02480] px-4 py-3 text-base font-semibold text-white shadow-sm max-md:mt-10 md:h-auto md:w-[340px] mt-6">
        Create Your Calendar
      </button>
    </section>
  );
});

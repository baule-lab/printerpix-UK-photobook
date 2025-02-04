import { component$ } from "@builder.io/qwik";
import { PhotoBookGrid } from "./PhotoBookGrid";

export const HeroSection = component$(() => {
  return (
    <div class="flex flex-col items-center">
      {/* Section cho Banner */}
      <section class="relative mt-8 flex w-full flex-col items-center bg-[url('/images/banner-mobile.jpg')] bg-cover bg-center lg:bg-[url('/images/banner.jpg')] sm:bg-right">
        
        {/* Overlay với gradient đen mờ */}
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.6)] block lg:hidden"></div>
        
        <div class="container relative flex min-h-[500px] w-full flex-col items-center justify-end lg:justify-center py-10 text-sm lg:min-h-[500px] lg:items-start">
          {/* Nội dung cho Mobile */}
          <div class="flex w-[339px] max-w-full flex-col items-center text-center text-white lg:hidden z-10">
            <h1 class="md:text-5xl text-3xl font-bold leading-tight">
              Photo Books to Tell Your Story
            </h1>
            <p class="mt-3 md:text-xl text-lg">
              Starting at $14.99 <br />
              Get it by Sept 23 with Rush Shipping
            </p>
            <button class="mt-3 w-full gap-2.5 self-stretch rounded bg-[#F02480] px-4 py-3 text-white shadow-sm">
              Create your book
            </button>
          </div>

          {/* Nội dung cho Desktop */}
          <div class="hidden w-[40%] max-w-full flex-col text-black lg:flex z-10">
            <h1 class="xl:text-[68px] text-[48px] font-bold leading-tight">
              Photo Books to Tell Your Story
            </h1>
            <p class="mt-3 text-2xl">
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
    </div>
  );
});

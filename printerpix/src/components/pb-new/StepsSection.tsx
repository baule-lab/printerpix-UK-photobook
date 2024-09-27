/**
 * This code was generated by Builder.io.
 */
import { component$ } from "@builder.io/qwik";

export const StepsSection = component$(() => {
  return (
    <section class="flex flex-col mt-32 w-full max-w-[1256px] max-md:mt-10 max-md:max-w-full">
      <h2 class="text-3xl font-bold text-center text-zinc-800 max-md:max-w-full">
        Your Books in 3 Easy Steps
      </h2>
      <div class="flex flex-wrap gap-6 items-center mt-8 w-full text-center text-black max-md:max-w-full">
        <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px]">
          <div class="flex w-full bg-zinc-300 min-h-[547px]"></div>
          <div class="flex flex-col mt-6 w-full">
            <h3 class="text-2xl font-bold">Digital backups</h3>
            <p class="mt-3 text-sm">
              Quickly add images from your phone, computer, social media, &
              Google photos.
            </p>
          </div>
        </div>
        <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px]">
          <div class="flex w-full bg-zinc-300 min-h-[547px]"></div>
          <div class="flex flex-col mt-6 w-full">
            <h3 class="text-2xl font-bold">Auto-Create</h3>
            <p class="mt-3 text-sm">
              We'll instantly organize your photos into a cohesive, <br />{" "}
              well-designed story.
            </p>
          </div>
        </div>
        <div class="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px]">
          <div class="flex w-full bg-zinc-300 min-h-[547px]"></div>
          <div class="flex flex-col mt-6 w-full">
            <h3 class="text-2xl font-bold">Customize</h3>
            <p class="mt-3 text-sm">
              Easily change fonts, backgrounds, colors, <br /> shapes, stickers,
              and more.
            </p>
          </div>
        </div>
      </div>
      <a
        href="#start-creating"
        class="gap-2.5 self-center px-4 py-3 mt-8 max-w-full text-sm text-white bg-pink-500 rounded shadow-sm w-[136px] text-center"
      >
        Start creating
      </a>
    </section>
  );
});

/**
 * This code was generated by Builder.io.
 */
import { component$ } from "@builder.io/qwik";

export const StepsSection = component$(() => {
  const steps = [
    {
      title: "1. Upload",
      description:
        "Upload photos straight from your phone, desktop, tablet or social media.",
      video: "/videos/create-your-ways/step1.mp4",
    },
    {
      title: "2. Auto-Create",
      description:
        "Our smart AI instantly arranges your photos into a beautifully crafted story.",
      video: "/videos/create-your-ways/step2.mp4",
    },
    {
      title: "3. Personalize",
      description:
        "Easily edit layouts, backgrounds, fonts & more embellishments in just two taps.",
      video: "/videos/create-your-ways/step3.mp4",
    },
  ];

  return (
    <section class="container mx-auto mt-12 sm:flex flex-col justify-evenly gap-8 px-4 md:px-0 hidden">
      <h2 class="text-center text-3xl font-bold text-[#1A1A1A] max-md:max-w-full">
        How it Works — in 3 Simple Steps
      </h2>
      <div class="flex w-full flex-wrap items-stretch gap-6 text-center text-black max-md:max-w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            class="flex min-w-[240px] flex-1 shrink basis-0 flex-col justify-center"
          >
            <div class="flex min-h-[547px] w-full flex-grow bg-zinc-300">
              {/* Replacing image with video */}
              <video
                class="w-full h-full object-cover"
                src={step.video}
                autoplay
                loop
                muted
                playsInline
              />
            </div>
            <div class="mt-6 flex w-full flex-grow flex-col">
              <h3 class="text-2xl font-bold">{step.title}</h3>
              <p class="mt-3 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button class="w-[340px] max-w-full gap-2.5 self-center rounded bg-[#F02480] px-4 py-3 text-base text-white shadow-sm font-semibold">
        Start creating
      </button>
    </section>
  );
});

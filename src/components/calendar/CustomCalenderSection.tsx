import { component$ } from "@builder.io/qwik";

export const CustomCalenderSection = component$(() => {
  const steps = [
    {
      title: "16x11 Wall Calendars",
      description: "Show off your favorite photos with our largest calendar.",
      video: "/videos/create-your-ways/step1.mp4",
      buttonText: "Shop 16x11 Wall Calendars",
      buttonLink: "/create-16x11-calendar",
    },
    {
      title: "8x11 Wall Calendars",
      description: "Schedule in style with our classic wall calendar.",
      video: "/videos/create-your-ways/step2.mp4",
      buttonText: "Shop 8x11 Wall Calendars",
      buttonLink: "/create-8x11-calendar",
    },
  ];

  return (
    <section class="container mx-auto mt-12 sm:flex flex-col justify-evenly gap-8 px-4 md:px-0 hidden">
      <h2 class="text-center md:text-5xl text-3xl font-bold text-[#1A1A1A] max-md:max-w-full">
        Custom Calendars for Every Space
      </h2>
      <div class="flex w-full flex-wrap items-stretch gap-4 text-center text-black max-md:max-w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            class="flex min-w-[240px] flex-1 shrink basis-0 flex-col justify-center"
          >
            <div class="flex min-h-[547px] w-full flex-grow bg-zinc-300">
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
              <a
                href={step.buttonLink}
                class="mt-4 w-[340px] max-w-full gap-2.5 self-center rounded bg-[#F02480] px-4 py-3 text-base text-white shadow-sm font-semibold"
              >
                {step.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
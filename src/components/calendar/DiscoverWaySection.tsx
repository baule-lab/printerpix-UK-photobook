import { component$ } from "@builder.io/qwik";

export const DiscoverWaySection = component$(() => {
  const steps = [
    {
      title: "Desk Calendar",
      description:
        "Desk calendars arrive with a built-in stand for instant display.",
      image: "/calendar/images/discover/desk-calendar.jpg",
      buttonText: "Create Desk Calendar",
      buttonLink: "/create-desk-calendar",
    },
    {
      title: "Slim Calendar",
      description:
        "Compact calendars with room for appointments & notes.",
      image: "/calendar/images/discover/slim-calendar.jpg",
      buttonText: "Create Slim Calendar",
      buttonLink: "/create-slim-calendar",
    },
    {
      title: "Wall Calendar",
      description:
        "Beautifully display memories across two-page spreads.",
      image: "/calendar/images/discover/wall-calendar.jpg",
      buttonText: "Create Wall Calendar",
      buttonLink: "/create-wall-calendar",
    },
  ];

  return (
    <section class="container mx-auto mt-12 sm:flex flex-col justify-evenly gap-8 px-4 md:px-0 hidden">
      <h2 class="text-center md:text-5xl text-3xl font-bold text-[#1A1A1A] max-md:max-w-full">
        Discover More Ways to Stay Organized 
      </h2>
      <div class="flex w-full flex-wrap items-stretch gap-4 text-center text-black max-md:max-w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            class="flex min-w-[240px] flex-1 shrink basis-0 flex-col justify-center"
          >
            <div class="flex min-h-[547px] w-full flex-grow bg-zinc-300">
              {/* Replacing image with video */}
              <img
                class="w-full h-full object-cover"
                src={step.image}
                alt={step.title}
                loading="lazy"
                height="547"
                width="240"
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
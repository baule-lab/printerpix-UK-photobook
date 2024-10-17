import { component$ } from "@builder.io/qwik";

export const CalendarSpecialities = component$(() => {
  const steps = [
    {
      title: "Start From Any Month",
      description:
        "Be it September, January or any month that fits your schedule.",
      image:
        "/calendar/images/calendar-specialities/start-from-any-month.jpg",
    },
    {
      title: "Customize Every Date",
      description: "Mark important dates with your own photos & text.",
      image:
        "/calendar/images/calendar-specialities/customize-every-date.jpg",
    },
    {
      title: "Create One, Gift to Many",
      description:
        "Design once & order copies to delight family & friends.",
      image:
        "/calendar/images/calendar-specialities/create-one-gift-to-many.jpg",
    },
    {
      title: "Ready to Hang",
      description: "Wall & slim calendars come with a hole or hanger for easy display.",
      image:
        "/calendar/images/calendar-specialities/ready-to-hang.jpg",
    },
  ];

  return (
    <section class="container mx-auto hidden flex-col justify-evenly gap-8 px-4 sm:flex md:px-0">
      <h2 class="text-center text-3xl font-bold text-[#1A1A1A] max-md:max-w-full md:text-5xl">
        Create Your Calendar, Your Way
      </h2>
      <div class="flex w-full flex-wrap items-stretch gap-4 text-center text-black max-md:max-w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            class="flex min-w-[240px] flex-1 shrink basis-0 flex-col justify-center"
          >
            <div class="flex min-h-[547px] w-full flex-grow bg-zinc-300">
              <img
                class="h-full w-full object-cover"
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
            </div>
          </div>
        ))}
      </div>
      <button class="h-[56px] w-full max-w-full gap-2.5 self-center rounded bg-[#F02480] px-4 py-3 text-base font-semibold text-white shadow-sm md:h-auto md:w-[340px]">
        Create Your Calendar
      </button>
    </section>
  );
});
